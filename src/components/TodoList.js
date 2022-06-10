const ToDoList = ({ item, bool, handleClick, handleCheck }) => {
  if ({ bool }) {
    return (
      <div>
        <p
          style={{
            textDecoration: bool ? "line-through" : "",
          }}
        >
          {item}
        </p>
        <button
          style={{
            textDecoration: bool ? "line-through" : "",
          }}
          onClick={handleCheck}
        >
          Check
        </button>
        <button onClick={handleClick} className="removeButton">
          Remove
        </button>
      </div>
    );
  }
};

export default ToDoList;
