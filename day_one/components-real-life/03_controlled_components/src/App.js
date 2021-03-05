import React, {useState} from "react";
import './App.css';
import Item from "./components/Item";

function App() {
    const [items, setItems] = useState([]);
    const [value, setValue] = useState("");
    const addItem = () => {
        setItems([...items, value])
        setValue("")
    }
    const editItem = (index, currentValue) => {
        items[index] = currentValue
        setItems(items)
    }

    return (
        <div className="App">
            <div className={"form"}>
                <input value={value} onChange={e => setValue(e.target.value)}/>
                <button onClick={addItem}>Add item</button>
            </div>
            {items && <div>
                {items.map((value, index) => <Item value={value} index={index} onChange={editItem}/>)}
            </div>}

        </div>
    );
}

export default App;
