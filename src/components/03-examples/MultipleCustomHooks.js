import React from 'react'
import "../../styles/effects.css";
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from "../../hooks/useCounter";

export const MultipleCustomHooks = () => {
    
    const { counter, increment } = useCounter(1);
    
    console.log(`counter: ${counter}`);
    
    const { data, loading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    const {quote, author } = !!data[0] && data[0];

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>            
            <hr/>

            {
                loading 
                ?
                (
                    <div className="alert alert-info text-center">
                        Loading ...
                    </div>
                )
                :
                (
                    <blockquote className="blockquote text-right">
                        <p className="mb-0"> {quote} </p>
                        <footer className="blockquote-footer"> {author} </footer>
                    </blockquote>
                )
            }

            <button className="btn btn-primary" onClick={increment}>
                Siguiente
            </button>
        </div>
    )
}
