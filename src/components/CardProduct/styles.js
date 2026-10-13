import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: grab;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
  }

  p {
    font-size: 1.1rem;
    color: #ff8c05;
    font-weight: 700;
    line-height: 1.4rem;
    margin-top: 2.5rem;
    display: flex;
  }

  strong {
    font-size: 1.2rem;
    color: #363636;
    font-weight: 800;
    line-height: 1.4rem;
  }
`;

export const CardImage = styled.img`
  height: 100px;
  position: absolute;
  top: -50px;
  overflow: visible;
`;
