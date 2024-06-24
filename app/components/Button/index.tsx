import { HTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ onClick, children }: ButtonProps) {
  return <Container onClick={onClick}>{children}</Container>;
}
