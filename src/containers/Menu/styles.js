import BannerHamburger from "../../assets/banner-hamburger.svg";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 480px;
  width: 100%;

  background-image: url("${BannerHamburger}");
  background-color: #1f1f1f;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

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

export const CategoryMenu = styled.div``;

export const ProductsContainer = styled.div``;
