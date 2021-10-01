import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    //eikhne amra array return kortesi
    //cz return e just ekta jinish rturn kora jai...multiple elemnts return korar jonno amra array use krsi
    return [products, setProducts];
};

export default useProducts;