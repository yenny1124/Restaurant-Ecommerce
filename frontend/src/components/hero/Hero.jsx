import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2> Pure Freshness Served</h2>
                <img className='sushi' src="/sushi.png" alt="" />
                <div>
                    <div className='hand-sushi-icon'>
                        <em><p>"Experience</p>
                            <p>New Artistry of Sushi,</p>
                            <p>New Journey of Flavors"</p></em>
                    </div>
                </div>
                <div className='hero-ordernow'>
                    <Link to='/orderonline'><button>Order Now</button></Link>
                </div>
            </div>
            <div className='hero-right'>
                <img className='sushiplatter' src="/sushiplatter.png" alt="" />
            </div>
        </div >
    )
}

export default Hero