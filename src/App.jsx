import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

function App() {
  return (
    <section className="bg-locust-100 min-h-screen font-mono">
      <div>
        <ToDoForm />
        <ToDoList />
      </div>
    </section>
  );
}

export default App;
