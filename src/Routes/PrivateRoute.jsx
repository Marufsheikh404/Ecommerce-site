import React from 'react';
import useAuth from '../Hook/useAuth';
import { useLoaderData} from 'react-router';
import { Navigate } from 'react-router';

const PrivateRoute = ({Children}) => {
    const location = useLoaderData();
    const {user} = useAuth();
    if(!user){
        <Navigate to={'/login'} state={location?.pathname}></Navigate>
    }
    return Children;
};

export default PrivateRoute;