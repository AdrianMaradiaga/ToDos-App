function ToDoList({ todos }) {
  if (todos.length === 0) {
    return <h1>There is nothing to do</h1>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <p>{todo.description}</p>
          <p>{todo.date}</p>
          <p>{todo.time}</p>
        </div>
      ))}
    </div>
  );
}

export default ToDoList;
