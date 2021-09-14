import React from "react";
import './Header.scss';
import Button from "./ButtonHeader/ButtonHeader.js";
import ItemCount from "./ItemCount/ItemCount";

const Header = ({title, description, image}) => {
    return (
        <div className="homeContainer">
            <div className="homeData">
                <p className="titleHome">{title}</p>
                <p className="descriptionHome">{description}</p>
                <Button />
                <ItemCount stock={20} initial={1} />
            </div>
            <div className="homeImg">
                <div className="homeCircleImg"></div>
                <img className="homeWine" src={image} alt="PAZ MALBEC"/>
            </div>
        </div>
    )
}

export default Header;