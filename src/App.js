import "./App.css";
import { useState } from "react";

import TodoList from "./components/TodoList";
import AddItem from "./components/AddItem";

const App = () => {
  const [bool, setBool] = useState(true);
  // list useState generates a placeholder list
  const [item, setItems] = useState([
    { item: "example task 1", checked: bool },
    { item: "example task 2", checked: bool },
    { item: "example task 3", checked: bool },
    { item: "example task 4", checked: bool },
  ]);

  // handleBool for checking
  const handleBool = (index) => {
    let storeItems = [...item];
    let indexedItem = storeItems[index];
    console.log(indexedItem.checked);
    setBool((indexedItem.checked = !bool));
    ifChecked(indexedItem.checked);
  };

  const ifChecked = (i) => {
    if ((i = bool)) {
      console.log("its true");
    } else {
      console.log("its false");
    }
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
            handleBool={() => handleBool(index)}
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
