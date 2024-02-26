import React from 'react'
import './shoppingcart.css';
import { useCart } from '../../pages/CartContext';


const ShoppingCart = () => {
    const { cartItems } = useCart();
    // Correctly calculate the total price of items in the cart
    const calculateTotal = () => cartItems.reduce((acc, item) => {
        // Ensure 'item.prices' is a number and item.quantity is accounted for
        return acc + (item.prices * (item.quantity || 1));
    }, 0);

    return (
        <div className='shoppingcart-container'>
            <div className='left'>
                <table className='cart-table'>
                    <thead>
                        <tr className='trTitle'>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Options</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item, index) => (
                            <tr key={index} className='tr'>
                                <td>
                                    <div className='imgContainer'>
                                        <img className="cart-image"
                                            src={item.img} // Ensure your cart items have a valid img property
                                            alt={item.name}
                                        />
                                    </div>
                                </td>
                                <td>
                                    <span className='price'>
                                        ${item.prices}
                                    </span>
                                </td>
                                <td>
                                    {/* Display options if applicable */}
                                    <span className='options'>Options Placeholder</span>
                                </td>
                                <td>
                                    <span className='price'>${item.prices}</span>
                                </td>
                                <td>
                                    <span className='quantity'>{item.quantity}</span>
                                </td>
                                <td>
                                    <span className='total'>
                                        ${(item.prices * (item.quantity || 1))}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='right'>
                <div className='right-wrapper'>
                    <h2 className='title'>CART TOTAL</h2>
                    <div className='totalText'>
                        <b className='totalTextTitle'>Subtotal:</b>${calculateTotal()}
                    </div>
                    {/* Include additional charges or discounts as needed */}
                    <div className='totalText'>
                        <b className='totalTextTitle'>Total:</b>${calculateTotal()}
                    </div>
                    <button className='button'>CHECKOUT NOW!</button>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart