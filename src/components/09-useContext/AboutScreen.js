import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

    const {user, setUser} = useContext(UserContext);
    
    const handleLogout = () => {
        setUser({
            id: 0,
            user: "",
            email: ""
        });
    };

    return (
        <div>
            <h1>About Screen</h1>
            <hr/>

            <pre>
                {JSON.stringify(user, null, 3) }
            </pre>

            <button
                className="btn- btn-danger"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    )
}
