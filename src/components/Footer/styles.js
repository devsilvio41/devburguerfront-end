import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5c2669;
  height: 25px;

  p {
    color: #fff;
    font-size: 1rem;
    font-weight: lighter;

    span {
      font-size: 0.9rem;
      font-weight: 200;
    }

    a {
      text-decoration: none;
      color: greenyellow;
    }
  }
`;
