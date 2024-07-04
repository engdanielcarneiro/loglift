import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  width?: string;
  design?: string;
  disabled?: boolean;
}

export default function Button({
  onClick,
  children,
  type,
  width,
  design,
  disabled,
}: ButtonProps) {
  return (
    <Container
      disabled={disabled}
      design={design}
      width={width}
      type={type}
      onClick={onClick}
    >
      {children}
    </Container>
  );
}
