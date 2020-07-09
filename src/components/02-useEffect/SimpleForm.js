import React, { useEffect, useState } from 'react'
import "../../styles/effects.css";
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
      name: '',
      email: ''
    });
    
    const {name, email} = formState;

    useEffect(() => {
      // console.log('useEffect in []');
    }, []);

    useEffect(() => {
      // console.log('useEffect in name');
    }, [name])
    
    useEffect(() => {
      // console.log('useEffect in email');
    }, [email])


    const handleInputChange = ({ target }) => {
      setFormState({
        ...formState,
        [target.name]: target.value
      });
    }

    return (
        <div className="form-group">
            <h1>Use Effect</h1>
            <hr/>

            <form>
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
            </form>

            { name === "123" && <Message />} 
        </div>
    )
}
