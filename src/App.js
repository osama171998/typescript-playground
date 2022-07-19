import { useState } from "react";
import TodoList from "./todolist/index.tsx";
import { ToDoArray } from "./context/index";
function App() {
  const [toDoTask, setToDoTask] = useState([]);
  return (
    <ToDoArray.Provider value={{ toDoTask, setToDoTask }}>
      <TodoList />
    </ToDoArray.Provider>
  );
}

export default App;
