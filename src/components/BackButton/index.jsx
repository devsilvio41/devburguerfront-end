import { StyledButton } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleBack() {
    if (location.key === "default") {
      navigate("/");
    } else {
      navigate(-1);
    }
  }

  return (
    <StyledButton type="button" onClick={handleBack}>
      Voltar
    </StyledButton>
  );
}
