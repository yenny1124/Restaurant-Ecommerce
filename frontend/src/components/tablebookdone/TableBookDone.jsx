import React from 'react'
import './tablebookdone.css';
import { Link } from 'react-router-dom'

const TableBookDone = () => {
    return (
        <div className='tablebookdone'>
            <h1>Your Reservation has been successfully requested!</h1>
            <div className='message'>
                <p>We will sent you a text message when the reservation has been confirmed</p>
            </div>
            <Link to='/'><button className='return-home-btn'>Return to Home</button></Link>
        </div>
    )
}

export default TableBookDone