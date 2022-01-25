// useState example

import { useState } from 'react';

type AuthUser = {
    name: string;
    email: string;
}

export const User = () => {
    // const [user, setUser] = useState<AuthUser | null>(null);

    // Use type assertion to force the type
    // this mean that the type will start empty but 
    // assume that the update variable has the type needed
    const [user, setUser] = useState<AuthUser>({} as AuthUser);

    const handleLogin = () => {
        setUser({
            name: 'Vishwas',
            email: 'vishwas@example.com',
        })
    };
    // const handleLogout = () => {
    //     setUser(null);
    // };
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <div>User name is {user?.name} </div>
            <div>User email is {user?.email} </div>
        </div>
    )
}