import React from 'react';
import useAuth from '../Hook/useAuth';
import { useNavigate } from 'react-router';

const PrivateRoute = ({Children}) => {
    const navigate = useNavigate();
    const {user} = useAuth();
    if(!user){
        navigate('/login')
    }
    return Children;
};

export default PrivateRoute;