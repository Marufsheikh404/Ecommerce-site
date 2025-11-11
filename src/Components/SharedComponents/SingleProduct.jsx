import React from 'react';
import useData from '../../Hooks/useData';
import { useLocation } from 'react-router';

const SingleProduct = () => {
    const location = useLocation();
    const id = location.state;
    const {products} = useData();
    const findProducts = products.find(p=> p.id == id)
    return (
        <div>
            this is single products page
        </div>
    );
};

export default SingleProduct;