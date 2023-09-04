import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import { ToDos as data } from "./data/to-dos";
import { useState, useEffect } from "react";


function App() {

  const [todos, setToDos] = useState([]);

  useEffect(() => {
    setToDos(data);
  }, []);

  const createToDo = (todo) => {
        setToDos([...todos, {
          id: todos.length,
          title: todo.title,
          description: todo.description
        }])
  }


  return (
    <>
      <ToDoForm createToDo={createToDo} />
      <ToDoList todos={todos}/>
    </>
  );
}

export default App;
