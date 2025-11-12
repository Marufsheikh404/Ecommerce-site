import React from 'react';
import { AuthContext } from '../Context/AuthContext';

const AuthProvider = ({children}) => {
    const Info ={

    }
    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;