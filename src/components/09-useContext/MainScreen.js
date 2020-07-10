import React, { useState } from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

export const MainScreen = () => {

    const [user, setUser] = useState({
        id: 0,
        name: "",
        email:""
    });

    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <AppRouter />
        </UserContext.Provider>
    )
}
