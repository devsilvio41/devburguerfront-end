import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ImageIcon } from "@phosphor-icons/react";
import { api } from "../../../services/api";
import { useLocation, useNavigate } from "react-router-dom";
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
  CheckLabel,
  ContainerCheckbox,
} from "./styles";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const schema = yup
  .object({
    name: yup.string().required("Digite o Nome do Produto"),
    price: yup
      .number()
      .positive()
      .required("Digite o valor do produto")
      .typeError("Digite o valor do produto"),
    category: yup.object().required("Selecione uma categoria"),
    offer: yup.bool(),
  })
  .required();
export function EditProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  const {
    state: { product },
  } = useLocation();
  console.log("Conteúdo em DATA", product);

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

  const onSubmit = async (data) => {
    const productFormData = new FormData();
    productFormData.append("name", data.name);
    productFormData.append("price", Math.round(Number(data.price) * 100));
    productFormData.append("category_id", data.category.id);
    productFormData.append("file", data.file[0]);
    productFormData.append("offer", data.offer);

    await toast.promise(api.put(`/products/${product.id}`, productFormData), {
      pending: "Editando produto...",
      success: "Produto editado com sucesso",
      error: "Falha ao editar o produto, tente novamente",
    });

    setTimeout(() => {
      navigate("/admin/produtos");
    }, 2000);

    // OBS: Colocar redirect para tela de produtos
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register("name")}
            defaultValue={product.name}
          />
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>
          <Label>Preço</Label>
          <Input
            type="number"
            step="0.01"
            {...register("price")}
            defaultValue={product.price / 100}
          />
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

            {fileName || "Upload do Produto"}
          </LabelUpload>
          <ErrorMessage>{errors?.file?.message}</ErrorMessage>
        </InputGroup>
        <InputGroup>
          <Label>Categoria</Label>

          {/* Input Não controlado */}
          <Controller
            name="category"
            control={control}
            defaultValue={product.category}
            render={({ field }) => (
              <Select
                {...field}
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                placeholder="Categorias"
                menuPortalTarget={document.body}
                defaultValue={product.category}
              />
            )}
          />
          <ErrorMessage>{errors?.category?.message}</ErrorMessage>
          {/* Input Não controlado */}
        </InputGroup>
        <InputGroup>
          <ContainerCheckbox>
            <input
              type="checkbox"
              defaultChecked={product.offer}
              {...register("offer")}
            />
            <CheckLabel>Produto em Oferta?</CheckLabel>
          </ContainerCheckbox>
        </InputGroup>

        <SubmitButton>Atualizar produto</SubmitButton>
      </Form>
    </Container>
  );
}
