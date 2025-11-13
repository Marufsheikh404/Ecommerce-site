import React from 'react';
import useAuth from '../Hook/useAuth';
import { Navigate } from 'react-router';

const PrivateRoute = ({ Children }) => {
    const { user,loading } = useAuth();
    if(loading) return(
        <div>

        </div>
    );
    if (user) {
        return Children;
    }
    return <Navigate to={'/login'} ></Navigate>
};

export default PrivateRoute;