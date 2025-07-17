import { useState } from "react";

import ToDoList from "./components/ToDoList";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Task 1",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Task 2",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Task 3",
      isCompleted: false,
    },
  ]);

  return (
    <div>
      <div
        className="card rounded shadow-sm"
        style={{ maxWidth: "500px", margin: "60px auto" }}
      >
        <div className="card-body">
          <h3 className="card-title mb-3">My Todo List</h3>
          <ToDoList list={todos} setList={setTodos} />
          <div className="mt-4">
            <AddTodoForm
              onAddNew={(newValue) => {
                setTodos([
                  ...todos,
                  { id: Math.random(), text: newValue, isCompleted: false },
                ]);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
