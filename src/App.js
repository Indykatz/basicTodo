import "./App.css";
import { useState } from "react";
import AddItem from "./components/AddItem";
import ToDoList from "./components/TodoList";

// App
function App() {
  const [item, setItem] = useState([
    { item: "example task 1", checked: false },
    { item: "example task 2", checked: true },
    { item: "example task 3", checked: false },
    { item: "example task 4", checked: false },
  ]);

  // handles checked off items
  const handleCheck = (index) => {
    let storeItems = [...item];
    const indexOfItem = storeItems[index];
    const currentCheck = indexOfItem.checked;
    const newCheck = !currentCheck;
    indexOfItem.checked = newCheck;
    setItem(storeItems);
  };

  // Handle click for removing items
  const handleClick = (index) => {
    let storeItems = [...item];
    storeItems.splice(index, 1);
    setItem(storeItems);
  };

  // add item handle submit new items
  const [itemInput, setItemInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setItem([...item, { item: itemInput }]);
    setItemInput("");
  };
  // return
  return (
    <div>
      <h1>Todo List</h1>
      {/* map list */}
      {item.map((item, index) => {
        return (
          // runs ToDoList component
          <ToDoList
            todoItem={item.item}
            todoChecked={item.checked}
            key={index}
            handleClick={() => handleClick(index)}
            handleCheck={() => handleCheck(index)}
          />
        );
      })}
      {/* end of map */}
      {/* add new item */}
      <div>
        <AddItem
          handleSubmit={handleSubmit}
          itemInput={itemInput}
          setItemInput={setItemInput}
        />
      </div>
    </div>
  );
}

export default App;
