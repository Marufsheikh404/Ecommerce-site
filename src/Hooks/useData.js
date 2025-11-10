import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useData = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/Category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    useEffect(() => {
        fetch('/Products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return {categories , products}
};

export default useData;