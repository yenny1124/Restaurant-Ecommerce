import React from 'react'
import './hero.css'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    let navigate = useNavigate();
    const navigateToMenuPage = () => {
        navigate(`/menu`);
    };

    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2> Pure Freshness Served</h2>
                <img className='sushi' src="/sushi.png" alt="sushi" />
                <div>
                    <div className='hand-sushi-icon'>
                        <em><p>"Experience</p>
                            <p>New Artistry of Sushi,</p>
                            <p>New Journey of Flavors"</p></em>
                    </div>
                </div>
                <div className='hero-ordernow'>
                    <button onClick={navigateToMenuPage}>Order Now</button>
                </div>
            </div>
            <div className='hero-right'>
                <img className='sushiplatter' src="/sushiplatter.png" alt="sishiplatter" />
            </div>
        </div >
    )
}

export default Hero