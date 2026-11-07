import { useState } from "react";
import { useCart } from "../../../hooks/CartContext";
import { api } from "../../../services/api";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "../styles.css";
import { toast } from "react-toastify/unstyled";
import { useNavigate } from "react-router-dom"; // removido o "Navigate"

export function CheckoutForm() {
  const { cartProducts, clearCart } = useCart();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || isLoading) {
      console.error(
        "Stripe.js ainda não carregou ou o formulário já está sendo enviado.",
      );
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        redirect: "if_required",
        confirmParams: {
          return_url: "http://localhost:5173/complete",
        },
      });

      if (error) {
        setMessage(error.message);
        toast.error(`Erro no pagamento: ${error.message}`);
      } else if (paymentIntent && paymentIntent.status === "succeeded") {
        try {
          const products = cartProducts.map((product) => {
            return {
              id: product.id,
              quantity: product.quantity,
              price: product.price,
            };
          });

          const { status } = await api.post(
            "/orders",
            { products },
            {
              validateStatus: () => true,
            },
          );

          if (status === 200 || status === 201) {
            toast.success("Pedido realizado com sucesso!");
            clearCart();
            setTimeout(() => {
              navigate(
                `/complete?payment_intent_client_secret=${paymentIntent.client_secret}`,
              ); // minúsculo: a função do useNavigate
            }, 3000);
          } else if (status === 400) {
            toast.error("Falha ao realizar seu pedido.");
          } else {
            toast.error("🫤Falha no sistema! Tente novamente.");
          }
        } catch {
          toast.error("🫤Falha no sistema! Tente novamente.");
        }
      } else {
        navigate(
          `/complete?payment_intent_client_secret=${paymentIntent.client_secret}`,
        );
      }
    } catch (error) {
      setMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const paymentElementOptions = {
    layout: "accordion",
  };

  return (
    <div className="checkout-form-container">
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className="button"
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pagar agora"
            )}
          </span>
        </button>
        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
}
