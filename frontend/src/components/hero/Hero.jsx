import React from 'react'
import './hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2> Pure Freshness Served</h2>
                <div>
                    <div className='hand-sushi-icon'>
                        <em><p>"Experience
                            <img className='sushi' src="/sushi.png" alt="" /></p>
                            <p>New Artistry of Sushi,</p>
                            <p>New Journey of Flavors"</p></em>
                    </div>
                </div>
                <div className='hero-ordernow-btn'>
                    <div>Order Now</div>
                </div>
            </div>
            <div className='hero-right'>
                <img className='sushiplatter' src="/sushiplatter.png" alt="" />
            </div>
        </div >
    )
}

export default Hero