import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    // Initialize cartItems from localStorage if available, else set to an empty array
    const [cartItems, setCartItems] = useState(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        return savedCartItems ? JSON.parse(savedCartItems) : [];
    });

    // New clearCart function
    const clearCart = () => {
        setCartItems([]);
    };

    // Define calculateTotal method
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };


    // Save cart items to local storage whenever the cartItems state changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex((item) => item._id === product._id);

            if (existingItemIndex !== -1) {
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    quantity: updatedItems[existingItemIndex].quantity + (product.quantity || 1),
                };
                return updatedItems;
            } else {
                return [...prevItems, { ...product, quantity: product.quantity || 1 }];
            }
        });
    };

    const updateAdditionalDetails = (productId, details) => {
        setCartItems((currentItems) =>
            currentItems.map((item) =>
                item._id === productId ? { ...item, additionalDetails: details } : item
            )
        );
        // Optionally, update localStorage to persist changes
        localStorage.setItem('cartItems', JSON.stringify(cartItems.map((item) =>
            item._id === productId ? { ...item, additionalDetails: details } : item
        )));
    };

    // Add this function to your CartProvider component in CartContext
    const updateQuantity = (productId, quantity) => {
        setCartItems((currentItems) =>
            currentItems.map((item) =>
                item._id === productId ? { ...item, quantity: Math.max(quantity, 1) } : item
            )
        );
        // Optionally, update localStorage to persist changes
        localStorage.setItem('cartItems', JSON.stringify(cartItems.map((item) =>
            item._id === productId ? { ...item, quantity: Math.max(quantity, 1) } : item
        )));
    };

    const deleteFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item._id !== productId));
        // Update localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems.filter((item) => item._id !== productId)));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, deleteFromCart, updateQuantity, updateAdditionalDetails, calculateTotal, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};