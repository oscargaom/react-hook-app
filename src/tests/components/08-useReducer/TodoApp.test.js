import React from 'react';
import '@testing-library/jest-dom';
import { shallow, mount } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos, newDemoTodoItem } from '../../fixtures/demoTodos';
import { act } from '@testing-library/react';


describe('Pruebas en el componente <TodoApp /> ', () => {
    
    const wrapper = shallow(<TodoApp />);
    
    // Vamos a simular el llamado a localStorage.setItem()
    Storage.prototype.setItem = jest.fn(() => {});
    
    test('debe mostrarse correctamente el componente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });


    test('debe agregar un nuevo TODO', () => {

        /*  Utilizamos mount porque carga o renderiza todos los componentes que tiene 
            internamente TodoApp [TodoList, TodoFormAdd] de este modo podemos ver su 
            contenido en formato jsx de lo contrario solo vemos las etiquetas del 
            componente, pero cuando no es el caso utilizamos shallow.
            shallow solo renderiza el primer componente dentro del high order component,
            es decir, solo renderiza el primer componente que sería el componente padre.
        */
        const mountWrapper = mount(<TodoApp />);
        
        const handleAddNewTodo = mountWrapper.find('TodoFormAdd').prop('handleAddNewTodo');
        
        act (() => {
            handleAddNewTodo(demoTodos[0]);
        });

        act (() => {
            handleAddNewTodo(demoTodos[1]);
        });

        act (() => {
            handleAddNewTodo(demoTodos[2]);
        });

        // Se debe contar la primera vez que se carga el componente 
        const countUseEffectLoadFirstTime = 1;

        expect(mountWrapper.find('h1').text().trim()).toBe(`Todo App (${ demoTodos.length })`);
        expect(localStorage.setItem).toHaveBeenCalledTimes(demoTodos.length + countUseEffectLoadFirstTime);
        
    });
    
    test('debe eliminar un elemento TODO ', () => {
        const handleAddNewTodo = wrapper.find('TodoFormAdd').props().handleAddNewTodo;

        handleAddNewTodo(newDemoTodoItem);

        const handleRemoveOnClick = wrapper.find('TodoList').props().handleRemoveOnClick;

        handleRemoveOnClick(newDemoTodoItem.id)

        expect(wrapper.find('h1').text().trim()).toBe('Todo App (0)');
    });
    
    
})

