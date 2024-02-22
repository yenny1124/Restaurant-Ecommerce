import React, { useState, useEffect } from 'react';
import './menudisplay.css'
import SushiCard from '../sushicard/SushiCard'

const MenuDisplay = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [products, setProducts] = useState([]);

    // fetch categories 
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:3003/api/get/categories'); // Adjust URL as needed
                const data = await response.json();
                // console.log(data); // to debug
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        // Function to fetch products from the backend
        const fetchProducts = async () => {
            try {
                // Use Axios or fetch to get the product data
                const response = await fetch('http://localhost:3003/api/get/products');
                const data = await response.json();
                // console.log(data); // to debug
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
            <div className="category-bar">
                {categories.map(category => (
                    <button
                        key={category._id}
                        onClick={() => setSelectedCategory(category._id)}
                        className={selectedCategory === category._id ? 'active-category' : ''}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            <div className='card-wrapper'>
                {products.map((product) => (
                    <SushiCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default MenuDisplay