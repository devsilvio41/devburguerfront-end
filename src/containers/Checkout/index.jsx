import { Elements } from "@stripe/react-stripe-js";
import { Navigate, useLocation } from "react-router-dom";
import stripePromise from "../../config/stripeConfig";
import { CheckoutForm } from "../../components/Stripe/CheckoutForm";

export function Checkout() {
  const { state } = useLocation();
  const clientSecret = state?.clientSecret;

  if (!clientSecret) {
    return <Navigate to="/carrinho" replace />; // confirme se essa é a rota do seu carrinho
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  );
}
