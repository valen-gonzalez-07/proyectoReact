import * as React from 'react';
import './ItemCount.scss';
import ButtonComprar from '../ButtonComprar/ButtonComprar';

const ItemCount = ({stock, initial, onAdd}) => {

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
        <div>
            <div className="buttonItemCount">
                <button onClick={restar}>-</button>
                    <p><b>{counter}</b></p>
                <button onClick={sumar}>+</button>
            </div>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;
