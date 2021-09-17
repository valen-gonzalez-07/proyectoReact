import React from "react";
import './Header.scss';
import ButtonHome from "./ButtonHome/ButtonHome.js";

const Header = ({title, description, image}) => {
    return (
        <div className="homeContainer">
            <div className="homeData">
                <p className="titleHome">{title}</p>
                <p className="descriptionHome">{description}</p>
                <ButtonHome />
            </div>
            <div className="homeImg">
                <div className="homeCircleImg"></div>
                <img className="homeWine" src={image} alt="PAZ MALBEC"/>
            </div>
        </div>
    )
}

export default Header;