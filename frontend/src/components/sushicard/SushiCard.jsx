import React from 'react'
import './sushicard.css';

const SushiCard = () => {
    // const images = [
    //     "../caliroll.png",
    //     "../spicytunaroll.png",
    //     "../yellowtailroll.png",
    // ];

    return (
        <div className='sushicard-container'>
            <img className='sushi-img' src='../caliroll.png' />
            <h1 className='sushi-title'>California Roll</h1>
            <span className='sushi-price'>$8.75</span>
            <p className='sushi-desc'>
                Avacado, Crabmeat, Cucumber
            </p>
        </div>
    )
}

export default SushiCard