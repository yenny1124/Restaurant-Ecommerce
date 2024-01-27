import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
export const Navbar = () => {
    const [menu, setMenu] = useState("home")
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img className='logo' src='../logo.png' />
                <p>Rolls & Rolls</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu("home") }}><Link style={{ textDecoration: 'none', color: 'white' }} to='/'>Home</Link>{menu === "home" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("menu") }}><Link style={{ textDecoration: 'none', color: 'white' }} to='/menu'>Menu</Link>{menu === "menu" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("about") }}><Link style={{ textDecoration: 'none', color: 'white' }} to='/about'>About</Link>{menu === "about" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("booktable") }}><Link style={{ textDecoration: 'none', color: 'white' }} to='/booktable'>Book Table</Link>{menu === "booktable" ? <hr /> : <></>}</li>
            </ul>
            <div className='nav-order'>
                <Link to='/orderonline'><button>Order Online</button></Link>
                <Link to='/cart'><img className='cart' src='/cart.png' /></Link>
                <div className='nav-cart-count'>0</div>
            </div>

        </div>
    )
}
