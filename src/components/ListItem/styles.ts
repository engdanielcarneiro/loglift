import { HTMLAttributes } from "react";
import styled from "styled-components";

interface DivProps extends HTMLAttributes<HTMLDivElement> {
  marginRight?: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  color: #070a20;
  padding: 5px 10px;
  border-radius: 5px;
  height: 40px;
  justify-content: space-around;

  &:hover {
    cursor: pointer;
    background-color: rgb(172, 188, 255, 0.2);
  }

  //   &:active {
  //     background-color: #b7c1ff;
  //   }
`;

export const StyledListItem = styled.li`
  width: 100%;
  text-align: left;
`;
