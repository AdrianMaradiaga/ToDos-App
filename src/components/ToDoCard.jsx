function ToDoCard({todo}) {
  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
      <p>{todo.date}</p>
      <p>{todo.time}</p>
    </div>
  );
}

export default ToDoCard;
