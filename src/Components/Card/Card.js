import * as React from 'react';
import './Card.scss';
import ItemCount from '../ItemCount/ItemCount.js';
import ButtonComprar from '../ButtonComprar/ButtonComprar';
import { Link } from 'react-router-dom';

const Card = ({productId, marca, varietal, img, precio, initial, stock}) => {
    return (
        <div className="card">
            <div className="cardCol">
                <div className="cardCol-1">
                    <img className="cardImg" src={img} alt={`${marca} ${varietal}`} title={`${marca} ${varietal}`}/>
                </div>
                <div className="cardCol-2">
                    <p className="cardMarca">{marca}</p>
                    <p className="cardVarietal">{varietal}</p>
                    <p className="cardPrecio"><b>${precio}</b></p>
                    <p className="cardStock">Stock: {stock}</p>
                </div>
            </div>
            <div>
                <ItemCount 
                initial={initial}
                stock={stock}
                />
            </div>
            <div>
                <ButtonComprar />
            </div>
            <div>
                <Link to={`/product/${productId}`}> <p>Ver detalle</p> </Link>
            </div>
        </div>
        
    )
}

export default Card;
