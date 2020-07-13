 
import React from 'react'
import "@testing-library/jest-dom";
import { shallow } from 'enzyme';

import {HookApp} from "../HookApp";

describe('Pruebas de componente <HookApp />', () => {
    test('El componente debe existir', () => {

        const wrapper = shallow(<HookApp/>);

        expect(wrapper).toMatchSnapshot();
    })
})
