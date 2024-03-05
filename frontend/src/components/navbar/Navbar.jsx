import React, { useState } from 'react'
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../pages/CartContext'; // Adjust the import path based on your file structure

export const Navbar = () => {
    const [menu, setMenu] = useState("home")
    let navigate = useNavigate();

    // Use the cart context
    const { cartItems } = useCart();

    // Calculate the total number of items in the cart
    const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

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
                <Link style={{ textDecoration: 'none', color: 'white' }} to='/cart'>
                    <i className="fa fa-shopping-cart" />
                    {/* Show cart count */}
                    {totalCartItems > 0 && <div className='nav-cart-count'>{totalCartItems}</div>}
                </Link>
                <Link to='/'><i className="fa fa-phone" aria-hidden="true"></i></Link>
            </div>

        </div>
    )
}
