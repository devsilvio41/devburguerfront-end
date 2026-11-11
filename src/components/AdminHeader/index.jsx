import {
  Container,
  Content,
  Navigation,
  HeaderLink,
  Options,
  Profile,
  Logout,
  LinkContainer,
} from "./styles";
import { UserCircleIcon, ShoppingCartSimpleIcon } from "@phosphor-icons/react";
import { useNavigate, useResolvedPath } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";

export function AdminHeader() {
  const navigate = useNavigate();

  const { pathname } = useResolvedPath();

  function logoutUser() {
    navigate("/login");
    const { logout, userInfo } = useUser;
    logout();
  }

  const { userInfo } = useUser();
  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <HeaderLink to="/" $isActive={pathname === "/"}>
              Home
            </HeaderLink>{" "}
            <hr></hr>
            <HeaderLink to="/cardapio" $isActive={pathname === "/cardapio"}>
              Cardápio
            </HeaderLink>
          </div>
        </Navigation>

        <Options>
          <Profile>
            <UserCircleIcon color={"#fff"} size={24} />
            <div>
              <p>
                Olá, <span>{userInfo.name ?? "visitante"}</span>
              </p>
              <Logout onClick={logoutUser}>Sair</Logout>
            </div>
          </Profile>
          <LinkContainer>
            <ShoppingCartSimpleIcon color={"#fff"} size={24} />
            <HeaderLink to="/carrinho">Carrinho</HeaderLink>
          </LinkContainer>
        </Options>
      </Content>
    </Container>
  );
}
