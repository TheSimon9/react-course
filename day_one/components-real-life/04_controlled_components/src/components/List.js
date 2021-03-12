import React from "react";
import Item from "./Item";

export default function List(props) {
    if (!props.items) return null

    if (props.items.length === 0) return <div>Sorry, there are no items avaible to show.</div>

    return <div>
        {props.items.map((item, index) => <Item value={item.value}
                                                index={index}
                                                key={item.id}
                                                onChange={props.editItem}
                                                inEdit={props.itemBeingEdited === index}
                                                setItemBeingEdited={props.setItemBeingEdited}
            />
        )}
    </div>

}
