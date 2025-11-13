import React from 'react';
import useAuth from '../Hook/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user,loading } = useAuth();
    if(loading) return(
        <div>

        </div>
    );
    if (user) {
        return children;
    }
    return <Navigate to={'/login'}  state={{from:location}}></Navigate>
};

export default PrivateRoute;