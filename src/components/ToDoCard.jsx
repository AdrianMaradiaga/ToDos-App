import { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";

function ToDoCard({ todo }) {
  const { deleteToDo } = useContext(ToDoContext);

  return (
    <div className="bg-locust-50 p-4 m-2 rounded-md shadow-md w-92 h-auto hover:bg-locust-200 hover:-translate-y-1 hover:transition-transform flex flex-col">
      <h1 className="text-lg font-semibold">{todo.title}</h1>
      <div className="flex-grow overflow-y-auto max-h-40">
        <p>{todo.description}</p>
      </div>
      <p>{todo.date}</p>
      <p>{todo.time}</p>
      <button
        className="self-end bg-vivid-tangerine-300 px-2 py-1 rounded-md shadow-md mt-2"
        onClick={() => deleteToDo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default ToDoCard;
