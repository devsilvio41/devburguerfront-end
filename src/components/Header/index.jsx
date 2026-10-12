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

export function Header() {
  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <HeaderLink>Home</HeaderLink>
            <HeaderLink>Cardápio</HeaderLink>
          </div>
        </Navigation>

        <Options>
          <Profile>
            <UserCircleIcon color={"#fff"} size={24} />
            <div>
              <p>
                Olá, <span>Rodolfo!</span>
              </p>
              <Logout>Sair</Logout>
            </div>
          </Profile>
          <LinkContainer>
            <ShoppingCartSimpleIcon color={"#fff"} size={24} />
            <HeaderLink>Carrinho</HeaderLink>
          </LinkContainer>
        </Options>
      </Content>
    </Container>
  );
}
