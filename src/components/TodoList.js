const ToDoList = ({
  todoItem,
  todoChecked,
  handleClick,
  handleCheck,
  handleArchive,
  handleEdit,
  newValue,
  setNewValue,
  index,
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
        {/* edit */}
        <input
          type="text"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
        <button
          onClick={() => {
            handleEdit(index, newValue);
            setNewValue("");
          }}
        >
          Edit
        </button>
      </div>
    );
  }
};

export default ToDoList;

// handleArchive
