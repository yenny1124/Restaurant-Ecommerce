import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src='../logo.png' />
                <p>Rolls & Rolls</p>
            </div>
            <ul className="footer-links">
                <li>About</li>
                <li>Contact</li>
                <li>Hours</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img className="insta_icon" src='../instagram_icon.png' alt="" />
                </div>
                <div className="footer-icons-container">
                    <img className='call_icon' src='../call.png' alt="" />
                </div>
                <div className="footer-icons-container">
                    <img className='map_icon' src='../googlemap.png' alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 All Right Reserved By Rolls & Rolls.</p>
            </div>
        </div>
    )
}

export default Footer