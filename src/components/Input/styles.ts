import { HTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  marginRight?: string;
  marginBottom?: string;
  width?: string;
}

export const Container = styled.input<InputProps>`
  padding: 10px 10px;
  font-size: 15px;
  border-radius: 5px;
  border: 1px solid rgb(201, 201, 201);
  outline: none;
  background-color: rgb(172, 188, 255, 0.2);

  ${({ marginRight }) =>
    marginRight
      ? css`
          margin-right: ${marginRight};
        `
      : ""};

  ${({ marginBottom }) =>
    marginBottom
      ? css`
          margin-bottom: ${marginBottom};
        `
      : ""};

  ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : ""};
`;
