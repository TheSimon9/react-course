import React, {useState} from "react";
import Item from "./Item";

//Let's add react in this component. It is going to be connected. Connected to the redux flow.
import {connect} from "react-redux";
import {addItem} from "../store/actions/listActions";


function List(props) {
  const [value, setValue] = useState("");

  const addItem = () => {
    props.addItem({
      value: value,
      id: Date.now(),
    });
    setValue("");
  };

  return (
    <>
      <div className={"form"}>
        <input value={value} onChange={(e) => setValue(e.target.value)}/>
        <button onClick={addItem}>Add item</button>
      </div>
      <div>
        {props.items != null ? props.items.map((item, index) => (
          <Item
            value={item.value}
            index={index}
            key={item.id}
            onChange={props.editItem}
            inEdit={false}
            setItemBeingEdited={() => console.log("prova")}
          />
        )) : <div>Sorry, there are no items avaible to show.</div>}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  items: state.listReducer.list ?? [] //TODO: Evaluate Selector
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
})


export default connect(mapStateToProps, mapDispatchToProps)(List);