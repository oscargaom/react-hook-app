import React, { memo } from 'react'

// Con memo si no hay cambios en el componente evitamos que se renderice.
export const Small = memo(({ counter }) => {

    console.log("Se ha llamado Small");
    
    return (
        <small>
            Counter: { counter }
        </small>
    )
});
