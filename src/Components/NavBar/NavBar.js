import * as React from 'react';
import './NavBar.scss';
import CartWidget from './CartWidget/CartWidget.js';
import Logo from '../../Media/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <div> 
                <Link to="/"> <img className="logo" src={Logo} alt="logo" title="logo" /> </Link> 
            </div>
            <div>
                <ul className="navbarLinks">
                    <li> 
                        <Link to="/">HOME</Link>
                    </li>
                    <li> 
                        <Link to="/shop">SHOP</Link>
                    </li>
                    <li><CartWidget /></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;
