import React from 'react'
import './tablebookdone.css';
import { Link } from 'react-router-dom'

const TableBookDone = () => {
    return (
        <div className='tablebookdone'>
            <h1>Your Table has been successfully reserved!</h1>
            <Link to='/'><button className='return-home-btn'>Return to Home</button></Link>
        </div>
    )
}

export default TableBookDone