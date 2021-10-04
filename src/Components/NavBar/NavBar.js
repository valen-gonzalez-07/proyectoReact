import * as React from 'react';
import './NavBar.scss';
import CartWidget from '../ItemCount/CartWidget/CartWidget';
import Logo from '../../Media/logo.png';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <div> 
                <NavLink to="/"> <img className="logo" src={Logo} alt="logo" title="logo" /> </NavLink> 
            </div>
            <div>
                <ul className="navbarLinks">
                    <li> 
                        <NavLink exact to="/" activeClassName="selected">HOME</NavLink>
                    </li>
                    <li> 
                        <NavLink exact to="/shop" activeClassName="selected">SHOP</NavLink>
                    </li>
                    <li><NavLink exact to="/cart"><CartWidget /></NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;
