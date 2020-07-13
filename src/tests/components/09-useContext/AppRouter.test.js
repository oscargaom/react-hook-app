import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { newDemoTodoItem } from '../../fixtures/demoTodos';


describe('Pruebas en el componente <AppRouter />', () => {
    
    const wrapper = mount(
        <UserContext.Provider value={
            {
                user: newDemoTodoItem
            }
        }>
            <AppRouter />
        </UserContext.Provider>
    );

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();      
        
        expect(wrapper.find('pre').text().trim()).toContain(newDemoTodoItem.id);
        expect(wrapper.find('pre').text().trim()).toContain(newDemoTodoItem.desc);
        expect(wrapper.find('pre').text().trim()).toContain(newDemoTodoItem.done);
    })
    
})

