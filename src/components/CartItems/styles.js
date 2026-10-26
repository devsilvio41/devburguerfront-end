import styled from "styled-components";

export const ProductImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 16px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #484848;
  font-weight: 400;

  button {
    background: #9758a6;
    color: #fff;
    font-weight: 600;
    height: 30px;
    width: 30px;
    border: none;
    border-radius: 4px;

    &:hover {
      background-color: #6f357c;
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

export const TrashImage = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;
  border: none;
`;
