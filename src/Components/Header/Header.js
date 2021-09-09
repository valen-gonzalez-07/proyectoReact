import React from "react";
import './Header.css';

const Header = ({source}) => {
    return (
        <div>
            <img className="headerImg" src={source} alt="Copa de vino" />
        </div>
    )
}

export default Header;