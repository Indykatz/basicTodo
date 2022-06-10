import "./App.css";
import { useState } from "react";
import AddItem from "./components/AddItem";
import ToDoList from "./components/TodoList";
import Archive from "./components/Archive";

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
  // Archive
  const [archive, setArchive] = useState(["archive task 1", "archive task 2"]);
  // handle archive
  const handleArchive = (index) => {
    let storeItems = [...item];
    let storeArchive = [...archive];
    let toArchive = storeItems[index].item;
    storeArchive.push(toArchive);
    setArchive(storeArchive);
    handleClick(index);
  };
  // add item handle submit new items
  const [itemInput, setItemInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setItem([...item, { item: itemInput }]);
    setItemInput("");
  };
  // Handle Edit
  // Trying to figure out how to handle the edit
  const handleEdit = (index, newValue) => {
    console.log(newValue);
    const existingItems = [...item];
    existingItems[index].item = newValue;
    setItem(existingItems);
  };

  // return
  return (
    <div>
      <h1>Todo List</h1>
      {/* add new item */}
      <div>
        <AddItem
          handleSubmit={handleSubmit}
          itemInput={itemInput}
          setItemInput={setItemInput}
        />
      </div>
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
            handleArchive={() => handleArchive(index)}
            handleEdit={handleEdit}
          />
        );
      })}
      <div>
        <h1>Archive</h1>
        {archive.map((archive, index) => {
          return (
            // runs archive component
            <Archive archiveItem={archive} key={index} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
