import { createBrowserRouter } from "react-router-dom";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { Home } from "../components/Home";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Register />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);
