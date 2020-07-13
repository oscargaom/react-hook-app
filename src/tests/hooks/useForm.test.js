import React from 'react';
import "@testing-library/jest-dom";
import { useForm } from '../../hooks/useForm';
import { renderHook , act} from '@testing-library/react-hooks';


describe('Pruebas del componente useform', () => {
    
    const initialForm = {
        name:"Fernando",
        email:"fernando@gmail.com"
    };
    
    const initialForm2 = {
        name:"Oscar",
        email:"oscar@gmail.com"
    }

    test('Debe regresar un formulario por defecto', () => {
         const {result} = renderHook(() => useForm(initialForm)); 

         const [values, handleInputChange, reset] = result.current;

         expect(values).toEqual(initialForm);
         expect(typeof reset).toBe("function");
         expect(typeof handleInputChange).toBe("function");
    });

    test('Debe cambiar el valor de la propiedad name dentro del formulario', () => {
        
        const {result} = renderHook(() => useForm(initialForm2));

        const [,handleInputChange,] = result.current;

        // console.log(handleInputChange);

        const newName = "Gerardo";

        const event = {
            target: {
                name: "name",
                value: newName
            }
        };

        act(() => {
            handleInputChange(event)
        });

        const [values] = result.current;

        expect(values).toEqual({...initialForm2, name: newName});
    });

    test('Debe restablecerse el formulario con reset', () => {
        const {result} = renderHook(() => useForm(initialForm));

        // console.log(result.current);

        const [, handleInputChange, ] = result.current;
        
        const newName = "Gerardo";
        
        const event = {
            target: {
                name: "name",
                value: newName
            }
        };
        
        act(() => {
            handleInputChange(event)
        });
        
        // console.log(result.current);
        
        const [, , reset] = result.current;
        
        act(() => {
            reset();
        });
        
        // console.log(result.current);

        const [values] = result.current;

        expect(values).toMatchObject(initialForm);
    });
    
    
    
})
