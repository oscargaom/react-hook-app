import React from 'react';
import "@testing-library/jest-dom";
import { shallow } from 'enzyme';
import { TodoFormAdd } from '../../../components/08-useReducer/TodoFormAdd';


describe('Pruebas en el componente <TodoFormAdd />', () => {

    const handleAddNewTodo = jest.fn();
    const wrapper = shallow(<TodoFormAdd handleAddNewTodo={handleAddNewTodo} />);


    test('debe mostrarse el componente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('debe llamar la función handleSubmit pero debe evitar el llamado a handleAddNewTodo', () => {

        const submit = wrapper.find('form').props().onSubmit;

        const event = {
            preventDefault: () => { }
        };

        submit(event);

        expect(handleAddNewTodo).toHaveBeenCalledTimes(0);
    });


    test('debe llamar la función handleAddNewTodo', () => {
        
        // Obtiene la función onChange del input
        const change = wrapper.find('input').props().onChange;
        // Obtiene el nombre del input (description)
        const name = wrapper.find('input').props().name;
        // Valor que se va asignar al value del input
        const value = 'Seguimiento a Trello';
        // Se setean los valores que van a enviar a useForm->handleInputChange
        const eventOnChange = {
            target: {
                name,
                value
            }
        };
        // Se invoca la función para que el valor ya se encuentre en el value del input
        change(eventOnChange);

        // const valor = wrapper.find('input').props().value;
        // console.log(valor);

        // Obtiene el evento onSubmit del formulario
        const submit = wrapper.find('form').props().onSubmit;

        const eventOnSubmit = {
            preventDefault: () => {}
        };

        //console.log(wrapper.find('input').prop('value'));
        
        submit(eventOnSubmit);

        // Después del submit el value del input se limpia.
        expect(wrapper.find('input').prop('value')).toBe('');
        // Se espera que la función solamente se haya llamado una vez
        expect(handleAddNewTodo).toHaveBeenCalledTimes(1);
        // Que se haya invocado con cualquier objeto
        expect(handleAddNewTodo).toHaveBeenCalledWith(expect.any(Object));
        // Y que el objeto invocado tenga los valores:
        expect(handleAddNewTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });
    })


})
