import React, { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const [items, setItems] = useState([]);
  const [itemBeingEdited, setItemBeingEdited] = useState();

  const editItem = (index, currentValue) => {
    const newList = [...items];
    newList[index] = itemWithId(currentValue);
    setItems(newList);
    setItemBeingEdited(undefined);
  };

  const itemWithId = (value) => {
    return {
      value: value,
      id: Date.now(),
    };
  };

  return (
    <div className="App">
      <h2>Controlled input example</h2>
      <List/>
    </div>
  );
}

export default App;
