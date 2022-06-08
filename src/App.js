import "./App.css";
import { useState } from "react";

import TodoList from "./components/TodoList";
import AddItem from "./components/AddItem";

const App = () => {
  // list useState
  const [item, setItems] = useState([
    { item: "example task 1" },
    { item: "example task 2" },
    { item: "example task 3" },
    { item: "example task 4" },
  ]);
  // bool state click
  // const [bool, setBool] = useState(true);

  // add item
  const [itemInput, setItemInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...item, { item: itemInput }]);
    setItemInput("");
  };

  // Handle click for removing
  const handleClick = (index) => {
    let storeItems = [...item];
    storeItems.splice(index, 1);
    setItems(storeItems);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <p>
        {item.map((item, index) => {
          return (
            <TodoList
              item={item.item}
              key={index}
              handleClick={() => handleClick(index)}
            />
          );
        })}
        <p>
          <AddItem
            handleSubmit={handleSubmit}
            itemInput={itemInput}
            setItemInput={setItemInput}
          />
        </p>
      </p>
    </div>
  );
};

export default App;
