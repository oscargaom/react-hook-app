import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({todos, handleToggle, handleRemoveOnClick}) => {
    return (
        <ul className="list-group list-group-flush">
        {
            todos.map((todo, idx) =>
                <TodoListItem 
                    key={todo.id}
                    todo={todo} 
                    index={idx} 
                    handleToggle={handleToggle} 
                    handleRemoveOnClick={handleRemoveOnClick}
                />
            )
        }
    </ul>
    )
}
