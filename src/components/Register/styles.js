import styled from "styled-components";
import BackgroundLogin from "../../assets/background-login.svg";
import Background from "../../assets/background.svg";
import { Link as ReactLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LeftContainer = styled.div`
  background: url("${BackgroundLogin}");
  background-size: cover;
  background-position: center;

  height: 100%;
  width: 100%;
  max-width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
  }
`;

export const RigthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: url("${Background}");
  background-color: #1e1e1e;
  p {
    color: #fff;
    font-size: 18px;
    font-weight: 800;
  }
  a {
    font-size: 18px;
    cursor: pointer;
  }

  height: 100%;
  width: 100%;
  max-width: 50%;
`;

export const Title = styled.h2`
  font-family: "Road Rage", sans-serif;
  color: #fff;
  font-size: 2.5rem;

  a {
    color: #9558a6;
    font-family: "Road Rage", sans-serif;
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
    color: yellow;
    color: #fff;
    font-size: 0.8rem;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 200;
    height: 10px;
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
