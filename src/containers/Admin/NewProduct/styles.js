import styled from "styled-components";
import ReactSelect from "react-select";
import { Button } from "../../../components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  border-radius: 1.2rem;
  background-color: ${(props) => props.theme.black};
  padding: 2rem;
  width: 100%;
  max-width: 380px;
  flex-direction: column;
  gap: 1rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  border-radius: 5px;
  padding: 0 12px;
  border: none;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.white};
  font-size: 1.2rem;
  font-weight: 500;
`;

export const LabelUpload = styled.label`
  cursor: pointer;
  width: 100%;
  color: ${(props) => props.theme.white};
  display: flex;
  border: 1px dashed ${(props) => props.theme.white};
  border-radius: 5px;
  padding: 5px;
  margin-top: 20px 0;

  > svg {
    width: 20px;
    height: 20px;
    fill: ${(props) => props.theme.white};
    margin-right: 4px;
  }

  input {
    display: none;
    
  }
`;

export const Select = styled(ReactSelect)``;

export const SubmitButton = styled(Button)`
  margin-top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
