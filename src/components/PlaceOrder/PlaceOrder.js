import React from 'react';
import gif from '../../images/giphy.gif'
// import { clearTheCart } from '../../utilities/fakedb';

const PlaceOrder = () => {

    return (
        <div style={{ margin: "0 300px" }}>
            <h2>Your order has been placed</h2>
            <img src={gif} alt="" />
        </div>
    );
};

export default PlaceOrder;