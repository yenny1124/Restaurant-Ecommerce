import React, { useState } from 'react'
import './navbar.css'
export const Navbar = () => {
    const [menu, setMenu] = useState("home")
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img className='logo' src='../logo.png' />
                <p>Rolls & Rolls</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu("home") }}>Home{menu === "home" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("menu") }}>Menu{menu === "menu" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("about") }}>About{menu === "about" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("booktable") }}>Book Table{menu === "booktable" ? <hr /> : <></>}</li>
            </ul>
            <div className='nav-order'>
                <button>Order Online</button>
                <img className='cart' src='/cart.png' />
                <div className='nav-cart-count'>0</div>
            </div>

        </div>
    )
}
