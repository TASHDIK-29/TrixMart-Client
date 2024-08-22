import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    // const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // const addToCart = (item) => {
    //     setCartItems([...cartItems, item]);
    // };

    const toggleCartModal = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <CartContext.Provider value={{ isCartOpen, toggleCartModal }}>
            {children}
        </CartContext.Provider>
    );
};
