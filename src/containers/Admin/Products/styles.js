import styled from "styled-components";

export const Container = styled.div``;

export const EditButton = styled.button`
  background-color: ${(props) => props.theme.ligthGray};
  border: 0;
  height: 32px;
  width: 32px;
  margin: 0 auto;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background-color: ${(props) => props.theme.purple};

    svg {
      fill: ${(props) => props.theme.white};
    }
  }
`;

export const ProductImage = styled.img`
  height: 80px;
  border-radius: 15px;
  padding: 12px;
`;
