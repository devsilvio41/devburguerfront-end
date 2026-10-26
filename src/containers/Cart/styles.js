import styled from "styled-components";
import Texture from "../../assets/texture.png";
import Background from "../../assets/background.svg";

export const Container = styled.div`
  background:
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url("${Background}");
  background-color: #f0f0f0;
  min-height: 100vh;
`;
export const Banner = styled.div`
  background: url("${Texture}");
  background-color: #1f1f1f;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 180px;

  img {
    height: 130px;
  }
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 800;
  padding-bottom: 0.8rem;
  color: #61a120;
  text-align: center;
  position: relative;

  &::after {
    position: absolute;
    left: calc(50% + -28px);
    bottom: 0;
    content: "";
    width: 56px;
    height: 4px;
    background-color: #61a120;
  }
`;

export const Content = styled.div`
  background-size: cover;
  display: grid;
  grid-template-columns: 1fr 30%;
  width: 100%;
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;
  gap: 40px;
`;
