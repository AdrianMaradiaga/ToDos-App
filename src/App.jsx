import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import { ToDos as data } from "./to-dos";
import { useState, useEffect } from "react";


function App() {

  const [todos, setToDos] = useState([]);

  useEffect(() => {
    setToDos(data);
  }, []);

  const createToDo = (todoTitle) => {
        setToDos([...todos, {
          title: todoTitle,
          id: todos.length,
          description: "a"
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
