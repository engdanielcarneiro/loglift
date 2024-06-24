import { HTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  marginRight?: string;
}

export const Container = styled.input<InputProps>`
  padding: 10px 10px;
  font-size: 15px;
  border-radius: 5px;
  border: 1px solid grey;
  outline: none;

  &:focus {
    border-color: #4c5fd5;
  }

  ${({ marginRight }) =>
    marginRight
      ? css`
          margin-right: ${marginRight};
        `
      : ""};
`;
