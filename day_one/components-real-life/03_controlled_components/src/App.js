import React,  {useState} from "react";
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");
  const addItem = () => {
      setItems([...items, value])
  }

  return (
    <div className="App">
        <input  value={value} onChange={e=>setValue(e.target.value)} />
          <button onClick={addItem}>Add item</button>
        {items && <div>
            {items.map(i => <div>{i}</div>)}
        </div>}

    </div>
  );
}

export default App;
