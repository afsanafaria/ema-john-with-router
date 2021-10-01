import React from 'react';
import { Link } from 'react-router-dom';
// import { Link, Switch, Route } from 'react-router-dom';
import Logo from '../../images/logo.png'
import './Header.css'
// import OrderReview from './OrderReview/OrderReview';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={Logo} height="50" alt=""></img>
            <nav>

                <Link to="/shop" className="link">Shop</Link>
                <Link to="/review" className="link">Order Review</Link>
                <Link to="/inventory" className="link">Manage Inventory Here</Link>
            </nav>
        </div>
    );
};

export default Header;