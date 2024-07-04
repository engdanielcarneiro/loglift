import { HTMLAttributes } from "react";
import { Container } from "./styles";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  marginRight?: string;
  width?: string;
  marginBottom?: string;
  name?: string;
}

export default function Input({
  onChange,
  value,
  placeholder,
  marginRight,
  width,
  marginBottom,
  name,
}: InputProps) {
  return (
    <Container
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      marginRight={marginRight}
      width={width}
      marginBottom={marginBottom}
      name={name}
    ></Container>
  );
}
