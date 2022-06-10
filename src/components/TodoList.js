const ToDoList = ({
  todoItem,
  todoChecked,
  handleClick,
  handleCheck,
  handleArchive,
  handleEdit,
  newInputValue,
}) => {
  if ({ todoChecked }) {
    return (
      <div>
        <p style={{ textDecoration: todoChecked ? "line-through" : "" }}>
          {todoItem}
        </p>
        <button onClick={handleCheck}>
          {todoChecked ? "Un-check" : "Check"}
        </button>
        <button onClick={handleClick}>Remove</button>
        <button onClick={handleArchive}>Archive</button>
        <input type="text" value={newInputValue} />
        <button onClick={handleEdit}>Edit</button>
      </div>
    );
  }
};

export default ToDoList;

// handleArchive
