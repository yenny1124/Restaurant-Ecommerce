import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item._id === product._id);
        if (existingItem) {
            // Update the quantity if the product is already in the cart
            setCartItems(cartItems.map((item) =>
                item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            // Add the product to the cart with quantity 1 if it's not already in the cart
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};