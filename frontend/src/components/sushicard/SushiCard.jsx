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
        addToCart(product);
    };



    return (
        <div className='sushicard-container' onClick={navigateToProductDetail}>
            <img className='sushi-img' src={product.img} alt={product.name} />
            <h3 className='sushi-title'>{product.name}</h3>
            <p className='sushi-price'>${product.prices}</p>
            <p className='sushi-desc'>{product.desc}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>

    )
}

export default SushiCard