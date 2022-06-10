const ToDoList = ({ todoItem, todoChecked, handleClick, handleCheck }) => {
  if ({ todoChecked }) {
    return (
      <div>
        <p style={{ textDecoration: todoChecked ? "line-through" : "" }}>
          {todoItem}
        </p>
        <button onClick={handleCheck}>
          {todoChecked ? "Un-check" : "Check"}
        </button>
        <button onClick={handleClick} className="removeButton">
          Remove
        </button>
      </div>
    );
  }
};

export default ToDoList;
