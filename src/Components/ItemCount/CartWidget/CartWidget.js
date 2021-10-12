import * as React from 'react';
import { CartContext } from '../../../Context/CartContext';
import './CartWidget.scss';

const CartWidget = () => {

    const {cart} = React.useContext(CartContext)

    return (
        <div className="cartWidget">
            <i className="fas fa-shopping-cart"></i>
            {
                cart.length !== 0 && <span>{cart.length}</span>
            }
        </div>
    )
}

export default CartWidget;