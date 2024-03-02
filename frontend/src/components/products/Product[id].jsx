import './product[id].css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../pages/CartContext';

const Product = () => {
    const { addToCart } = useCart();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    // Initialize the quantity state with 1 as a default value
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                // Adjust the URL to match your API endpoint for fetching a product by ID
                const response = await fetch(`http://localhost:3003/api/get/product/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]); // Re-fetch when `id` changes

    if (!product) {
        return <p>Loading...</p>; // Display loading state or any placeholder
    }

    const handleAddToCart = (e) => {
        e.stopPropagation(); // Prevent navigate when clicking "Add to Cart"
        // Add the product along with the selected quantity to the cart
        addToCart({ ...product, quantity });
    };

    // Update quantity state based on user input
    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value, 10) || 1);
    };

    return (
        <div className='product-container'>
            <div className='left'>
                <div className='product-img-container'>
                    {/* Ensure your API returns an accessible image URL */}
                    <img className='product-img' src={product.img} alt={product.name} />
                </div>
            </div>
            <div className='right'>
                <h1 className='sushi-title'>{product.name}</h1>
                <span className='price'>${product.prices}</span>
                <p className='desc'>{product.desc}</p>
                <h3 className='choose'>Choose options for ingredients</h3>
                <div className='ingredients'>
                    <div className='ingredients-option'>
                        <input
                            type="checkbox"
                            id="no"
                            name="no"
                            className='ingredients-option-checkbox'
                        />
                        <label htmlFor="avocado">No Avocado</label>
                    </div>
                    <div className='ingredients-option'>
                        <input
                            type="checkbox"
                            id="no"
                            name="no"
                            className='ingredients-option-checkbox'
                        />
                        <label htmlFor="crabmeat">No Crabmeat</label>
                    </div>
                    <div className='ingredients-option'>
                        <input
                            type="checkbox"
                            id="no"
                            name="no"
                            className='ingredients-option-checkbox'
                        />
                        <label className='label' htmlFor="cucumber">No Cucumber</label>
                    </div>
                </div>
                <div className='add-to-cart'>
                    <input
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        className='quantity'
                        min="1" // Ensure the quantity can't be less than 1
                    />
                    <button className='add-button' onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product