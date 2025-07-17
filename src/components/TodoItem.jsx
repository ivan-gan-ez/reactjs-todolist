function ToDoItem(props) {
  const { id, label, isCompleted, list, setList } = props;

  const handleUpdate = () => {
    const updatedList = [...list];
    const selected = updatedList.find((task) =>
      task.id === id ? true : false
    );
    if (selected.isCompleted) {
      selected.isCompleted = false;
    } else {
      selected.isCompleted = true;
    }
    setList(updatedList);
  };

  const handleRemove = () => {
    const confirmRemove = window.confirm("Are you sure about that?");
    if (confirmRemove) {
      const updatedList = list.filter((task) => {
        if (task.id !== id) {
          return true;
        } else {
          return false;
        }
      });
      setList(updatedList);
    }
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        {isCompleted ? (
          <button className="btn btn-sm btn-success" onClick={handleUpdate}>
            <i className="bi bi-check-square"></i>
          </button>
        ) : (
          <button className="btn btn-sm btn-light" onClick={handleUpdate}>
            <i className="bi bi-square"></i>
          </button>
        )}
        <span
          className={isCompleted ? "ms-2 text-decoration-line-through" : "ms-2"}
        >
          {label}
        </span>
      </div>
      <div>
        <button className="btn btn-sm btn-danger" onClick={handleRemove}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;
