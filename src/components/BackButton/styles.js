import styled from "styled-components";

export const StyledButton = styled.button`
  position: fixed;
  left: 24px; /* troque por right: 24px para ficar na direita */
  bottom: 30%; /* ou top: 24px para ficar no topo */
  z-index: 100;

  background: ${(props) => props.theme.purple};
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.3);

  &:hover {
    filter: brightness(1.1);
  }

  /* Responsividade: telas menores */
  @media (max-width: 768px) {
    left: 12px;
    bottom: 12px;
    padding: 10px 16px;
  }
`;
