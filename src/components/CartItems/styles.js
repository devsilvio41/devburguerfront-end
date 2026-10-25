import styled from "styled-components";

export const ProductImage = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 16px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #484848;
  font-weight: 400;

  button {
    background: #9758a6;
    color: #484848;
    height: 30px;
    width: 30px;
    border: none;
    border-radius: 5px;

    &:haver {
      background-color: #000;
      transition: all 0.4s;
    }
  }
`;

export const EmptyCart = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;

export const ProductTotalPrice = styled.p`
  font-weight: bold;
`;
