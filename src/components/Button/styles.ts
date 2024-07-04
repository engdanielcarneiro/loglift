import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  design?: string;
  disabled?: boolean;
}

export const Container = styled.button<ButtonProps>`
  padding: 0px 10px 0px 10px;
  font-weight: 600;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #4c5fd5;
  color: white;
  font-size: 15px;

  &:hover {
    cursor: pointer;
    background-color: #808ee6;
  }

  &:active {
    background-color: #b7c1ff;
  }

  ${({ design }) =>
    design == "secundary"
      ? css`
          background-color: white;
          color: black;
          border: 1px solid black;

          &:hover {
            cursor: pointer;
            background-color: #b7c1ff;
          }
          &:active {
            background-color: #808ee6;
          }
        `
      : ""};

  ${({ disabled }) =>
    disabled
      ? css`
          background-color: grey;
          color: white;
          border: none;
          &:hover {
            cursor: auto;
            background-color: grey;
          }

          &:active {
            background-color: grey;
          }
        `
      : ""};

  ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : ""};
`;
