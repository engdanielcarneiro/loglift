import { HTMLAttributes } from "react";
import { Container } from "./styles";

interface TextContainerProps extends HTMLAttributes<HTMLDivElement> {
  color?: string;
  fontWeight?: string;
  margin?: string;
}

export default function TextContainer({
  color,
  fontWeight,
  children,
  margin,
}: TextContainerProps) {
  return (
    <Container margin={margin} fontWeight={fontWeight} color={color}>
      {children}
    </Container>
  );
}
