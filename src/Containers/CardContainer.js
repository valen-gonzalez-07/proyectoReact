import * as React from 'react';
import './CardContainer.scss';
import Card from '../Components/Card/Card';

const CardContainer = () => {

    const [items, setItems] = React.useState([])
    const [cargando, setCargando] = React.useState(false)

    React.useEffect(() => {
        setCargando(true);
        getProducts()
            .then((resultado) => setItems(resultado))
            .finally(() => setCargando(false))
    }, []);

    const getProducts = () => {
        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 4000);
        });
    };

    return (
        <div className="cardContainer">
            {cargando && <h1>CARGANDO...</h1>}
            {items?.map((producto) => {
                return (
                    <Card 
                        key={producto.id}
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

const productos = [
    {
        id: 0, 
        initial: 1, 
        stock: 20, 
        marca: "PAZ", 
        varietal: "MALBEC", 
        precio: 1074, 
        img: "https://i.postimg.cc/rwvtydG5/paz-Malbec.png",
    },
    {
        id: 1, 
        initial: 1, 
        stock: 20, 
        marca: "PAZ", 
        varietal: "BONARDA", 
        precio: 1074, 
        img: "https://i.postimg.cc/jSW7r6fs/paz-Bonarda.png",
    },
    {
        id: 2, 
        initial: 1, 
        stock: 22, 
        marca: "PAZ", 
        varietal: "SYRAH", 
        precio: 1074, 
        img: "https://i.postimg.cc/vTqcJDHg/pazSyrah.png"
    },
    {
        id: 3, 
        initial: 1, 
        stock: 25, 
        marca: "PAZ", 
        varietal: "SAUVIGNON BLANC", 
        precio: 1074, 
        img: "https://i.postimg.cc/fWBttqjz/paz-Sauvignon-Blanc.png"
    },
    {
        id: 4, 
        initial: 1, 
        stock: 22, 
        marca: "DADÁ", 
        varietal: "BLEND", 
        precio: 501, 
        img: "https://i.postimg.cc/0y376XvM/dada1.png"
    },
    {
        id: 5, 
        initial: 1, 
        stock: 17, 
        marca: "DADÁ 2", 
        varietal: "BLEND", 
        precio: 501, 
        img: "https://i.postimg.cc/sXCSmBv3/dada2.png"
    },
    {
        id: 6, 
        initial: 1, 
        stock: 20, 
        marca: "DADÁ 3", 
        varietal: "BLEND", 
        precio: 501, 
        img: "https://i.postimg.cc/R0HKw1CP/dada3.png"
    },
    {
        id: 7, 
        initial: 1, 
        stock: 17, 
        marca: "DADÁ 6", 
        varietal: "DULCE", 
        precio: 501, 
        img: "https://i.postimg.cc/63VZm9vn/dada6.png"
    },
    {
        id: 8, 
        initial: 1, 
        stock: 17, 
        marca: "DADÁ 7", 
        varietal: "DULCE", 
        precio: 819, 
        img: "https://i.postimg.cc/1X9FxLGT/dada7.png"
    },
    {
        id: 9, 
        initial: 1, 
        stock: 23, 
        marca: "DADÁ 7 MARACUYÁ", 
        varietal: "DULCE", 
        precio: 819, 
        img: "https://i.postimg.cc/RhXHvXG0/dada7PM.png"
    },
    {
        id: 10, 
        initial: 1, 
        stock: 28, 
        marca: "DADÁ 7 SWEET PINK", 
        varietal: "DULCE", 
        precio: 819, 
        img: "https://i.postimg.cc/G3QYPmr1/dada7SP.png"
    },
    {
        id: 11, 
        initial: 1, 
        stock: 23, 
        marca: "DADÁ 8", 
        varietal: "BLEND", 
        precio: 819, 
        img: "https://i.postimg.cc/SNx9gbNY/dada8.png"
    },
]