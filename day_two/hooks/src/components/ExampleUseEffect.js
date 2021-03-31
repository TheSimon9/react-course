import React, { useState, useEffect } from "react";

function ExampleUseEffect() {
    const [name, setName] = useState('claudio');
    const [surname, setSurname] = useState('rossi');

    useEffect(() => {
        document.title = name + ' ' + surname;
    });


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

export default ExampleUseEffect;
