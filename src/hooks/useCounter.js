import React, { useState } from "react";

export const useCounter = ( initialState = 10 ) => {
    
    const [state, setState] = useState(initialState);

    const increment = (factory = 1) => {
        setState(state + factory);
    };

    const reset = () => {
        setState(initialState);
    };

    const decrement = (factory) => {
        setState(state - factory);
    };

    return {
        state,
        increment,
        reset,
        decrement
    };
};
