import { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";

function ToDoCard({ todo }) {
  const { deleteToDo } = useContext(ToDoContext);

  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
      <p>{todo.date}</p>
      <p>{todo.time}</p>
      <button onClick={() => deleteToDo(todo.id)}>Delete</button>
    </div>
  );
}

export default ToDoCard;
