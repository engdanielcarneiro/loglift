import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  align-items: center;
  place-content: center;
  background-color: #ede9f3;
`;

export const PageContainer = styled.div`
  height: 100vh;
  place-content: center;
`;

export const ContentContainer = styled.div`
  width: fit-content;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  max-width: 700px;
  padding: 25px;
  text-align: left;
`;

export const HeaderContainer = styled.div`
  color: #070a20;
  font-size: 10px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;

export const SearchContainer = styled.div`
  margin: 20px 0px;
`;
export const ListContainer = styled.div``;

export const UList = styled.ul`
  list-style-type: none;
  display: inline-grid;
  row-gap: 10px;
  grid-auto-rows: min-content;
  overflow: auto;
  height: 200px;
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
`;

export const NewExerciseContainer = styled.div`
  align-items: center;
  display: flex;
`;

export const NewExerciseIconContainer = styled.div`
  color: #070a20;

  &:hover {
    cursor: pointer;
    color: rgb(172, 188, 255);
  }
`;
