import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas del componente <TodoList />', () => {
    const handleToggle = jest.fn();
    const handleRemoveOnClick = jest.fn();
    
    const wrapper = shallow(<TodoList
                                todos={demoTodos}
                                handleToggle={handleToggle}
                                handleRemoveOnClick={handleRemoveOnClick}
                            />);

    test('Debe mostrarse el componente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe tener un número válido de componentes <TodoListItem /> ', () => {

        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
        
    });

    test('Debe tener las props validas', () => {
        
        expect(wrapper.find('TodoListItem').at(0).props().todo).toEqual(expect.any(Object));
        expect(wrapper.find('TodoListItem').at(0).prop('index')).toEqual(expect.any(Number));
        expect(wrapper.find('TodoListItem').at(0).props().handleToggle).toEqual(expect.any(Function));
        expect(wrapper.find('TodoListItem').at(0).prop('handleRemoveOnClick')).toEqual(expect.any(Function));

    });
    
})
