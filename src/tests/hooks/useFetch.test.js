import React from 'react';
import '@testing-library/jest-dom';
import { useFetch } from '../../hooks/useFetch';
import { render } from 'enzyme';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el componente useFetch', () => {
    
    test('Debe cargar los datos con sus valores pode default', () => {
        
        
        const resp = renderHook(() => {
            const counter = 1;
            return useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
        });
        
        // console.log(resp);
        // console.log(resp.result);
        // console.log(resp.result.current);
        
        const {data, loading, error} = resp.result.current;
        // console.log(data);
        // console.log(loading);
        // console.log(error);

        expect(data).toEqual([]);
        expect(loading).toBe(true);
        expect(error).toBe(null);
    });

    test('Debe traer información válida del servicio',  async () =>  {
        const { result, waitForNextUpdate } =  renderHook(() => useFetch(`https://www.breakingbadapi.com/api/quotes/1`));

        await waitForNextUpdate();

        const {data, loading, error} = result.current;

        // console.log(data);
        // console.log(loading);
        // console.log(error);

        expect(data.length).toBeGreaterThanOrEqual(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);
    });

    test('Debe regresar un mensaje de error el api reqres.in', async () => {

        // let urlOk = 'https://reqres.in/api/users?page=2';

        let urlError = 'https://reqres.in/ap/users?page=2';

        const {result, waitForNextUpdate} = renderHook(() => useFetch(urlError));

        await waitForNextUpdate();

        const {data, loading, error} = result.current;

        expect(data).toEqual([]);
        expect(loading).toBe(false);
        expect(error).toContain('Error al cargar la información');

    });
    
    
    
})
