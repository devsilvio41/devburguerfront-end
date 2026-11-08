import { Link } from "react-router-dom";
import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 1rem;
  gap: 1rem;
`;

export const Container = styled.div`
  .carousel-item {
    padding-right: 2rem;
  }
  .react-multiple-carousel__arrow--left {
    left: 15px;
    top: 10px;
  }

  .react-multiple-carousel__arrow--right {
    top: 10px;
  }
  padding-left: 30px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: ${(props) => props.theme.green};
  padding-bottom: 0.8rem;
  position: relative;
  text-align: center;
  margin-bottom: 2.5rem;
  text-transform: uppercase;
  &::after {
    content: "";
    position: absolute;
    width: 3rem;
    height: 0.25rem;
    background-color: ${(props) => props.theme.green};
    bottom: 5px;
    left: calc(50% - 1.5rem);
  }
`;

export const ContainerItems = styled.div`
  position: relative; /* NOVO: referência para o botão absoluto */
  display: flex;
  align-items: center; /* base do card */
  justify-content: flex-start; /* esquerda (antes: center) */
  padding: 1rem; /* distância das bordas */
  padding: 0.5rem 1rem;
  width: 100%;
  height: 15.625rem;
  border-radius: 1.25rem;
  background-image: url("${(props) => props.$imageUrl}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    cursor: grab;
  }

  color: ${(props) => props.theme.white};
  font-size: 1.5rem;
  font-weight: bold;
`;

export const CategoryButton = styled(Link)`
  position: absolute;
  bottom: 4rem;
  left: 1rem;

  padding: 0.25rem 1.875rem;
  white-space: nowrap;

  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 1.8rem;
  color: ${(props) => props.theme.white};
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.purple};
    font-weight: 600;
  }
`;
