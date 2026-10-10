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

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 1.9rem;

  /* a {
    text-decoration: none;
    color: #9758a6;
    font-weight: 600;
    padding-bottom: 2px;
    line-height: 20px;
    border-bottom: 2px solid #9758a9;

    transition:
      transform 0.3s ease,
      color 0.3s ease;

    &:hover {
      transform: translateY(-3px) scale(1.1);
      color: #9758a6;
    } */
  }
`;

// export const CategoryButton = styled.button`
//   cursor: pointer;
//   background: none;
//   color: #9758a6;
//   font-size: 1.5rem;
//   font-weight: 600;
//   padding-bottom: 5px;
//   line-height: 20px;
//   text-decoration: none;
//   border: none;

//   border-bottom: ${(props) =>
//     props.$isActiveCategory ? "5px solid #9758a6" : "3px solid transparent"};
// `;

export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  border: none;
  color: ${(props) => (props.$isActiveCategory ? "#9758a6" : "#696969")};
  font-size: 1.5rem;
  font-weight: 600;
  padding-bottom: 5px;
  line-height: 20px;
  border-bottom: ${(props) =>
    props.$isActiveCategory ? "3px solid #9758a6" : "3px solid transparent"};

       transition:
      transform 0.3s ease,
      color 0.3s ease;

    &:hover {
      transform: translateY(-3px) scale(1.1);
      color: #9758a6;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 2.2rem;
  justify-content: center;
  gap: 5rem;
  margin: 3rem auto 0;
  max-width: 1280px;
`;
