import React from 'react'
import './footer.css'
import { transform } from 'framer-motion'

const Footer = () => {
    return (
        <div className='footer'>
            <div class="container">
                <div class="row">
                    <div class="col-md-4 footer-col">
                        <div class="footer-contacts">
                            <h4>
                                Contact Us
                            </h4>
                            <div class="footer-contacts-links" >
                                <a href="">
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                    <span>Location</span>
                                </a>
                                <a href="">
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                    <span>Call +01 425 454 4313</span>
                                </a>
                                <a href="">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                    <span>powermaju87@gmail.com</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 footer-col">
                        <div class="footer-details">
                            <a href="" class="footer-logo" style={{ textDecoration: 'none' }}>
                                {/* <img src='../logo.png' /> */}
                                <p>Rolls & Rolls</p>
                            </a>
                            {/* <p>
                                Necessary, making this the first true generator on the Internet.
                                <br />It uses a dictionary of over 200 Latin words, combined with
                            </p> */}
                            <div class="footer-social">
                                <a href="">
                                    <i class="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                                <a href="">
                                    <i class="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 footer-col">
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
                        </div>
                    </div>
                </div>
                <div class="footer-info">
                    <hr />
                    <p>
                        &copy; <span id="displayYear">2024</span> All Rights Reserved By
                        <a href=""> Rolls and Rolls</a><br /><br />
                        &copy; <span id="displayYear">2024</span> Distributed By
                        <a href="https://yeeunjamiechoi.netlify.com" target="_blank"> Yeeun Choi</a>
                    </p>

                </div>
            </div>
        </div >
    )
}

export default Footer