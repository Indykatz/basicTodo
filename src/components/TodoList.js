const TodoList = ({ item, handleClick, handleBool, bool }) => {
  return (
    <div>
      {item}
      <button onClick={handleClick}>Remove</button>
      <button onClick={handleBool}>{bool ? "True" : "False"}</button>
      {/* <button onClick={(e) => handleBool(e)}>{buttonText}</button> */}
      {/* <button onClick={handleBool} {bool ? "Uncheck" : "Check"}></button> */}
      {/* <button onClick={() => setBool(!bool)}>Click</button> */}
    </div>
  );
};

export default TodoList;


