import React from 'react';
import '@testing-library/jest-dom';
import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos, newDemoTodoItem } from '../../fixtures/demoTodos';

describe('Probar el reducer todoReducer', () => {

    test('Debe regresar el reducer por default', () => {
        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);
    });

    test('Debe agregar un TODO', () => {
        const state = todoReducer(demoTodos, {
            type: "add",
            payload: newDemoTodoItem
        })

        expect(state.length).toBe(4);
        expect(state.filter(todo => todo === newDemoTodoItem).length).toEqual(1);
        expect(state).toEqual([...demoTodos, newDemoTodoItem]);
    });
    

    test('Debe de borrar un TODO', () => {

        const state = todoReducer(demoTodos, {
            type: 'remove',
            payload: 1
        });

        expect(state.length).toBe(demoTodos.length - 1);
    });

    test('Debe hacer el toggle del TODO indicado', () => {
       const state = todoReducer(demoTodos, {
           type: 'toggle',
           payload: 2
       }); 

       expect(state.filter( todo => todo.id === 2)[0].done).toBe(true);
    });
})

