import { useState } from "react";

export const useCounter = ( initialValue = 5) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = () => {
        setCounter( counter + 1);
    }

    const decrement = () => {
        if(counter <= 0) return;
        setCounter( counter - 1);
    }

    const resetCounter = () => {
        setCounter( initialValue );
    }

    return {
        counter,
        increment,
        decrement,
        resetCounter
    };
}