import React, { useLayoutEffect, useRef, useState } from 'react'
import "../../styles/layout.css";
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from "../../hooks/useCounter";

export const Layout = () => {
    
    const { counter, increment } = useCounter(1);
    
    const [boxSize, setBoxSize] = useState({});
    // console.log(`counter: ${counter}`);

    const pTag = useRef();
    
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {quote} = !!data[0] && data[0];
    
    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]);
    

    return (
        <div>
            <h1>Breaking Bad Layout Effects</h1>            
            <hr/>

            <blockquote className="blockquote text-right">
                <p 
                    ref={pTag}
                    className="mb-0"
                > 
                    {quote} 
                </p>
            </blockquote>

            <pre>
                {JSON.stringify(boxSize, null, 1)}
            </pre>

            <button className="btn btn-primary" onClick={increment}>
                Siguiente
            </button>
        </div>
    )
}
