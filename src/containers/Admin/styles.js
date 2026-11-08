import styled from "styled-components";
export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: grab;
  box-shadow: 0px 8px 17px 4px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 8px 17px 4px rgba(0, 0, 0, 0.5);
`;

export const Infos = styled.div`
  margin-top: auto auto auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  padding-bottom: 0.8rem;
  color: #61a120;
`;
export const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #484848;
  text-align: center;
  margin-top: 1px;
`;
