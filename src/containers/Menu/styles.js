import BannerHamburger from "../../assets/banner-hamburger.svg";
import styled from "styled-components";
import Background from "../../assets/background.svg";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f0f0f0;
  background:
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url("${Background}");
  height: 100%;
  background-position: center;
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 480px;
  width: 100%;

  background-image: url("${BannerHamburger}");
  background-repeat: no-repeat;
  background-color: #1f1f1f;
  background-position: center;
  background-size: cover;

  h1 {
    font-family: "Road Rage", sans-serif;
    font-size: 5rem;
    line-height: 65px;
    position: absolute;
    right: 20%;
    top: 10%;
    color: #fff;
  }

  span {
    color: #fff;
    display: block;
    margin: 10px auto 0 auto;
    position: absolute;
    font-weight: 400;
    font-style: normal;
    line-height: 69%;
    text-align: center;
    font-size: 1.2rem;
    right: 20%;
    top: 50%;
  }
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.1rem;
  margin: 20px auto 20px;
`;

export const CategoryButton = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  ${(props) => (props.$isActiveCategory ? "font-weight: 600;" : "font-weight: 500;")}
  color: ${({ $isActiveCategory, theme }) =>
    $isActiveCategory ? theme.purple : theme.veryDarkGray};
  border: none;
  border-bottom: ${(props) => props.$isActiveCategory && "3px solid "};
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 60px;
  justify-content: center;
  max-width: 1280px;
  gap: 50px;
  margin: 50px auto 0;
`;
