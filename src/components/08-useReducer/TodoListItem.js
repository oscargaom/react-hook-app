import React from 'react'

export const TodoListItem = ({todo, index, handleToggle, handleRemoveOnClick}) => {

    const {id, done, desc} = todo;

    return (
        <li
            key={id}
            className="list-group-item"
        >
            <p 
                className={`${done && "complete"}`}
                onClick={() => handleToggle(id)}
            >
                {index + 1}. {desc}
            </p>

            <button
                name={id}
                className="btn-danger"
                onClick={() => { handleRemoveOnClick(id) }}
            >
                Eliminar
            </button>
        </li>
    )
}
