import * as React from 'react';
import './ItemCount.scss';

const ItemCount = ({stock, initial}) => {

    const [counter, setCounter] = React.useState(initial);

    const restar = () => {
        if (counter > 0){
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
            <p>Cantidad: <b>{counter}</b></p>
            <button onClick={sumar}>+</button>
        </div>
    )
}

export default ItemCount;
