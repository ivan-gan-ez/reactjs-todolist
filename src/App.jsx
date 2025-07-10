import ToDoList from "./components/list";
import AddTodoForm from "./components/additem";

function App() {
  return (
    <div>
      <div
        className="card rounded shadow-sm"
        style={{ maxWidth: "500px", margin: "60px auto" }}
      >
        <div className="card-body">
          <h3 className="card-title mb-3">My Todo List</h3>
          <ToDoList />
          <div className="mt-4">
            <AddTodoForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
