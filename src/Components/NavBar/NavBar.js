import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <div> <img className="logo" src="././logo.png" alt="logo" title="logo" /> </div>
            <div>
                <ul className="navbarLinks">
                    <li>SHOP</li>
                    <li>PAZ</li>
                    <li>LOS INTOCABLES</li>
                    <li>ALMA MORA</li>
                    <li>ALMA MORA SELECT</li>
                    <li>DADÁ</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;
