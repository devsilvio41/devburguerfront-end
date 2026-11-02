import styled from "styled-components";
import BannerHome from "../../assets/banner-home.svg";
import Background from "../../assets/background.svg";

export const Banner = styled.div`
  background: url("${BannerHome}");
  background-repeat: no-repeat;
  background-color: #000;
  background-size: cover;
  background-position: center;
  height: 30rem;
  max-height: 400px;
  /* width: 50%; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 2rem;

  h1 {
    font-family: "Road Rage", sans-serif;
    position: absolute;
    font-size: 3rem;
    color: #f4f4f4;
    right: 20%;
    top: 10%;
  }
`;

export const Container = styled.section`
  background:
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url("${Background}");
  height: 100%;
  background-position: center;
`;

export const Content = styled.div`
  padding-bottom: 4rem;
`;
