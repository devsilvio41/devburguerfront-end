import {
  useContext,
  createContext,
  useEffect,
  useState,
  Children,
} from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const putProductInCart = (product) => {};

  // Inicio limpa carrinho
  const clearCart = () => {};
  // Fim limpa carrinho

  // Inicio Deletar itens do carrinho
  const deleteProduct = (product) => {};
  // Fim Deletar itens do carrinho

  // Inicio Incluir itens no carrinho
  const increaseProduct = (productId) => {};
  // Fim Incluir itens no carrinho

  const decreaseProduct = (productId) => {};

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        putProductInCart,
        deleteProduct,
        clearCart,
        increaseProduct,
        decreaseProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used with a context");
  }

  return context;
};
