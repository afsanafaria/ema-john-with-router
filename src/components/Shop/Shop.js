import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            })
    }, [])

    useEffect(() => {
        const savedCart = getStoredCart();
        const storedCart = [];
        if (products.length) {
            for (const key in savedCart) {

                const addedProduct = products.find(product => product.key === key);
                // console.log(addedProduct);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    // console.log(addedProduct);
                    storedCart.push(addedProduct);

                }

            }
            setCart(storedCart);
        }
    }, [products])

    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const remaining = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...remaining, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        //save to local storage
        addToDb(product.key)
    }

    const handleChange = (event) => {
        const searchText = (event.target.value);
        const matchedText = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        // console.log(matchedText);
        setDisplayProducts(matchedText)
    }
    return (
        <>
            <div className="search-container">
                <input onChange={handleChange}
                    type="text"
                    placeholder="type here to search" />

                <FontAwesomeIcon className="font" icon={faShoppingCart} />
            </div>


            <div className="shop-container">
                <div className="product-container">
                    <h2>Products:</h2>
                    {
                        displayProducts.map(product => <Product key={product.key} product={product}
                            handleAddToCart={handleAddToCart}
                        />)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link className="button" to="/review">Review your order</Link>
                    </Cart>
                </div>
            </div>

        </>

    );
};

export default Shop;