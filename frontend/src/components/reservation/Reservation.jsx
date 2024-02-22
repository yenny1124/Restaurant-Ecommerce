import React from 'react'
import './reservation.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Link } from 'react-router-dom';

const mapContainerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: -34.397, // Example latitude
    lng: 150.644, // Example longitude
};

const Reservation = () => {
    return (
        <div className="book_section">
            <div className="book-container">
                <div className="book-heading_container">
                    <h2>Book A Table</h2>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="bookform_container">
                            <form action="">
                                <div>
                                    <input type="text" className="bookform-control" placeholder="Your Name" />
                                </div>
                                <div>
                                    <input type="text" className="bookform-control" placeholder="Phone Number" />
                                </div>
                                <div>
                                    <input type="email" className="bookform-control" placeholder=" Your Email (*optional)" />
                                </div>
                                <div>
                                    <input type="number" className="bookform-control" min="1" placeholder="Number of People" />
                                </div>
                                <div>
                                    <input type="date" className="bookform-control" />
                                </div>
                                <div>
                                    <input type="time" className="bookform-control" />
                                </div>
                                <div className="btn_box">
                                    <Link to='/bookingdone'><button className='book-btn'>Book Now</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col">
                        <div className="map_container ">
                            <LoadScript googleMapsApiKey="AIzaSyAXegRY1TvTeZ1w-CFo2ZKUOrn9xaVmh5M">
                                <GoogleMap
                                    mapContainerStyle={mapContainerStyle}
                                    center={center}
                                    zoom={10}
                                >
                                    {/* You can place markers or other components here */}
                                </GoogleMap>
                            </LoadScript>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reservation