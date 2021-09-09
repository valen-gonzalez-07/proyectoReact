import React from 'react';
import './NavBar.css';
import CartWidget from './CartWidget/CartWidget.js';

const NavBar = () => {
    return (
        <div className="navbar">
            <div> <img className="logo" src="././logo.png" alt="logo" title="logo" /> </div>
            <div>
                <ul className="navbarLinks">
                    <li>HOME</li>
                    <li>SHOP</li>
                    <li><CartWidget /></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;
