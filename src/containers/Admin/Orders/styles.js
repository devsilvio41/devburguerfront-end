import styled from "styled-components";
import Select from "react-select";

export const ProductImage = styled.img`
  height: 80px;
  padding: 10px;
  border-radius: 16px;
  align-items: center;
`;

export const SelectStatus = styled(Select)`
  width: 240px;
`;

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  margin: 28px 0;
  gap: 50px;
`;
export const FilterOption = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: ${(props) => (props.$isActiveStatus ? props.theme.purple : props.theme.darkGray)};
  border-bottom: ${(props) => (props.$isActiveStatus ? `2px solid ${props.theme.veryDarkGray}` : "none")};
  font-weight: ${(props) => (props.$isActiveStatus ? 700 : "none")};
  font-size: 1.1rem;
`;
