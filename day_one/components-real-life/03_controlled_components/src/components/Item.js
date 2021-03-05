import React, {useState, useEffect} from "react";

export default function Item(props) {
    const [edit, setEdit] = useState(false)
    const [currentValue, setCurrentValue] = useState(props.value)

    const editAction = () => setEdit(!edit)
    const onChange = e => setCurrentValue(e.target.value)

    useEffect(() => {
        setEdit(false)
    }, [props.value]);

    const keyPressed = (e) => {
        if (e.code === "Enter") {
            props.onChange(props.index, currentValue)
        }
    }

    if (edit) return <input value={currentValue} onChange={onChange} onKeyPress={keyPressed}/>

    return (
        <div className={"item"}>
            <div className={"item-value"}>{props.value}</div>
            <div className={"edit-action"} onClick={editAction}>edit</div>
        </div>
    )
}
