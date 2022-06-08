import { useState } from "react";

const TodoList = ({ item, handleClick }) => {
  //   const theButtons = ["Remove", "Check", "Edit", "Archive"];
  const [bool, setBool] = useState(true);
  return (
    <div>
      <p
        style={{
          textDecoration: bool ? "" : "line-through",
        }}
      >
        {item}
      </p>

      <button className="checkButton" onClick={() => setBool(!bool)}>
        {bool ? "Check" : "Un-Check"}
      </button>
      <button onClick={handleClick} className="removeButton">
        Remove
      </button>
    </div>
  );
};

export default TodoList;
