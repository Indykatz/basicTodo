// import { useState } from "react";

const ToDoList = ({ item, handleClick, bool, handleBool }) => {
  return (
    <div>
      <div
        className="eachToDo"
        style={{
          textDecoration: bool ? "line-through" : "",
        }}
      >
        <h3>{item}</h3>
        <button className="checkButton" onClick={handleBool}>
          {bool ? "Uncheck" : "Check"}
        </button>
        <button onClick={handleClick} className="removeButton">
          Remove
        </button>
      </div>
    </div>
  );
};

export default ToDoList;
