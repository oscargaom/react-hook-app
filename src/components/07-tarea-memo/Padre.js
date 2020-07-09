import React, { useCallback, useEffect } from 'react';
import { Hijo } from './Hijo';
import { useState } from 'react';
import "../../styles/effects.css";

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }

    /*  De esta menera evitamos que se creén múltiples instancias de la función
        incrementar ya que esto ocurre cada vez que se renderiza el componente, 
        pero para que esto tenag efecto tambièn es necesario el componente hijo
        haga uso de React.memo()
    */
    const incrementar = useCallback((num) => {
        setValor(val => val + num);
    }, [setValor]);

    useEffect(() => {
    }, [incrementar]);

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
