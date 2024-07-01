import { HTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface PProps extends HTMLAttributes<HTMLParagraphElement> {
  color?: string;
  fontWeight?: string;
  margin?: string;
}

export const Container = styled.p<PProps>`
  ${({ margin }) =>
    margin
      ? css`
          margin: ${margin};
        `
      : "margin: 0"};
  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : "color: black"};

  ${({ fontWeight }) =>
    fontWeight
      ? css`
          font-weight: ${fontWeight};
        `
      : "font-weight: normal"}
`;
