import React from 'react'
import './menudisplay.css'
import SushiCard from '../sushicard/SushiCard'

const MenuDisplay = () => {
    return (
        <div className='menudisplay'>
            <h1 className='title'>Our Menu</h1>
            <hr />
            <div className='card-wrapper'>
                <SushiCard />
                <SushiCard />
                <SushiCard />
                <SushiCard />
                <SushiCard />
                <SushiCard />
            </div>
        </div>
    )
}

export default MenuDisplay