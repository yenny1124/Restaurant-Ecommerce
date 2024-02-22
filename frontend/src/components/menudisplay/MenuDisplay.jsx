import React, { useState, useEffect } from 'react';
import './menudisplay.css'
import SushiCard from '../sushicard/SushiCard'

const MenuDisplay = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Function to fetch products from the backend
        const fetchProducts = async () => {
            try {
                // Use Axios or fetch to get the product data
                const response = await fetch('http://localhost:3003/api/get/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className='menudisplay'>
            <h1 className='title'>Our Menu</h1>
            <hr />
            <div className='card-wrapper'>
                {products.map((product) => (
                    <SushiCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default MenuDisplay