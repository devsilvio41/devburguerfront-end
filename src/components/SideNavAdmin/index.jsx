import { navLinks } from "./navLinks";
import Gordao from "../../assets/gordao.png";
import { SignInIcon } from "@phosphor-icons/react";
import { Container, NavLink, NavLinkContainer, Footer } from "./styles";
import { useUser } from "../../hooks/UserContext";

export function SideNavAdmin() {
  const { logout } = useUser();
  return (
    <Container>
      <img src={Gordao} alt="Logo Restaurante Gordão e Pampam Lanches" />
      <NavLinkContainer>
        {navLinks.map((link) => (
          <NavLink key={link.id} to={link.path}>
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </NavLinkContainer>
      <Footer>
        <NavLink to="/login" onClick={logout}>
          <SignInIcon />
          <span>Sair</span>
        </NavLink>
      </Footer>
    </Container>
  );
}
