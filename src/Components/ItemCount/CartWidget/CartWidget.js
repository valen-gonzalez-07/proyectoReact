import * as React from 'react';
import { CartContext } from '../../../Context/CartContext';
import './CartWidget.scss';

const CartWidget = () => {
    const counter = React.useContext(CartContext);

    return (
        <div className="cartWidget">
            <i className="fas fa-shopping-cart"></i>
            <p>{counter}</p>
        </div>
    )
}

export default CartWidget;