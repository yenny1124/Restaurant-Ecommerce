import React from 'react'
import './sushicard.css';

const SushiCard = () => {
    return (
        <div className='sushicard-container'>
            <img className='sushi-img' src='../californiaroll.png' />
            <h1 className='sushi-title'>California Roll</h1>
            <span className='sushi-price'>$8.75</span>
            <p className='sushi-desc'>
                Avacado, Crabmeat, Cucumber
            </p>
        </div>
    )
}

export default SushiCard