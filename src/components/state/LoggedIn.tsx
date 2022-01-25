//
import { useState } from "react";

export const LoggedIn = () => {
    const [isLoggedIn, setIsLogggedIn] = useState(false);
    
    const handleLogin = () => {
        setIsLogggedIn(true);
    };
    const handleLogout = () => {
        setIsLogggedIn(false);
    };
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
        </div>
    )
}