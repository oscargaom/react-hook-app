import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const {setUser} = useContext(UserContext);

    const handleLogin = () => {
        setUser({
            id:9801,
            name:"oscar",
            email:"oscar@gmail.com"
        });
    };

    return (
        <div>
            <h1>Login Screen</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
