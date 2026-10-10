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
import { useNavigate } from "react-router-dom";

export function Menu() {
  // Inicio UseEffec e useState
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("/categories");
      // const newCategories = [{ id: 0, name: "Todas" }, ...data];
      setCategories([{ id: 0, name: "Todas" }, ...data]);

      // setCategories(newCategories);
    }

    async function loadProducts() {
      const { data } = await api.get("/products");

      const newProducts = data.products.map((product) => ({
        currencyValue: formatPrice(product.price),
        ...product,
      }));

      setProducts(newProducts);
    }

    loadCategories();
    loadProducts();
  }, []);
  // Fim UseEffec e useState
  // Calculado a cada render, sem state e sem useEffect
  const filteredProducts =
    activeCategory === 0
      ? products
      : products.filter((product) => product.category_id === activeCategory);

  // useEffect(() => {
  //   if (activeCategory === 0) {
  //     setFilteredProducts(products);
  //   } else {
  //     const newFilteredProducts = products.filter(
  //       (product) => product.category_id === activeCategory[0],
  //     );
  //     setFilteredProducts(newFilteredProducts);
  //   }
  // });
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
            // Inicio Botão de navegação entre categorias
            // <CategoryButton
            //   key={category.id}
            //   to={`/cardapio?categoria=${category.id}`}
            //   $isActiveCategory={category.id === activeCategory}
            //   onClick={() => {
            //     navigate(
            //       {
            //         pathname: "/cardapio",
            //         search: `?categoria=${category.id}`,
            //       },
            //       { replace: true },
            //     );
            //     setActiveCategory(category.id);
            //   }}
            // >
            //   {category.name}
            // </CategoryButton>
            // Fim Botão de navegação entre categorias
            <CategoryButton
              key={category.id}
              $isActiveCategory={category.id === activeCategory}
              onClick={() => {
                navigate(
                  {
                    pathname: "/cardapio",
                    search: `?categoria=${category.id}`,
                  },
                  { replace: true },
                );
                setActiveCategory(category.id);
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
        </CategoryMenu>
        <ProductsContainer>
          {filteredProducts.map((product) => (
            <CardProduct product={product} key={product.id} />
          ))}
        </ProductsContainer>
      </Container>
    </>
  );
}
