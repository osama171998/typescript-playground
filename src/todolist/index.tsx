import React from "react";
import * as Style from "./styles.js";
import AddTodoTask from "../addTodoTask/index";
import { ToDoArray } from "../context/index";
const TodoList = () => {
  const { toDoTask } = React.useContext(ToDoArray);
  // const Tasks = [
  //   {
  //     index: 1,
  //     task: "Learn TypeScript",
  //     description:
  //       "Understand the basic syntax of typescript and it's use case",
  //     priority: "High",
  //     taskCreated: "July 18,2022",
  //     taskDue: "July 25,2022",
  //   },
  //   {
  //     index: 2,
  //     task: "Learn Mongodb",
  //     description: "Understand the basic syntax of mongodb and it's use case",
  //     priority: "High",
  //     taskCreated: "July 26,2022",
  //     taskDue: "July 31,2022",
  //   },
  // ];
  return (
    <>
      <Style.AddTodoContainer>
        <AddTodoTask />
      </Style.AddTodoContainer>
      {toDoTask.length > 0 ? (
        <Style.MainContainer>
          <Style.Heading> TodoList</Style.Heading>
          <Style.TodoListHolder>
            {toDoTask.map((task, index) => {
              return (
                <Style.TodoListContainer key={index}>
                  <Style.Task>{task.task}</Style.Task>
                  <Style.Description>{task.description}</Style.Description>
                  <Style.DetailContainer>
                    <Style.DetailName>Priority:</Style.DetailName>
                    <Style.DetailValue>{task.priority}</Style.DetailValue>
                  </Style.DetailContainer>
                  <Style.DetailContainer>
                    <Style.DetailName>Task Created:</Style.DetailName>
                    <Style.DetailValue>{task.taskCreated}</Style.DetailValue>
                  </Style.DetailContainer>
                  <Style.DetailContainer>
                    <Style.DetailName>Task Due:</Style.DetailName>
                    <Style.DetailValue>{task.taskDue}</Style.DetailValue>
                  </Style.DetailContainer>
                </Style.TodoListContainer>
              );
            })}
          </Style.TodoListHolder>
        </Style.MainContainer>
      ) : null}
    </>
  );
};
export default TodoList;
