import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  width?: string;
}

export default function Button({
  onClick,
  children,
  type,
  width,
}: ButtonProps) {
  return (
    <Container width={width} type={type} onClick={onClick}>
      {children}
    </Container>
  );
}
