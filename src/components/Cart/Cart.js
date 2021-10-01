import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props);
    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        totalQuantity = totalQuantity + product.quantity;
        total = total + product.price * product.quantity;
    }




    /*  const reducer = (previous, current) => previous + current.price * current.quantity;
     const total = cart.reduce(reducer, 0); */

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;

    // console.log(props.cart)
    return (
        <div className="cart">
            <h2>Order Summary</h2>
            <h5>Items Ordered: {totalQuantity}</h5>
            <p>Total price: {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
            {props.children}
            {/* <p>Total Delivery cost</p> */}
        </div>
    );
};

export default Cart;