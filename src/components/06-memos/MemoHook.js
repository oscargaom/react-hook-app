import React, { useState, useMemo } from 'react'
import "../../styles/effects.css";
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../helpers/procesoPesado';

export const MemoHook = () => {

    const {counter, increment} = useCounter(6000);

    const [show, setShow] = useState(true);

    /*  useMemo lo que hace es memorizar el último resultado de la función indicada,
        de modo que cuando hay un cambio en la variable counter se vuelve a ejecutar
        la función y se memoriza ese resultado
    */
    const memoProcesoPesado = useMemo(() => procesoPesado (counter), [counter]);

    return (
        
        <div>
            <h1>MemoHook <br/> <small>Counter: {counter}</small> </h1>
            <hr />

            <p>{ memoProcesoPesado }</p>

            <button
                className="btn btn-primary"
                onClick={ increment }
                >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-2"
                onClick= {() => { setShow(!show) }}
            >
                Show/Hide { JSON.stringify(show) }
            </button>
        </div>
    )
}
