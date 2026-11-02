import { createBrowserRouter } from "react-router-dom";
// import { Header } from "../components/Header";
// import { Footer } from "../components/Footer";
import { Header, Footer } from "../components";
import {
  Cart,
  Home,
  Login,
  Register,
  Menu,
  Checkout,
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
