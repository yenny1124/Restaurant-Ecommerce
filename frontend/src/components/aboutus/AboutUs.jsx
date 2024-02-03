import React from 'react'
import './aboutus.css';

const AboutUs = () => {
    return (
        <div className="about-container">
            <div className="text-content">
                <h2>About Us</h2>
                <p>Welcome to [Your Restaurant's Name], a place where traditional flavors meet modern dining...</p>
                <br />
                <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                    in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                    are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                    the middle of text. All
                </p>
            </div>
            <div className="image-content">
                <img src='/aboutus.png' alt="Sushi Restaurant" />
            </div>
        </div>

    )
}

export default AboutUs