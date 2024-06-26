import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100vh;
  align-content: center;
  text-align: -webkit-center;
  padding: 15px;
`;

export const ContentContainer = styled.div`
  align-content: center;
  background-color: rgb(212, 212, 212);
  border-radius: 10px;
  min-height: 60vh;
  position: relative;
  border: 2px solid #4c5fd5;
  max-width: 700px;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
export const ListContainer = styled.div`
  width: 300px;
  margin: 35px 0px;
`;

export const UList = styled.ul`
  justify-content: center;
  list-style-type: none;
  display: inline-grid;
  row-gap: 10px;
  overflow: auto;
  height: 200px;
  width: 100%;
`;

export const ListItem = styled.li`
  background-color: #4c5fd5;
  color: white;
  padding: 5px;
  border-radius: 5px;
  width: 150px;
  place-content: center;

  &:hover {
    cursor: pointer;
    background-color: #808ee6;
  }

  &:active {
    background-color: #b7c1ff;
  }
`;
