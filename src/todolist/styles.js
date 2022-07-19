import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45vh;
  font-family: sans-serif;
  flex-direction: column;
`;
export const Heading = styled.h2``;
export const TodoListHolder = styled.section`
  display: flex;
  width: 100%;
  column-gap: 15px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  overflow: auto;
  row-gap: 10px;
  padding: 2% 0%;
`;
export const TodoListContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #f6f6f6;
  flex-direction: column;
  padding: 1%;
  border-radius: 4px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
`;
export const Task = styled.h3``;
export const Description = styled.p`
  font-style: italic;
  &::before,
  &::after {
    content: '"';
  }
`;
export const DetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const DetailName = styled.p`
  font-size: 1.15rem;
  font-weight: 500;
`;
export const DetailValue = styled.p`
  text-decoration: underline;
`;
export const AddTodoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 45vh;
  align-items: flex-start;
`;
