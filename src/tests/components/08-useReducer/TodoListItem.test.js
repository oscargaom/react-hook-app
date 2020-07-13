import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { newDemoTodoItem } from '../../fixtures/demoTodos';

describe('Pruebas del componente <TodoListItem />', () => {

    const handleRemoveOnClick = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(<TodoListItem
        todo={newDemoTodoItem}
        index={newDemoTodoItem.id}
        handleToggle={handleToggle}
        handleRemoveOnClick={handleRemoveOnClick}
    />);

    test('Debe mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de llamar la función handleRemoveOnClick', () => {

        wrapper.find('button').simulate('click');
        
        expect(handleRemoveOnClick).toHaveBeenCalled();
        expect(handleRemoveOnClick).toHaveBeenCalledTimes(1);
        // Válida que se haya llamado con el valor del parámetro newDemoTodoItem.id
        expect(handleRemoveOnClick).toHaveBeenCalledWith(newDemoTodoItem.id);
        // expect(handleToggle).not.toHaveBeenCalled();
        // expect(handleToggle).toHaveBeenCalledTimes(0);
    });

    test('Debe de llamar la función handleToggle', () => {
        
        wrapper.find('p').simulate('click');
        
        expect(handleToggle).toHaveBeenCalled();
        expect(handleToggle).toBeCalledTimes(1);
        expect(handleToggle).toHaveBeenCalledWith(newDemoTodoItem.id);
    });

    test('Debe mostrar el texto correctamente', () => {
        const parrafo = wrapper.find('p').text().trim();

        expect(parrafo).toBe(`${newDemoTodoItem.id + 1}. ${newDemoTodoItem.desc}`);
    });

    test('Debe tener el parrafo la clase complete si done es true ', () => {

        //const handleRemoveOnClick2 = jest.fn();
        //const handleToggle2 = jest.fn();

        jest.clearAllMocks();

        newDemoTodoItem.done = true;

        const wrapper2 = shallow(<TodoListItem
                                    todo={newDemoTodoItem}
                                    index={newDemoTodoItem.id}
                                    handleToggle={handleToggle}
                                    handleRemoveOnClick={handleRemoveOnClick}
                                />);
        // console.log(wrapper2.find('p').hasClass('complete'));
        expect(wrapper2.find('p').hasClass('complete')).toBe(true);
    });
})
