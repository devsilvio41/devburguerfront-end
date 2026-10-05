import { api } from "../../services/api";
import { useEffect, useState } from "react";
import CarouselModule from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Title, ContainerItems } from "./styles";

// Se vier embrulhado, pega o .default; se não, usa direto
const Carousel = CarouselModule.default ?? CarouselModule;

export function OffersCarousel() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get("/products");
      const onlyOffers = data.products.filter(
        (product) => product.offer === true,
      );

      setOffers(onlyOffers);
    }

    loadProducts();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1280, min: 690 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 2,
    },
  };

  return (
    <Container>
      <Title>Ofertas do Dia</Title>
      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisible={false}
        itemClass="carousel-item"
      >
        {offers.map((product) => (
          <ContainerItems key={product.id} $imageUrl={product.url}>
            <p>{product.name}</p>
          </ContainerItems>
        ))}
      </Carousel>
    </Container>
  );
}
