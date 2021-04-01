import {useEffect, useState} from "react";

export function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    function handleChnange(e){
        setValue(e.target.value)
    }

    return {
        value,
        onChange: handleChnange
    }
}

export function useDocumentTitle(title) {
    useEffect(() => {
        document.title = title.toUpperCase();
    });
}
