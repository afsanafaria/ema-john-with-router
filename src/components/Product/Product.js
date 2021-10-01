import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {

    const { name, seller, price, img, stock, star, features } = props.product;

    return (
        <div className="product">
            <div className="pic">
                <img src={img} alt="" />
            </div>
            <div className="details">
                <div className="product-details">
                    <p className="product-name">{name}</p>
                    <small>by: {seller}</small>
                    <p>${price}</p>
                    <small>only {stock} left in stock - order soon</small>
                    <br></br>
                    <button onClick={() => props.handleAddToCart(props.product)} className="button"><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
                </div>
                <div className="features-icon">

                    <Rating
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star "
                        initialRating={star}
                        readonly
                    />

                    <p>Features</p>
                    <ul className="feature-list">
                        {
                            features.map(feature => <li>{feature?.description}: {feature?.value}</li>)
                        }
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Product;