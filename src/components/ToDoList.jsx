import ToDoCard from "./ToDoCard";

function ToDoList({ todos, deleteToDo }) {
  if (todos.length === 0) {
    return <h1>There is nothing to do</h1>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <ToDoCard key={todo.id} todo={todo} deleteToDo={deleteToDo}/>
      ))}
    </div>
  );
}

export default ToDoList;
