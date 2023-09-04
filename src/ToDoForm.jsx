import { useState } from "react";

function ToDoForm({createToDo}) {
  const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        createToDo(title)
    }



  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type your To Do"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Save</button>
    </form>
  );
}

export default ToDoForm;
