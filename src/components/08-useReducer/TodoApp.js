import React, { useReducer, useEffect } from 'react'
import "../../styles/styles.css"
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoFormAdd } from './TodoFormAdd';

// const initialState = [{
//     id: new Date().getTime(),
//     desc: "Solfeo",
//     done: false
// }];

const init = () => {
    // return [{
    //     id: new Date().getTime(),
    //     desc: "Solfeo",
    //     done: false
    // }]
    return JSON.parse(localStorage.getItem("todos")) || [];
};


export const TodoApp = () => {

    // const [todos, dispatch] = useReducer(todoReducer, initialState);
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        // console.log('entrando a useEffect');
        // console.log(todos);
    }, [todos]);

    const handleRemoveOnClick = (todoId) => {

        // const todosJson = JSON.parse(localStorage.getItem("todos"))
        // console.log(todosJson);
        // const { target: { name } } = e;
        // console.log(name);

        const action = {
            type: "remove",
            payload: todoId
        };

        dispatch(action);
    };

    const handleToggle = (todoId) => {
        console.log(todoId);
        dispatch({
            type: "toggle",
            payload: todoId
        });
    };

    const handleAddNewTodo = (todo) => {
        
        dispatch({
            type: "add",
            payload: todo
        });
    };

    return (
        <div>
            <h1>Todo App ({todos.length}) </h1>
            <hr />

            {/* <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {
                            todos.map((todo, idx) =>
                                (<li
                                    key={todo.id}
                                    className="list-group-item"
                                >
                                    <p 
                                        className={`${todo.done && "complete"}`}
                                        onClick={() => handleToggle(todo.id)}
                                    >
                                        {idx + 1}. {todo.desc}
                                    </p>

                                    <button
                                        name={todo.id}
                                        className="btn-danger"
                                        onClick={() => { handleRemoveOnClick(todo.id) }}
                                    >
                                        Eliminar
                                    </button>
                                </li>)
                            )
                        }
                    </ul>
                </div>
                <div className="col-5">
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
                </div>
            </div> */}
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        handleToggle={handleToggle}
                        handleRemoveOnClick={handleRemoveOnClick}
                    />
                </div>
                <div className="col-5">
                    <TodoFormAdd 
                        handleAddNewTodo={handleAddNewTodo}
                    />
                </div>
            </div>
        </div>
    )
}
