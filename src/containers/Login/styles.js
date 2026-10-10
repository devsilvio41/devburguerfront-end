import styled from "styled-components";
import BackgroundLogin from "../../assets/background-login.svg";
import Background from "../../assets/background.svg";
import { Link as ReactLink } from "react-router-dom";

/* 🔧 div → main | 100vh → min-height | 100vw → 100% */
export const Container = styled.main`
  display: flex;
  min-height: 100vh;
  width: 100%;

  /* 🔧 Tablet e celular: empilha as colunas */
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  background: url("${BackgroundLogin}");
  background-size: cover;
  background-position: center;

  /* 🔧 removi height: 100% (o flex já estica a coluna sozinho) */
  width: 100%;
  max-width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 25rem;
  }

  /* 🔧 Vira um "banner" no topo */
  @media (max-width: 900px) {
    max-width: 100%;
    min-height: 200px;

    img {
      width: 12rem;
    }
  }
`;

/* 🔧 div → section (tem um título dentro, então faz sentido como seção) */
export const RigthContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: url("${Background}");
  background-size: cover;
  background-color: #1e1e1e;

  /* 🔧 removi height: 100% */
  width: 100%;
  max-width: 50%;

  p {
    color: #fff;
    font-size: 18px;
    font-weight: 800;
  }
  a {
    font-size: 18px;
  }

  @media (max-width: 900px) {
    max-width: 100%;
    flex: 1; /* ocupa o resto da altura da tela */
    padding: 24px 0;
  }
`;

/* 🔧 h2 → h1 (título principal da página) */
export const Title = styled.h1`
  font-family: "Road Rage", sans-serif;
  color: #fff;
  font-size: 2.5rem;

  span {
    color: #9558a6;
    font-family: "Road Rage", sans-serif;
  }

  @media (max-width: 900px) {
    font-size: 1.8rem;
    text-align: center;
    padding: 0 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 1rem;
  }

  label {
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
  }

  p {
    color: #fff; /* 🔧 tirei o "color: yellow" duplicado (o segundo sempre vencia) */
    font-size: 0.8rem;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 200;
    min-height: 1rem; /* 🔧 era height: 10px */
  }
`;

export const Link = styled(ReactLink)`
  display: inline-block;
  font-size: 18px;
  color: #fff;
  text-decoration: none;
  transition: transform 0.2s ease;

  &:hover {
    text-decoration: underline;
    transform: translateX(15px) scale(1.2);
    font-weight: 900;
    color: yellow;
  }
`;
