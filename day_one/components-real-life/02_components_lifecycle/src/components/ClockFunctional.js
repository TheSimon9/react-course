import React, {useEffect, useState} from "react";

export default function ClockFunctional() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(
            () => tick(),
            1000
        );
        return () => {
            clearInterval(timerID);
        };
    });

    function tick() {
        setDate(new Date())
    }

    return (
        <div>
            <h1>Function component</h1>
            <h2>Sono le {date.toLocaleTimeString()}.</h2>
        </div>
    );
}
