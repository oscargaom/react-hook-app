import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coors, setCoors] = useState({ x:0, y:0 });

    const {x, y} = coors;

    useEffect(() => {
        // console.log("Componente cargado");
        
        const moveMouse = (e) => {
            setCoors({x: e.x, y: e.y});
            //console.log(`x: ${coors.x}, y:${coors.y}`);
        };

        window.addEventListener('mousemove', moveMouse);

        return () => {
            window.removeEventListener('mousemove', moveMouse);
            // console.log("Componente desmontado");
        }
    }, []);

    return (
        <div>
            <h3>Message</h3>
            <p>
                x: {x}, 
                y: {y}
            </p>
        </div>
    )
}
