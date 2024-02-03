import React from 'react'
import './menudisplay.css'
import data_items from '../assets/data'

const MenuDisplay = () => {
    return (
        <div className='menudisplay'>
            <h1>Our Menu</h1>
            <hr />
            <div className='menu-items'>
                {data_items.map((item)=>{
                    return 
                })}
            </div>

        </div>
    )
}

export default MenuDisplay