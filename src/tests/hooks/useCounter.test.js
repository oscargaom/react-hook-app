import React from 'react';
import "@testing-library/jest-dom";
import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en el componente useCounter', () => {
    test('Parámetros de retorno del componente por default', () => {

        const resp = renderHook(() => useCounter());
        // console.log(resp);
        const { result } = resp;
        // console.log(result.current);
        // console.log(result.current.counter);
        // console.log(result.current.reset);

        expect(result.current.counter).toBe(10);
        expect(typeof result.current.decrement).toBe("function");
        expect(typeof result.current.decrementByFactory).toBe("function");
        expect(typeof result.current.increment).toBe("function");
        expect(typeof result.current.incrementByFactory).toBe("function");
        expect(typeof result.current.reset).toBe("function");
    });

    test('Parámetro indicado en la inicialización sea el correcto', () => {
        const { result } = renderHook(() => useCounter(9801));

        expect(result.current.counter).toBe(9801);
    });

    test('Función debe incrementar en un 1 el valor del counter', () => {
        const { result } = renderHook(() => useCounter());

        // console.log(result.current.counter);
        
        act(() => {
            result.current.increment();
        });
        
        // console.log(result.current.counter);

        const {counter} = result.current;

        expect(counter).toBe(11);
    });

    test('Función debe decrementar en un 1 el valor del counter', () => {
        const { result } = renderHook(() => useCounter());

        // console.log(result.current.counter);
        
        act(() => {
            result.current.decrement();
        });
        
        // console.log(result.current.counter);

        const {counter} = result.current;

        expect(counter).toBe(9);
    });

    test('Función debe incrementar el valor del counter por el valor de factory', () => {
        const { result } = renderHook(() => useCounter());

        // console.log(result.current.counter);
        
        act(() => {
            result.current.incrementByFactory(10);
        });
        
        // console.log(result.current.counter);

        const {counter} = result.current;

        expect(counter).toBe(20);
    });

    test('Función debe decrementar el valor del counter por el valor de factory', () => {
        const { result } = renderHook(() => useCounter());

        // console.log(result.current.counter);
        
        act(() => {
            result.current.decrementByFactory(6);
        });
        
        // console.log(result.current.counter);

        const {counter} = result.current;

        expect(counter).toBe(4);
    });

    test('Función debe setear nuevamente el valor del counter al valor por default', () => {
        const { result } = renderHook(() => useCounter(100));

        act(() => {
            result.current.increment();
        });

        expect(result.current.counter).toBe(101);

        act(() => {
            result.current.reset();
        });

        expect(result.current.counter).toBe(100);
    });

})
