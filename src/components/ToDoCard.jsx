function ToDoCard({ todo, deleteToDo }) {
  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
      <p>{todo.date}</p>
      <p>{todo.time}</p>
      <button
        onClick={() => deleteToDo(todo.id)} 
      >
        Delete
      </button>
    </div>
  );
}

export default ToDoCard;
