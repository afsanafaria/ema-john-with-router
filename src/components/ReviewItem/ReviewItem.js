import React from 'react';

const ReviewItem = (props) => {
    const { name, quantity, price, key } = props.product;
    const { handleRemove } = props
    return (
        <div className="productss">
            <div className="detailsss">
                <div className="product-details">
                    <h4 className="product-name">{name}</h4>
                    <p>Quantity: {quantity}</p>
                    <p>${price}</p>
                    <br></br>
                    <button onClick={() => handleRemove(key)} className="button">Remove</button>

                </div>
            </div>
        </div>
    );
};

export default ReviewItem;


// {/* <button onClick={() => props.handleRemove(props.product)} className="button">Remove</button> */}//eivebo kora jai