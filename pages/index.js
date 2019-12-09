import React, { useState, useCallback } from "react";
import CounterButton from "../components/CounterButton";

export default function App() {
    const [counter, setCounter] = useState(0);

    const increment = useCallback(() => setCounter(c => c + 1), [setCounter]);
    const decrement = useCallback(() => setCounter(c => c - 1), [setCounter]);

    return (
        <>
            <CounterButton buttonText="Decrement" onClick={decrement} />
            {counter}
            <CounterButton buttonText="Increment" onClick={increment} />
        </>
    );
}
