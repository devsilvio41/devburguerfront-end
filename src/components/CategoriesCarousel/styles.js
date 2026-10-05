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
  padding-left: 30px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #9758a6;
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
    background-color: #9758a6;
    bottom: 5px;
    left: calc(50% - 1.5rem);
  }
`;

export const ContainerItems = styled.div`
  display: flex;
  align-items: center; /* base do card */
  justify-content: flex-start; /* esquerda (antes: center) */
  padding: 1rem; /* distância das bordas */
  padding: 0.5rem 1rem;
  width: 90%;
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

  p {
    color: #fff;
    margin-top: 5.625rem;
    width: 9.375rem;
    max-width: 80%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0.0625rem 1.875rem;
    border-radius: 1.8rem;
    font-size: 1.1rem;
    font-weight: bold;
    /* margin-right: 1rem; */
  }

  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
`;
