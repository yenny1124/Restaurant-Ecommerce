import React from 'react'
import './sushicard.css';
import { useNavigate } from 'react-router-dom';

const SushiCard = ({ product }) => {
    let navigate = useNavigate();

    const navigateToProductDetail = () => {
        navigate(`/product/${product._id}`);
    };

    return (
        <div className='sushicard-container' onClick={navigateToProductDetail}>
            <img className='sushi-img' src={product.img} alt={product.name} />
            <h3 className='sushi-title'>{product.name}</h3>
            <p className='sushi-price'>${product.prices}</p>
            <p className='sushi-desc'>{product.desc}</p>
        </div>
    )
}

export default SushiCard