import styled from "styled-components";

export const CarouselContainer = styled.div`
  background-image: url("${(props) => props.$imageUrl}");
  display: flex;
  overflow-x: auto;
  padding: 1rem;
  gap: 1rem;
`;

export const Container = styled.div`
  .carousel-item {
    padding-right: 2.2rem;
  }
  overflow-x: hidden;

  .react-multi-carousel-list {
    overflow: visible;
  }
  padding-left: 40px;
  padding-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #61a120;
  padding-bottom: 0.8rem;
  position: relative;
  text-align: center;
  margin: 3.7rem 0;
  text-transform: uppercase;
  &::after {
    content: "";
    position: absolute;
    width: 3rem;
    height: 0.25rem;
    background-color: #61a120;
    bottom: 5px;
    left: calc(50% - 1.5rem);
  }
`;
