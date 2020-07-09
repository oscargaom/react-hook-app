import React, { useState, useCallback, useEffect } from 'react';
import "../../styles/effects.css";
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // };

    const increment = useCallback(
        (fact) => {
            setCounter(c => c + fact );
        },
        [setCounter]
    );

    useEffect(() => {
        
    }, [increment]);

    return (
        <div>
            <h1>Callback Hook: {counter} </h1>
            <hr />

            <ShowIncrement increment={increment} factory={5} />
        </div>
    )
}
