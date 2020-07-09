import React from 'react'

export const ShowIncrement = React.memo(({ increment, factory }) => {

    console.log("Call ShowIncrement");

    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                increment(factory);
            }}
        >
            Incrementar
        </button>
    )
});
