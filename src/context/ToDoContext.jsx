import { createContext, useState, useEffect } from "react";
import { ToDos as data } from "../data/to-dos";

export const ToDoContext = createContext();

export function ToDoContextProvider(props) {
  const [todos, setToDos] = useState([]);

  const createToDo = (todo) => {
    setToDos([
      ...todos,
      {
        id: todos.length,
        title: todo.title,
        description: todo.description,
      },
    ]);
  };

  const deleteToDo = (toDoId) => {
    setToDos(todos.filter((todo) => todo.id !== toDoId));
  };

  useEffect(() => {
    setToDos(data);
  }, []);

  return (
    <ToDoContext.Provider
      value={{
        todos: todos,
        deleteToDo: deleteToDo,
        createToDo: createToDo,
      }}
    >
      {props.children}
    </ToDoContext.Provider>
  );
}

export default ToDoContext;
