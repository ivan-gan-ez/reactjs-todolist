import ToDoItem from "./TodoItem";

function ToDoList() {
  return (
    <ul className="list-group">
      <ToDoItem label="Task 1" isCompleted={true} />
      <ToDoItem label="Task 2" isCompleted={false} />
      <ToDoItem label="Task 3" isCompleted={false} />
    </ul>
  );
}

export default ToDoList;
