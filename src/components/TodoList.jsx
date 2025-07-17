import ToDoItem from "./TodoItem";

function ToDoList(props) {
  const { list, setList } = props;
  return (
    <ul className="list-group">
      {list.map((task) => {
        const { id, text, isCompleted } = task;
        return (
          <ToDoItem
            key={id}
            id={id}
            label={text}
            isCompleted={isCompleted}
            list={list}
            setList={setList}
          />
        );
      })}
    </ul>
  );
}

export default ToDoList;
