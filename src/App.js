import "./App.css";
import { useState } from "react";

import TodoList from "./components/TodoList";
import AddItem from "./components/AddItem";

const App = () => {
  // list useState generates a placeholder list
  const [item, setItems] = useState([
    { item: "example task 1" },
    { item: "example task 2" },
    { item: "example task 3" },
    { item: "example task 4" },
  ]);

  const [bool, setBool] = useState(true);
  // handleBool for checking
  const boolClick = (index) => {
    console.log("clicked");
    bool ? setBool(!bool) : setBool(true);
  };

  // Handle click for removing
  const handleClick = (index) => {
    let storeItems = [...item];
    storeItems.splice(index, 1);
    setItems(storeItems);
  };

  // add item handle submit
  const [itemInput, setItemInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...item, { item: itemInput }]);
    setItemInput("");
  };

  return (
    <div>
      <h1>Todo List</h1>
      {item.map((item, index) => {
        return (
          <TodoList
            item={item.item}
            key={index}
            handleClick={() => handleClick(index)}
            boolClick={() => boolClick(index)}
          />
        );
      })}
      <AddItem
        handleSubmit={handleSubmit}
        itemInput={itemInput}
        setItemInput={setItemInput}
      />
    </div>
  );
};

export default App;
