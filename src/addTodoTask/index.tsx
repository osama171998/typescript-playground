import React, { useRef, useContext } from "react";
import * as Styles from "./styles";
import { ToDoArray } from "../context/index";
import moment from "moment";
const AddTodoTask = () => {
  const todoTask = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);
  const priority = useRef<HTMLSelectElement>(null);
  const taskCreated = useRef<HTMLInputElement>(null);
  const dueDate = useRef<HTMLInputElement>(null);
  const { toDoTask, setToDoTask } = useContext(ToDoArray);
  const SubmitForm = (e) => {
    e.preventDefault();
    interface obj {
      task: string;
      description: string;
      priority: string;
      taskCreated: string;
      taskDue: string;
    }
    const formValue: obj = {
      task: todoTask.current.value,
      description: description.current.value,
      priority: priority.current.value,
      taskCreated: moment(taskCreated.current.value).format("MMMM Do YYYY"),
      taskDue: moment(dueDate.current.value).format("MMMM Do YYYY"),
    };
    console.log(formValue);
    if (toDoTask.length === 0) {
      setToDoTask([formValue]);
    } else {
      setToDoTask([...toDoTask, formValue]);
    }
  };
  return (
    <Styles.MainContainer>
      <Styles.Heading>Add Todo Task</Styles.Heading>
      <Styles.Form onSubmit={SubmitForm}>
        <Styles.FormFieldHolder>
          <Styles.Label>Todo Task:</Styles.Label>
          <Styles.InputFiled
            type="text"
            name="todoTask"
            placeholder="Enter Todo Task"
            ref={todoTask}
          />
        </Styles.FormFieldHolder>
        <Styles.FormFieldHolder>
          <Styles.Label>Description:</Styles.Label>
          <Styles.TextAreaField
            rows={10}
            name="description"
            placeholder="Enter Task Description"
            ref={description}
          />
        </Styles.FormFieldHolder>
        <Styles.FormFieldHolder>
          <Styles.Label>Priority:</Styles.Label>
          <Styles.SelectField name="taskPriority" ref={priority}>
            <option>Select Priority</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </Styles.SelectField>
        </Styles.FormFieldHolder>
        <Styles.FormFieldHolder>
          <Styles.Label>Task Created:</Styles.Label>
          <Styles.InputFiled
            type="date"
            name="taskCreatedDate"
            ref={taskCreated}
          />
        </Styles.FormFieldHolder>
        <Styles.FormFieldHolder>
          <Styles.Label>Task Due:</Styles.Label>
          <Styles.InputFiled type="date" name="taskDueDate" ref={dueDate} />
        </Styles.FormFieldHolder>
        <Styles.SubmitField
          type="submit"
          value="Add Todo task"
          name="addTodoTask"
        />
      </Styles.Form>
    </Styles.MainContainer>
  );
};
export default AddTodoTask;
