import { Route, Routes } from "react-router-dom";
import {
  Cart,
  Home,
  Login,
  Register,
  Menu,
  Checkout,
  CompletePayment,
  Orders,
  NewProduct,
  EditProduct,
  Products,
} from "../containers";
import { UserLayout } from "../layouts/UserLayout/index.jsx";
import { AdminLayout } from "../layouts/AdminLayout/index.jsx";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Menu />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/complete" element={<CompletePayment />} />
      </Route>
      {/* Rotas de admin */}
      <Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="pedidos" element={<Orders />} />
          <Route path="novo-produto" element={<NewProduct />} />
          <Route path="editar-produto" element={<EditProduct />} />
          <Route path="produtos" element={<Products />} />
        </Route>
      </Route>
      {/* FIM rotas de admin */}
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
    </Routes>
  );
}
