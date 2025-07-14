function ToDoItem(props) {
  const { label, isCompleted } = props;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        {isCompleted === true ? (
          <button className="btn btn-sm btn-success">
            <i className="bi bi-check-square"></i>
          </button>
        ) : (
          <button className="btn btn-sm btn-light">
            <i className="bi bi-square"></i>
          </button>
        )}
        {isCompleted === true ? (
          <span className="ms-2 text-decoration-line-through">{label}</span>
        ) : (
          <span className="ms-2">{label}</span>
        )}
      </div>
      <div>
        <button className="btn btn-sm btn-danger">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;
