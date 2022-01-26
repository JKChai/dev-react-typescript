import React, { useState, createContext } from 'react';

export type AuthUser = {
    name: string;
    email: string;
}

type UserContextType = {
    user: AuthUser | null;
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
}

type UserContextProviderProps = {
    children: React.ReactNode;
}

// Code can be improved by using type assertion 
// where code will start with empty value rather than null
// which can help remove unecessary if condition statement from User.tsx
export const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({ children }: UserContextProviderProps ) => {
    const [user, setUser] = useState<AuthUser | null>(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    );
}
