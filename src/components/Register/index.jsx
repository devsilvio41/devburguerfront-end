import {
  Container,
  LeftContainer,
  RigthContainer,
  Title,
  Form,
  InputContainer,
  Link,
} from "./styles";
import { api } from "../../services/api";
import Logo from "../../assets/logo.svg";
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();
  // Validação
  const schema = yup
    .object({
      name: yup.string().required("O nome é obrigatório"),
      email: yup
        .string()
        .email("Enter a valid email address")
        .required("The email is mandatory"),
      password: yup
        .string()
        .min(6, "The password must be at least 6 characters long.")
        .required("Enter the password"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "As senhas devem ser iguais")
        .required("Confirme sua senha"),
    })
    .required();
  // Fim Validação

  // Function
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post(
        "/users",
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        { validateStatus: () => true },
      );

      if (status === 200 || status === 201) {
        toast.success("Conta criada com sucesso!");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else if (status === 400) {
        toast.error("Email já cadastrado! Faça login para continuar.");
      } else {
        toast.error("🫤Falha no sistema! Tente novamente.");
      }
    } catch {
      toast.error("🫤Falha no sistema! Tente novamente.");
    }
  };

  function handlePaste(e) {
    e.preventDefault();
    toast.warn("Não é possível colar neste campo.", {
      toastId: "paste-blocked",
    });
  }
  // Fim Function

  return (
    <Container>
      <LeftContainer>
        {/* 🔧 alt em texto normal */}
        <img src={Logo} alt="Logo Dev Burguer" />
      </LeftContainer>
      <RigthContainer>
        <Title>Criar conta</Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            {/* 🔧 htmlFor + id + autoComplete + role="alert" em todos os campos */}
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              {...register("name")}
            />
            <p role="alert">{errors.name?.message}</p>
          </InputContainer>
          <InputContainer>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              {...register("email")}
            />
            <p role="alert">{errors.email?.message}</p>
          </InputContainer>
          <InputContainer>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              autoComplete="new-password"
              {...register("password")}
            />
            <p role="alert">{errors.password?.message}</p>
          </InputContainer>
          <InputContainer>
            <label htmlFor="confirmPassword">Confirmar sua Senha</label>
            <input
              id="confirmPassword"
              type="password"
              autoComplete="new-password"
              onPaste={handlePaste}
              {...register("confirmPassword")}
            />
            <p role="alert">{errors.confirmPassword?.message}</p>
          </InputContainer>
          <Button type="submit">Criar conta</Button>
          <p>
            Já possui conta? <Link to="/login">Clique aqui!</Link>
          </p>
        </Form>
      </RigthContainer>
    </Container>
  );
}
