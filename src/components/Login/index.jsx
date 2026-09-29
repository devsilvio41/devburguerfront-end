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

export function Login() {
  const navigate = useNavigate();
  // Validação
  const schema = yup
    .object({
      email: yup
        .string()
        .email("Enter a valid email address")
        .required("The email is mandatory"),
      password: yup
        .string()
        .min(6, "The password must be at least 6 characters long.")
        .required("Enter the password"),
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
  console.log(errors);
  const onSubmit = async (data) => {
    const response = await toast.promise(
      api.post("/sessions", {
        email: data.email,
        password: data.password,
      }),
      {
        pending: "Verificando seus dados",
        success: {
          render() {
            setTimeout(() => {
              navigate("/");
            }, 2000);
            return "Seja bem vindo(a) 👌";
          },
        },
        error: "Email ou Senha incorretos 🤯",
      },
    );

    console.log(response);
  };
  // Fim Function

  return (
    // 🔧 Removi o Fragment <>...</>: Container já é um único pai
    <Container>
      <LeftContainer>
        {/* 🔧 alt em texto normal, sem hífens */}
        <img src={Logo} alt="Logo Dev Burguer" />
      </LeftContainer>
      <RigthContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span> <br />
          Acesse com seu <span> Login e senha</span>
        </Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            {/* 🔧 htmlFor + id */}
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              autoComplete="email" // 🔧 ajuda o navegador a preencher
              {...register("email")}
            />
            {/* 🔧 role="alert": leitor de tela anuncia o erro */}
            <p role="alert">{errors.email?.message}</p>
          </InputContainer>
          <InputContainer>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              {...register("password")}
            />
            <p role="alert">{errors.password?.message}</p>
          </InputContainer>
          <Button type="submit">Entrar</Button>
          <p>
            Não possui conta? <Link to="/cadastro">Clique aqui!</Link>
          </p>
        </Form>
      </RigthContainer>
    </Container>
  );
}
