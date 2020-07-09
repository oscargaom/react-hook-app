import React, { useEffect } from 'react'
import "../../styles/effects.css";
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {

    const [values, handleInputChange] = useForm({
      name: '',
      email: '',
      password: ''
    });
    
    const {name, email, password} = values;

    useEffect(() => {
        console.log('useEffect on email');
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    };

    // useEffect(() => {
    //   // console.log('useEffect in []');
    // }, []);

    // useEffect(() => {
    //   // console.log('useEffect in name');
    // }, [name])
    
    // useEffect(() => {
    //   // console.log('useEffect in email');
    // }, [email])

    // const handleInputChange = ({ target }) => {
    //   setFormState({
    //     ...formState,
    //     [target.name]: target.value
    //   });
    // }

    return (
        <div className="form-group">
            <h1>Form With custom Hook</h1>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input 
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Tu Nombre"
                  autoComplete="off"
                  value={name}
                  onChange={handleInputChange}
                />

                <input 
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="example@gmail.com"
                  autoComplete="off"
                  value={email}
                  onChange={handleInputChange}
                />

                <input 
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="*********"
                  value={password}
                  onChange={handleInputChange}
                />

                <button type="submit" className="btn btn-primary">
                    Guardar
                </button>
            </form>

            {/* { name === "123" && <Message />}  */}
        </div>
    )
}
