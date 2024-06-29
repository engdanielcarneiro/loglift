import { HTMLAttributes } from "react";
import { Container } from "./styles";

interface IconContainerProps extends HTMLAttributes<HTMLDivElement> {
  hoverColor?: string;
  color?: string;
  marginRight?: string;
}

export default function IconContainer({
  color,
  hoverColor,
  children,
  marginRight,
}: IconContainerProps) {
  return (
    <Container marginRight={marginRight} color={color} hoverColor={hoverColor}>
      {children}
    </Container>
  );
}
