import React, { useState } from "react";

function ExampleUseState() {
    const [name, setName] = useState('claudio');
    const [surname, setSurname] = useState('rossi');


    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleSurnameChange(e) {
        setSurname(e.target.value)
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange} />
            <input value={surname} onChange={handleSurnameChange} />
        </div>
    );
}

export default ExampleUseState;
