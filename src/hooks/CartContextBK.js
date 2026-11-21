import { useContext, createContext, useEffect, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  //Adiciona o produto ou soma + 1 se já existir
  const putProductInCart = (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);
    let newProductInCart = [];

    if (cartIndex >= 0) {
      newProductInCart = cartProducts;

      newProductInCart[cartIndex].quantity =
        newProductInCart[cartIndex].quantity + 1;

      setCartProducts(newProductInCart);
    } else {
      product.quantity = 1;
      newProductInCart = [...cartProducts, product];
      setCartProducts(newProductInCart);
    }
  };

  // Inicio limpa carrinho
  const clearCart = () => {};
  // Fim limpa carrinho

  // Inicio Incluir itens no carrinho
  const increaseProduct = (productId) => {
    const newCart = cartProducts.map((prd) => {
      return prd.id === productId
        ? { ...prd, quantity: prd.quantity + 1 }
        : prd;
    });
    // Fim Incluir itens no carrinho

    // Inicio Deletar itens do carrinho
    const deleteProduct = (productId) => {
      const newCart = cartProducts.filter((prd) => prd.id !== productId);
      setCartProducts(newCart);
      updateLocalStorage(newCart);
    };
    deleteProduct(productId);
    // Fim Deletar itens do carrinho

    setCartProducts(newCart);
  };
  // Fim Incluir itens no carrinho

  const decreaseProduct = (productId) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);
    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((prd) => {
        return prd.id === productId
          ? { ...prd, quantity: prd.quantity - 1 }
          : prd;
      });

      setCartProducts(newCart);
      updateLocalStorage(newCart);
    } else {
    }
  };

  function updateLocalStorage(products) {
    localStorage.setItem("devburguer:cartInfo", JSON.stringify(products));
  }

  useEffect(() => {}, [cartProducts]);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        putProductInCart,
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
