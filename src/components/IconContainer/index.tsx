import { HTMLAttributes } from "react";
import { Container } from "./styles";

interface IconContainerProps extends HTMLAttributes<HTMLDivElement> {
  hoverColor?: string;
  color?: string;
  marginRight?: string;
  display?: string;
}

export default function IconContainer({
  color,
  hoverColor,
  children,
  marginRight,
  display,
}: IconContainerProps) {
  return (
    <Container
      display={display}
      marginRight={marginRight}
      color={color}
      hoverColor={hoverColor}
    >
      {children}
    </Container>
  );
}
