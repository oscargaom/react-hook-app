import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';

jest.mock('../../../hooks/useCounter');
jest.mock('../../../hooks/useFetch');


describe('Pruebas en el componente <MultipleCustomHooks />', () => {
    
    useCounter.mockReturnValue({
        counter: 9,
        increment: () => {}
    });

    test('Debe retornar los valores pode default', () => {
        
        useFetch.mockReturnValue({
            data: [],
            loading:true,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks/>);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar información obtenida', () => {

        // useCounter

        useFetch.mockReturnValue({
            data:[{
                quote_id: 1,
                quote: "I am not in danger, Skyler. I am the danger!",
                author: "Walter White",
                series: "Breaking Bad"
            }],
            loading:false,
            error:null
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').exists()).toBe(true);
        expect(wrapper.find('.mb-0').text().trim()).toBe('I am not in danger, Skyler. I am the danger!');
        expect(wrapper.find('footer').text().trim()).toBe('Walter White');
    
        // console.log(wrapper.html());
    });
})

