import { useState } from "react";

const TodoList = ({ item, handleClick }) => {
  const [bool, setBool] = useState(true);

  return (
    <div>
      {bool ? (
        <p>{item}</p>
      ) : (
        <p style={{ textDecoration: "line-through", color: "green" }}>{item}</p>
      )}
      <button onClick={() => setBool(!bool)}>Check</button>
      <button onClick={handleClick}>Remove</button>
    </div>
  );
};

export default TodoList;
