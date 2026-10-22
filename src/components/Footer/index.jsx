import { Container } from "./styles";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <Container>
      <p>
        Desenvolvido por DevClub
        <Link
          to="https://www.linkedin.com/in/silvioribas41/"
          target="_blank"
          title="LinkeDin Sílvio Ribas"
        >
          Sílvio Ribas
        </Link>
        - 2025 - Todos os direitos reservados
      </p>
    </Container>
  );
}
