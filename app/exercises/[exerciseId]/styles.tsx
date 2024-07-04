import { HTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface DivProps extends HTMLAttributes<HTMLDivElement> {
  display?: string;
}

export const Container = styled.div`
  width: 370px;
  min-height: 212px;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  max-width: 700px;
  padding: 25px;
  text-align: left;
  margin-left: 40px;
`;

export const HeaderContainer = styled.div`
  color: #070a20;
  font-size: 10px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const HeaderIconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ContentContainer = styled.div``;

export const FooterContainer = styled.div<DivProps>`
  margin-top: 20px;
  justify-content: space-between;
  ${({ display }) =>
    display
      ? css`
          display: ${display};
        `
      : ""};
`;
