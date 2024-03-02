import React, { useState, useEffect } from 'react';
import './menudisplay.css'
import SushiCard from '../sushicard/SushiCard'

const MenuDisplay = () => {
    const [categories, setCategories] = useState([]);
    // Assuming "sushiRollsId" is the ID for "Sushi Rolls" category.
    const sushiRollsId = "65d5b64b533e405f389db50d"; // Replace this with the actual ID from your database
    const [selectedCategory, setSelectedCategory] = useState(sushiRollsId);
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
        if (selectedCategory) { // Only fetch products if a category is selected
            const fetchProductsByCategory = async () => {
                try {
                    const url = `http://localhost:3003/api/get/products/category/${selectedCategory}`;
                    const response = await fetch(url);
                    const data = await response.json();
                    setProducts(data);
                } catch (error) {
                    console.error('Error fetching products:', error);
                }
            };

            fetchProductsByCategory();
        } else {
            setProducts([]); // Clear products if no category is selected
        }
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
                        <SushiCard key={product._id} product={product}></SushiCard>
                    ))
                ) : (
                    <p className='no-product-message'>No products found for this category.</p>
                )}
            </div>
        </div>
    )
}

export default MenuDisplay