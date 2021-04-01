import React from "react";
import {useDocumentTitle, useFormInput} from "../hooks/genericHooks";

function ExampleCustomHooks() {
    const name = useFormInput('claudio');
    const surname = useFormInput('rossi');
    useDocumentTitle(name.value + ' ' + surname.value)


    return (
        <div>
            <input {...name} />
            <input {...surname} />
        </div>
    );
}

export default ExampleCustomHooks;
