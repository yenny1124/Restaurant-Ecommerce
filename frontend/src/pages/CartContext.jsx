import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const existingItemIndex = cartItems.findIndex((item) => item._id === product._id);

        if (existingItemIndex !== -1) {
            // If the product already exists in the cart, update its quantity
            const updatedCartItems = [...cartItems];
            const existingItem = updatedCartItems[existingItemIndex];
            const updatedItem = {
                ...existingItem,
                // Add the specified quantity to the existing quantity
                quantity: existingItem.quantity + product.quantity
            };
            updatedCartItems[existingItemIndex] = updatedItem;
            setCartItems(updatedCartItems);
        } else {
            // If it's a new item, add it to the cart
            // Assume the product includes the desired quantity
            setCartItems([...cartItems, product]);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};