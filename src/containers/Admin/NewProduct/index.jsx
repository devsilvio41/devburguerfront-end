import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ImageIcon } from "@phosphor-icons/react";
import { api } from "../../../services/api";
import {
  Container,
  Form,
  InputGroup,
  Label,
  LabelUpload,
  Select,
  SubmitButton,
  Input,
  ErrorMessage,
} from "./styles";
import { useEffect, useState } from "react";

const schema = yup
  .object({
    name: yup.string().required(),
    price: yup.number().positive().required(),
    category: yup.object().required(),
    file: yup
      .mixed()
      .test("file", "Escolha uma imagem", (value) => value?.length > 0),
  })
  .required();
export function NewProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("/categories");
      setCategories(data);
    }

    loadCategories();
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label>Nome</Label>
          <Input type="text" {...register("name")} />
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>
          <Label>Preço</Label>
          <Input type="number" {...register("price")} />
          <ErrorMessage>{errors?.price?.message}</ErrorMessage>
          <LabelUpload>
            <ImageIcon />
            <input
              type="file"
              accept="image/png, image/jpeg"
              {...register("file", {
                onChange: (e) => setFileName(e.target.files[0]?.name),
              })}
            />
            {/* <input
              type="file"
              {...register("file")}
              accept="image/png, image/jpeg"
              onChange={(value) => {
                setFileName(value?.target?.files[0]?.name);
                register("file").onChange(value);
              }}
            /> */}
            {fileName || "Imagem do Produto"}
            <ErrorMessage>{errors?.file?.message}</ErrorMessage>
          </LabelUpload>
        </InputGroup>
        <InputGroup>
          <Label>Categoria</Label>

          {/* Input Não controlado */}
          <Controller
            name="category"
            control={control}
            render={(field) => (
              <Select
                {...field}
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                placeholder="Categorias"
                menuPortalTarget={document.body}
              />
            )}
          />
          {/* Input Não controlado */}
        </InputGroup>
        <SubmitButton>Adicionar produto</SubmitButton>
      </Form>
    </Container>
  );
}
