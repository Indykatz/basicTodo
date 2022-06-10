const ToDoList = ({
  todoItem,
  todoChecked,
  handleClick,
  handleCheck,
  handleArchive,
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
      </div>
    );
  }
};

export default ToDoList;

// handleArchive
