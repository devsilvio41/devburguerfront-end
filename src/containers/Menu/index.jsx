import { useState } from "react";
import { api } from "../../services/api";
import {
  Container,
  Banner,
  CategoryMenu,
  ProductsContainer,
  CategoryButton,
} from "./styles";
import { useEffect } from "react";
import { formatPrice } from "../../utils/formatPrice";
import { CardProduct } from "../../components/CardProduct";

export function Menu() {
  // Inicio UseEffec e useState
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("/categories");
      const newCategories = [{ id: 0, name: "Todas" }, ...data];

      setCategories(newCategories);
      console.log(data);
    }

    async function loadProducts() {
      const { data } = await api.get("/products");

      const newProducts = data.products.map((product) => ({
        currrencyValue: formatPrice(product.price),
        ...product,
      }));

      setProducts(newProducts);
    }

    loadCategories();
    loadProducts();
  }, []);
  // Fim UseEffec e useState

  return (
    <>
      <Container>
        <Banner>
          <h1>
            O MELHOR <br /> HAMBURGER <br /> ESTA AQUI!
          </h1>
          <span>Esse cardápio está irresistível</span>
        </Banner>
        <CategoryMenu>
          {categories.map((category) => (
            <CategoryButton key={category.id}>{category.name}</CategoryButton>
          ))}
        </CategoryMenu>
        <ProductsContainer>
          {products.map((product) => (
            <CardProduct product={product} key={product.id} />
          ))}
        </ProductsContainer>
      </Container>
    </>
  );
}
