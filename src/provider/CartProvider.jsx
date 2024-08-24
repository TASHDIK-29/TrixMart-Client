import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    
    const [isCartOpen, setIsCartOpen] = useState(false);


    const toggleCartModal = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <CartContext.Provider value={{ isCartOpen, toggleCartModal }}>
            {children}
        </CartContext.Provider>
    );
};
