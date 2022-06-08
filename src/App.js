import "./App.css";
import { useState } from "react";

import TodoList from "./components/TodoList";
import AddItem from "./components/AddItem";

const App = () => {
  // MOTHER APPS JOBS

  // list useState generates a placeholder list
  const [item, setItems] = useState([
    { item: "example task 1" },
    { item: "example task 2" },
    { item: "example task 3" },
    { item: "example task 4" },
  ]);

  // add item handle submit
  // state is itemInput and setItem set is empyt string
  // ({these are the functions talking to the AddItem.js})
  const [itemInput, setItemInput] = useState("");
  // handle submit button - (e) event i,z,h variable nane
  const handleSubmit = (e) => {
    // stops changes in auto refresh -
    e.preventDefault();
    // sets items as list ... is the whole list its like a unfinsihied senten...
    // n(1) n(2) ... n(x)
    // ... is the whole list ... n(x) inputItem added to end of list i,e the ... of the list
    setItems([...item, { item: itemInput }]);
    // clears the string in the setInput "walkdog" clear for next of youll get "walkdogcatlitter"
    setItemInput("");
  };

  // Handle click for removing
  const handleClick = (index) => {
    // duplicates list as cant edit orginal list, just not allowed - why ?
    // safer system not easy hacking this way
    // if anyone can access the list anyone can change it - Only App.js can access the list
    let storeItems = [...item];
    // remove
    storeItems.splice(index, 1);
    // sets the item as what ever is in()
    setItems(storeItems);
  };
  // what mother app.js is returning to the user
  return (
    <div>
      <h1>Todo List</h1>
      <p>
        {/* map the list - map is a tidy for each i in list  */}
        {/* generates a key - so everything becomes a key value paired system */}
        {/* why so it can access and index because App.js doesnt know the index   */}
        {item.map((item, index) => {
          // returns the new list array
          return (
            // calls the todo to do its job with this data
            <TodoList
              // new item
              item={item.item}
              // new key
              key={index}
              // event handler
              handleClick={() => handleClick(index)}
            />
          );
        })}
        <p>
          {/* calls the additem to its job */}
          <AddItem
            // sumbit buttom handler
            handleSubmit={handleSubmit}
            // input from the form
            itemInput={itemInput}
            //  the set input
            setItemInput={setItemInput}
          />
        </p>
      </p>
    </div>
  );
};

export default App;
