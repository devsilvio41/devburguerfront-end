import styled from "styled-components";

export const Root = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 20px;
`;

export const Header = styled.thead`
  font-weight: 600;
`;

export const Tr = styled.tr`
  background: #fff;
`;

export const Th = styled.th`
  border: none;
  background: #484848;
  padding: 16px;
  text-align: left;
  color: #fff;
  font-weight: bold;
  border-bottom: 1px solid #cdcdcd;

  &:first-child {
    border-top-left-radius: 20px;
  }

  &:last-child {
    border-top-right-radius: 20px;
  }
`;

export const Td = styled.td`
  padding: 16px;
  color: #000;
  font-weight: 500;
  line-height: 115%;
`;

export const Body = styled.tbody``;
