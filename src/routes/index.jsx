import { createBrowserRouter } from "react-router-dom";
import { Header, Footer } from "../components";
import {
  Cart,
  Checkout,
  Home,
  Login,
  Register,
  Menu,
  CompletePayment,
} from "../containers/index.js";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Register />,
  },
  {
    path: "/cardapio",
    element: (
      <>
        <Header />
        <Menu />
        <Footer />
      </>
    ),
  },
  {
    path: "/carrinho",
    element: (
      <>
        <Header />
        <Cart />
        <Footer />
      </>
    ),
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/complete",
    element: (
      <>
        <Header />
        <CompletePayment />
      </>
    ),
  },
]);
