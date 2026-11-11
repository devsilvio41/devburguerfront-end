import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.black};

  img {
    width: 50%;
    margin: 40px 20px;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  text-decoration: none;
  color: ${(props) => props.theme.white};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.purple};
    font-weight: 900;
  }
`;
export const Footer = styled.footer`
  width: 100%;
  margin-top: auto;
`;
