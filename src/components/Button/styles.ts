import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Container = styled.button<ButtonProps>`
  padding: 0px 10px 0px 10px;
  font-weight: 600;
  min-width: 100px;
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
`;
