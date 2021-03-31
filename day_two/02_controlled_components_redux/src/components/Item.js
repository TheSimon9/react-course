import React, { useState } from "react";

export default function Item(props) {
  const [currentValue, setCurrentValue] = useState(props.value);

  const editAction = () => props.setItemBeingEdited(props.index);
  const onChange = (e) => setCurrentValue(e.target.value);

  const keyPressed = (e) => {
    if (e.code === "Enter") {
      props.onChange(props.index, currentValue);
    }
  };

  if (props.inEdit)
    return (
      <input value={currentValue} onChange={onChange} onKeyPress={keyPressed} />
    );

  return (
    <div className={"item"}>
      <div className={"item-value"}>{props.value}</div>
      <div className={"edit-action"} onClick={editAction}>
        edit
      </div>
    </div>
  );
}
