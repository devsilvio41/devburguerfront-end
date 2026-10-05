import { Banner, Container, Content } from "./styles";
import { CategoriesCarousel } from "../../components/CategoriesCarousel";
import { OffersCarousel } from "../../components/OffersCarousel";
export function Home() {
  return (
    <>
      <main>
        <Banner>
          <h1>Bem-vindo(a)!</h1>
        </Banner>
        <Container>
          <Content>
            <CategoriesCarousel />
            <OffersCarousel />
            <div>Carrossel produtos</div>
          </Content>
        </Container>
      </main>
    </>
  );
}
