import * as React from 'react';
import './CardContainer.scss';
import Card from '../Components/Card/Card';

const CardContainer = () => {

    const [items, setItems] = React.useState([]);
    const [cargando, setCargando] = React.useState(false);
    const [error, setError] = React.useState(null);
    
    React.useEffect(() => {
        const url ="http://localhost:3001/productos";
        setCargando(true);
        fetch(url)
            .then((response) => {
                if(response.ok){
                    return response.json();
                } else {
                    throw response;
                }
            })
            .then((data) => setItems(data))
            .catch((error) => setError(error))
            .finally(() => setCargando(false))
    }, [])

    return (
        <div className="cardContainer">
            {cargando && <h1>CARGANDO...</h1>}
            {error && <h1>Ha habido un Error: {error.status} {error.statusText}</h1>}
            {items?.map((producto) => {
                return (
                    <Card 
                        key={producto.id}
                        productId={producto.id}
                        initial={producto.initial}
                        stock={producto.stock}
                        marca={producto.marca}
                        varietal={producto.varietal}
                        precio={producto.precio}
                        img={producto.img} 
                    />  
                )
            })}
        </div>
    )
}

export default CardContainer;