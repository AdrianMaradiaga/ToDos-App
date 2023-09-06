import { useState, useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";

function ToDoForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createToDo } = useContext(ToDoContext);

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
<div className="max-w-md mx-auto">
  <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4">
    <div className="mb-4">
      <label htmlFor="title" className="block text-gray-600">Title</label>
      <input
        type="text"
        id="title"
        placeholder="Type your To Do"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="w-full px-3 py-2 text-gray-800 bg-locust-50 rounded-md focus:outline-none focus:ring-locust-700"
        autoFocus
      />
    </div>

    <div className="mb-4">
      <label htmlFor="description" className="block text-gray-600">Description</label>
      <textarea
        id="description"
        name="description"
        cols="30"
        rows="3"
        placeholder="Type To Do description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="w-full px-3 py-2 text-gray-800 bg-locust-50 rounded-md focus:outline-none"
      ></textarea>
    </div>

    <button
      type="submit"
      className="px-4 py-2 text-white bg-locust-400 hover:bg-blue-600 rounded-md focus:outline-none"
    >
      Save
    </button>
  </form>
</div>

  );
}

export default ToDoForm;
