import * as React from 'react';
import './ItemCount.scss';
import { CartContext } from '../../Context/CartContext';
import CartWidget from './CartWidget/CartWidget';

const ItemCount = ({stock, initial}) => {

    const [counter, setCounter] = React.useState(initial);

    const restar = () => {
        if (counter > 1){
            setCounter((state) => state - 1);
        }
    }

    const sumar = () => {
        if (counter < stock){
            setCounter((state) => state + 1);
        }
    }

    return (
        <div className="buttonItemCount">
            <button onClick={restar}>-</button>
                <p><b>{counter}</b></p>
            <button onClick={sumar}>+</button>
            <CartContext.Provider value={counter} />
        </div>
    )
}

export default ItemCount;
