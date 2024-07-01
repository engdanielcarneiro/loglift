import { HTMLAttributes } from "react";
import { Container } from "./styles";

interface PProps extends HTMLAttributes<HTMLParagraphElement> {
  color?: string;
  fontWeight?: string;
  margin?: string;
}

export default function Text({ color, fontWeight, children, margin }: PProps) {
  return (
    <Container margin={margin} fontWeight={fontWeight} color={color}>
      {children}
    </Container>
  );
}
