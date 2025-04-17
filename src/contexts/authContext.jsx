import { createContext, useContext, useEffect, useState } from 'react';
import { getValidAdminToken } from '../authentication/AdminAuth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
    const token = getValidAdminToken();

    if (token) {
        setUser({ role: 'admin' });
    } else {
        setUser({ role: 'user' });
    }
    }, []);

    return (
    <AuthContext.Provider value={{ user, setUser }}>
        {children}
    </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
