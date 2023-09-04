import { useState } from "react";

function ToDoForm({ createToDo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    createToDo({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type your To Do"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />

      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Type To Do description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>

      <button>Save</button>
    </form>
  );
}

export default ToDoForm;