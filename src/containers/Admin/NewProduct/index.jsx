// import {} from "./styles";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Image } from "@phosphor-icons/react";
import {
  Container,
  Form,
  InputGroup,
  Label,
  LabelUpload,
  Select,
  SubmitButton,
  Input,
} from "./styles";

const schema = Yup.object({
  name: Yup.string().required(),
  price: Yup.number().required(),
  category_id: Yup.number().required(),
  offer: Yup.boolean(),
}).required();
export function NewProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <Container>
      <Form>
        <InputGroup>
          <Label>Nome</Label>
          <Input />
          <Label>Categoria</Label>
          <Input />
          ''
          <LabelUpload>
            <Image />
            <input type="file" />
          </LabelUpload>
        </InputGroup>
        <InputGroup>
          <Label>Selecione imagem do Produto</Label>
          <Select />
        </InputGroup>
        <SubmitButton>Adicionar produto</SubmitButton>
      </Form>
    </Container>
  );
}
