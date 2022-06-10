import "./App.css";
import { useState } from "react";
import AddItem from "./components/AddItem";
import ToDoList from "./components/TodoList";
// App
function App() {
  const [item, setItem] = useState([
    { item: "example task 1", checked: false },
    { item: "example task 2", checked: false },
    { item: "example task 3", checked: false },
    { item: "example task 4", checked: false },
  ]);
  const handleCheck = (index) => {
    let storeItems = [...item];
    const indexOfItem = storeItems[index];
    const currentCheck = indexOfItem.checked;
    const newCheck = !currentCheck;
    indexOfItem.checked = newCheck;
    setItem(storeItems);
  };

  // Handle click for removing (original at bottom)
  const handleClick = (index) => {
    let storeItems = [...item];
    storeItems.splice(index, 1);
    setItem(storeItems);
  };

  // add item handle submit
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

      {item.map((item, index) => {
        return (
          <ToDoList
            item={item.item}
            bool={item.checked}
            key={index}
            handleClick={() => handleClick(index)}
            handleCheck={() => handleCheck(index)}
          />
        );
      })}
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
