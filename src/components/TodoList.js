const TodoList = ({ item, handleClick, boolClick, bool, setBool }) => {
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
      <button onClick={boolClick}>{bool ? "Uncheck" : "Check"}</button>
    </div>
  );
};

export default TodoList;
