import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ onClick, children, type }: ButtonProps) {
  return (
    <Container type={type} onClick={onClick}>
      {children}
    </Container>
  );
}
