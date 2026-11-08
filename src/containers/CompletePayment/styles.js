import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: green;
  font-weight: 500;
  margin-bottom: 1rem;
  word-spacing: 1px;
`;

const Message = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;

export { Container, Title, Message };
