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

    // Fetch products by selected category
    useEffect(() => {
        const fetchProductsByCategory = async () => {
            try {
                let url = 'http://localhost:3003/api/get/products';
                if (selectedCategory) {
                    url += `/category/${selectedCategory}`; // Update this line based on your actual API
                }
                const response = await fetch(url);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProductsByCategory();
    }, [selectedCategory]); // React to changes in selectedCategory

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
                {products.length > 0 ? (
                    products.map((product) => (
                        <SushiCard key={product._id} product={product} />
                    ))
                ) : (
                    <p className='no-product-message'>No products found for this category.</p>
                )}
            </div>
        </div>
    )
}

export default MenuDisplay