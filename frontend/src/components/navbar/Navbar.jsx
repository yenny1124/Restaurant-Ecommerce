import React, { useState } from 'react'
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const [menu, setMenu] = useState("home")

    let navigate = useNavigate();
    const navigateToMenuPage = () => {
        navigate(`/menu`);
    };

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <Link to='/'><img className='logo' src='../logo.png' /></Link>
                <p>Rolls & Rolls</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu("home") }}><Link style={{ textDecoration: 'none', color: 'white' }} to='/'>Home</Link>{menu === "home" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("menu") }}><Link style={{ textDecoration: 'none', color: 'white' }} to='/menu'>Menu</Link>{menu === "menu" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("about") }}><Link style={{ textDecoration: 'none', color: 'white' }} to='/about'>About</Link>{menu === "about" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("booktable") }}><Link style={{ textDecoration: 'none', color: 'white' }} to='/booktable'>Book Table</Link>{menu === "booktable" ? <hr /> : <></>}</li>
            </ul>
            <div className='nav-order'>
                <button onClick={navigateToMenuPage}>Order Online</button>
                <Link to='/cart'><i class="fa fa-shopping-cart" /></Link>
                <div className='nav-cart-count'>0</div>
                <Link to='/'><i class="fa fa-phone" aria-hidden="true"></i></Link>
            </div>

        </div>
    )
}
