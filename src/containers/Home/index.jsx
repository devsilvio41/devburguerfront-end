import { Banner, Container } from "./styles";
import { CategoriesCarousel } from "../../components/CategoriesCarousel";
import { OffersCarousel } from "../../components/OffersCarousel";
import { BackButton } from "../../components/BackButton";
export function Home() {
  return (
    <>
      <main>
        <Banner>
          <h1>Bem-vindo!</h1>
        </Banner>
        <Container>
          <div>
            <CategoriesCarousel />
            <OffersCarousel />
            <div style={{ textAlign: "center" }}>Rodapé</div>
          </div>
        </Container>
        <BackButton />
      </main>
    </>
  );
}
