import * as React from 'react';
import './ButtonComprar.scss';
import { Link } from 'react-router-dom'

const ButtonComprar = () => {
    return (
        <>
        <Link exact to="/cart" > 
            <button className="btnComprar">COMPRAR</button> 
        </Link>
        </>
    )
}

export default ButtonComprar
