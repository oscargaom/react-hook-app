import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoFormAdd = ({handleAddNewTodo}) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ""
    });
    
    // console.log(description);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length < 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddNewTodo(newTodo);

        reset();
    };

    return (
        <>
            <h4> Agregar TODO </h4>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Agregar nueva tarea ..."
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
