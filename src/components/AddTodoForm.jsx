function AddTodoForm(props) {
  const { onAddNew } = props;

  return (
    <form className="d-flex justify-content-between align-items-center">
      <input
        type="text"
        className="form-control"
        placeholder="Add new item..."
        id="task"
        required
      />
      <button
        className="btn btn-primary btn-sm rounded ms-2"
        onClick={(event) => {
          event.preventDefault();
          if (task.value === "") {
            alert("This field cannot be empty.");
          } else {
            onAddNew(task.value);
            task.value = "";
          }
        }}
      >
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;
