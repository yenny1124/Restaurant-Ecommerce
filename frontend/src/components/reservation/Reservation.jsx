import React, { useState } from 'react'
import './reservation.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';

const mapContainerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: 47.62092382354214, // latitude
    lng: -122.19349256812744, // longitude
};


const Reservation = () => {

    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        numberOfPeople: '',
        reserveDateTime: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const reservationData = {
            name: formData.name,
            phoneNumber: formData.phoneNumber,
            email: formData.email,
            numberOfPeople: formData.numberOfPeople,
            reserveDateTime: formData.reserveDateTime,
        }

        try {
            const response = await fetch('http://localhost:3003/api/save/reservation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reservationData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit reservation');
            }

            const result = await response.json();
            console.log('Reservation submitted successfully', result);

            // Navigate to a success page or show a success message
            navigate(`/bookingdone`); // Adjust the route as needed
        } catch (error) {
            console.error('Reservation submission error:', error);
            // Optionally inform the user of the failure to submit the order
        }
    }


    return (
        <div className="book_section">
            <div className="book-container">
                <div className="book-heading_container">
                    <h2>Book A Table</h2>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="bookform_container">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    className="bookform-control"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    className="bookform-control"
                                    name="phoneNumber"
                                    placeholder="Phone Number"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="email"
                                    className="bookform-control"
                                    name="email"
                                    placeholder="Your Email (*optional)"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <input
                                    type="number"
                                    className="bookform-control"
                                    name="numberOfPeople"
                                    min="1"
                                    placeholder="Number of People"
                                    value={formData.numberOfPeople}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="datetime-local"
                                    className="reserveDateTime"
                                    name="reserveDateTime"
                                    value={formData.reserveDateTime}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="btn_box">
                                    <button type="submit" className='book-btn'>Book Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col">
                        <div className="map_container">
                            <LoadScript googleMapsApiKey="AIzaSyBEeVT_VLmj1FGeJwemUYxC9LO2POQ3IGM">
                                <GoogleMap
                                    mapContainerStyle={mapContainerStyle}
                                    center={center}
                                    zoom={18}
                                >
                                    <Marker position={center} />
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