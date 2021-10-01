import { useEffect, useState } from 'react';
import { getStoredCart } from '../../utilities/fakedb';


const useCart = products => {
    const [cart, setCart] = useState([])


    useEffect(() => {
        const savedCart = getStoredCart();
        const storedCart = [];
        if (products.length) {
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);

                if (addedProduct) {
                    const quantity = savedCart[key];     //savedcart er key property er value ta quanty te rakhse
                    addedProduct.quantity = quantity;     //added product e quantity property push kora
                    storedCart.push(addedProduct);        //stored cart array te addedcart array push hbe
                }
            }
            setCart(storedCart)
        }
    }, [products])
    return [cart, setCart];
};

export default useCart;