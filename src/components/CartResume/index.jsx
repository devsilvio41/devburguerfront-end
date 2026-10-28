import { Button } from "../Button";
import { Container } from "./styles";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

import { useCart } from "../../hooks/CartContext";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { useNavigate } from "react-router-dom";

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryTax] = useState(600);

  const navigate = useNavigate();

  const { cartProducts, clearCart } = useCart();
  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);
    setFinalPrice(sumAllItems);
  }, [cartProducts]);

  const submitOrder = async () => {
    const products = cartProducts.map((product) => {
      return { id: product.id, quantity: product.quantity };
    });

    try {
      const { status } = await api.post(
        "/orders",
        { products },
        {
          validateStatus: () => true,
        },
      );

      if (status === 200 || status === 201) {
        toast.success("Pedido realizado com sucesso!");
        setTimeout(() => {
          navigate("/");
        }, 2000);

        clearCart();
      } else if (status === 400) {
        toast.error("Falha ao realizar seu pedido.");
      } else {
        toast.error("🫤Falha no sistema! Tente novamente.");
      }
    } catch {
      toast.error("🫤Falha no sistema! Tente novamente.");
    }
  };

  // Sugestão de melhoria sem useEffect e useState
  //   const { cartProducts, clearCart } = useCart();
  // const [deliveryTax] = useState(600);

  // const finalPrice = cartProducts.reduce((acc, current) => {
  //   return current.price * current.quantity + acc;
  // }, 0);
  // Fim Sugestão de melhoria sem useEffect e useState

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do Pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatPrice(finalPrice)}</p>
          <p className="delivery-tax">Taxa de Entrega</p>
          <p className="delivery-tax-price">{formatPrice(deliveryTax)}</p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>{formatPrice(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <Button onClick={submitOrder}>Finalizar pedido</Button>
    </div>
  );
}
