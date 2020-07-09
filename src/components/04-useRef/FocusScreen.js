import React, { useRef } from 'react'
import "../../styles/effects.css";

export const FocusScreen = () => {
    
    const refCtrl = useRef();
    console.log(refCtrl);

    const handleClick = () => {
        // Pone el foco en el input
        // document.querySelector("input").focus();
        // Pone el foco en el input y además selecciona el contenido del mismo
        // document.querySelector("input").focus();
        // Esta es otra manera de hacerlo usando el useRef
        refCtrl.current.select();
    };

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>

            <input
                type="text"
                ref={refCtrl}
                className="form-control"
                placeholder="Introduce tu nombre"
            />

            <button
                onClick={handleClick} 
                className="btn btn-outline-primary mt-3">
                Focus
            </button>
        </div>
    )
}
