import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  align-items: center;
  background-color: #4c5fd5;
  color: white;
  padding: 5px;
  border-radius: 5px;
  width: 150px;
  height: 40px;

  //   &:hover {
  //     cursor: pointer;
  //     background-color: #808ee6;
  //   }

  //   &:active {
  //     background-color: #b7c1ff;
  //   }
`;
export const IconContainer = styled.div`
  position: relative;
  right: -20px;
  &:hover {
    color: red;
  }
`;

export const StyledListItem = styled.li`
  width: 100px;
`;
