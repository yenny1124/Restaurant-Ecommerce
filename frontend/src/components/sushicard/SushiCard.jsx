import React from 'react'
import './sushicard.css';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../pages/CartContext';

const SushiCard = ({ product }) => {
    let navigate = useNavigate();
    const { addToCart } = useCart();

    const navigateToProductDetail = () => {
        navigate(`/product/${product._id}`);
    };

    const handleAddToCart = (e) => {
        e.stopPropagation(); // Prevent navigate when clicking "Add to Cart"
        // Explicitly set quantity to 1 when adding to cart
        addToCart({ ...product, quantity: 1 });
    };



    return (
        <div className='sushicard-container' onClick={navigateToProductDetail}>
            <img className='sushi-img' src={product.img} alt={product.name} />
            <h3 className='sushi-title'>{product.name}</h3>
            <p className='sushi-price'>${product.prices}</p>
            <p className='sushi-desc'>{product.desc}</p>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
        </div>

    )
}

export default SushiCard