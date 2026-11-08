import { Banner, Container } from "./styles";
import {
  CategoriesCarousel,
  OffersCarousel,
  BackButton,
} from "../../components";
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
          </div>
        </Container>
        <BackButton />
      </main>
    </>
  );
}
