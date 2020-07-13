import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';


describe('Pruebas del componente <LoginScreen />', () => {
    
    const user = {};
    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={
            {
                user,
                setUser
            }
        }>
            <LoginScreen />
        </UserContext.Provider>
    );

    test('debe mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();    
    });

    test('debe ejecutar el setUser con el argumento indicado ', () => {
        wrapper.find('button').simulate('click');

        expect(setUser).toHaveBeenCalledTimes(1);
        expect(setUser).toHaveBeenCalledWith(expect.any(Object));
        expect(setUser).toHaveBeenCalledWith({
            id:9801,
            name:"oscar",
            email:"oscar@gmail.com"
        });

        // console.log(wrapper);
    });
    
});
