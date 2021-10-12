import * as React from 'react';

export const CartContext = React.createContext();
CartContext.displayName = "CartContext";

export const CartProvider = ({children}) => {

    const [cart, setCart] = React.useState([]);

    const addItem = (item) => {
        const newItem = item;
        setCart((prevState) => [...prevState, newItem]);
    };
    
    const removeItem = (id) => {

    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {

    };

    const value = {cart, addItem, removeItem, clear, isInCart};

    return <CartContext.Provider value={value}> {children} </CartContext.Provider>
}

