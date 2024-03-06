import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { transform } from 'framer-motion'

const Footer = () => {
    return (
        <div className='footer'>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="footer-contacts">
                            <h4>
                                Contact Us
                            </h4>
                            <div class="footer-contacts-links" >
                                <a href="https://www.google.com/maps/dir/47.8574546,-122.2700132/rolls+and+rolls+plus+sushi+google+map/@47.7373183,-122.4203145,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x54906c8c5f96a9a5:0x6902e0c9eb452bae!2m2!1d-122.1934713!2d47.6208451?entry=ttu">
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                    <span>Location</span>
                                </a>
                                <a href="/">
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                    <Link to='/'><span>Call +01 425 454 4313</span></Link>
                                </a>
                                <a href="/">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                    <Link to='/'><span>powermaju87@gmail.com</span></Link>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="footer-details">
                            <a href="/" class="footer-logo" style={{ textDecoration: 'none' }}>
                                <p>Rolls & Rolls</p>
                            </a>
                            {/* <p>
                                Necessary, making this the first true generator on the Internet.
                                <br />It uses a dictionary of over 200 Latin words, combined with
                            </p> */}
                            <div class="footer-social">
                                <a href="/">
                                    <i class="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                                <a href="/">
                                    <i class="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className='hours-container'>
                            <h4>
                                Opening Hours
                            </h4>
                            <p>
                                Tuesday - Saturday
                            </p>
                            <p>
                                10:30 am - 9:00 pm
                            </p>
                            {/* <br /><br />
                            <p>
                                Sunday & Monday
                            </p>
                            <p>
                                Closed
                            </p> */}
                        </div>
                    </div>
                </div>
                <div class="footer-info">
                    <hr />
                    <p>
                        &copy; <span id="displayYear">2024</span> All Rights Reserved By
                        <a href="/"> Rolls and Rolls</a><br /><br />
                        &copy; <span id="displayYear">2024</span> Distributed By
                        <a href="https://yeeunjamiechoi.netlify.com" target="blank" rel="nonreferrer"> Yeeun Choi</a>
                    </p>

                </div>
            </div>
        </div >
    )
}

export default Footer