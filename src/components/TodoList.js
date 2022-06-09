const TodoList = ({ item, handleClick, boolClick, bool }) => {
  return (
    <div>
      <p
        style={{
          textDecoration: bool ? "line-through" : "",
        }}
      >
        {item}
      </p>
      <button onClick={handleClick}>Remove</button>
      <button onClick={boolClick}>Check</button>
      {/* {bool ? "Uncheck" : "Check"} */}
    </div>
  );
};

export default TodoList;
