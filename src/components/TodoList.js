const TodoList = ({ item, handleClick, boolClick, bool, setBool }) => {
  return (
    <div>
      {item}
      <button onClick={handleClick}>Remove</button>
      <button onClick={boolClick}>{bool ? "False" : "True"}</button>
    </div>
  );
};

export default TodoList;
