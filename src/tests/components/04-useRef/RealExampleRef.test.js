import React, { useState } from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';


describe('Pruebas del componente RealExampleRef', () => {
    
    test('Debe mostrarse correctamente', () => {
        const wrapper = shallow(<RealExampleRef />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("MultipleCustomHooks").exists()).toBe(false);
    });

    

    test('Debe de mostrar el componente MultipleCustomHooks (show = true)', () => {
        
        const wrapper = shallow( <RealExampleRef/>);

        // console.log(wrapper.html());
         wrapper.find('button').simulate('click');
        // console.log(wrapper.html());

        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    });
})
