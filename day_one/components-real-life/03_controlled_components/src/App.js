import React, {useState} from "react";
import './App.css';
import List from "./components/List";

function App() {
    const [items, setItems] = useState([]);
    const [value, setValue] = useState("");
    const [itemBeingEdited, setItemBeingEdited] = useState();

    const addItem = () => {
        setItems([...items, itemWithId(value)])
        setValue("")
    }

    const editItem = (index, currentValue) => {
        const newList = [...items];
        newList[index] = itemWithId(currentValue)
        setItems(newList)
        setItemBeingEdited(undefined)
    }

    const itemWithId = (value) => {
        return {
            value: value,
            id: Date.now()
        }
    }

    return (
        <div className="App">
            <h2>Controlled input example</h2>
            <div className={"form"}>
                <input value={value} onChange={e => setValue(e.target.value)}/>
                <button onClick={addItem}>Add item</button>
            </div>
            <List items={items} editItem={editItem} itemBeingEdited={itemBeingEdited} setItemBeingEdited={setItemBeingEdited}/>
        </div>
    );
}

export default App;
