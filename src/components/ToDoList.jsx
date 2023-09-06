import ToDoCard from "./ToDoCard";
import { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";

function ToDoList() {
  const { todos, deleteToDo } = useContext(ToDoContext);

  if (todos.length === 0) {
    return <h1>There is nothing to do</h1>;
  }

  return (
    <div className="grid grid-cols-3 mx-12 p-4">
      {todos.map((todo) => (
        <ToDoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default ToDoList;
