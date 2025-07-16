import ToDoItem from "./TodoItem";

function ToDoList(props) {
  const { list } = props;
  return (
    <ul className="list-group">
      {list.map((task) => {
        const { id, text, isCompleted } = task;
        return <ToDoItem key={id} label={text} isCompleted={isCompleted} />;
      })}
    </ul>
  );
}

export default ToDoList;
