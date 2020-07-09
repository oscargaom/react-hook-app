import { useState } from "react";

export const useCounter = ( initialState = 10 ) => {
    
    const [counter, setCounter] = useState(initialState);

    const incrementByFactory = (factory = 1) => {
        setCounter(counter + factory);
    };
    
    const increment = () => {
        setCounter(counter + 1);
        // console.log(`counter: ${counter}`);
    };

    const reset = () => {
        setCounter(initialState);
    };

    const decrementByFactory = (factory) => {
        setCounter(counter - factory);
    };

    const decrement = () => {
        setCounter(counter - 1);
    };

    return {
        counter,
        increment,
        incrementByFactory,
        reset,
        decrement,
        decrementByFactory
    };
};
