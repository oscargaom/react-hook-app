import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en el componente <HomeScreen />', () => {
    
    const user = {
        id:9801,
        name:"oscar",
        email:"oscar@gmail.com"
    };

    const wrapper = mount(
        <UserContext.Provider value={
            {
                user
            }
        }>
            <HomeScreen />
        </UserContext.Provider>
    );

    test('debe mostrarse el componente ', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
})
