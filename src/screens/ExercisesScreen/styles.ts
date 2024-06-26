import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100vh;
  align-content: center;
  text-align: -webkit-center;
  padding: 15px;
`;

export const ContentContainer = styled.div`
  align-content: center;
  background-color: #97a3ee;
  border-radius: 10px;
  min-height: 60vh;
  position: relative;
  border: 1px solid #4c5fd5;
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
  grid-auto-rows: min-content;
  overflow: auto;
  height: 200px;
  width: 100%;
`;
