import React from 'react'
import './shoppingcart.css';

const ShoppingCart = () => {
    return (
        <div className='shoppingcart-container'>
            <div className='left'>
                <table className='cart-table'>
                    <tr className='trTitle'>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr className='tr'>
                        <td>
                            <div className='imgContainer'>
                                <img className="cart-image"
                                    src='../caliroll.png'
                                    layout="fill"
                                    objectFit="cover"
                                    alt=""
                                />
                            </div>
                        </td>
                        <td>
                            <span className='name'>California Roll</span>
                        </td>
                        <td>
                            <span className='no'>
                                No Cucumber
                            </span>
                        </td>
                        <td>
                            <span className='price'>$19.90</span>
                        </td>
                        <td>
                            <span className='quantity'>2</span>
                        </td>
                        <td>
                            <span className='total'>$39.80</span>
                        </td>
                    </tr>
                    <tr className='tr'>
                        <td>
                            <div className='imgContainer'>
                                <img className="cart-image"
                                    src='../caliroll.png'
                                    layout="fill"
                                    objectFit="cover"
                                    alt=""
                                />
                            </div>
                        </td>
                        <td>
                            <span className='name'>California Roll</span>
                        </td>
                        <td>
                            <span className='no'>
                                No Cucumber
                            </span>
                        </td>
                        <td>
                            <span className='price'>$19.90</span>
                        </td>
                        <td>
                            <span className='quantity'>2</span>
                        </td>
                        <td>
                            <span className='total'>$39.80</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className='right'>
                <div className='right-wrapper'>
                    <h2 className='title'>CART TOTAL</h2>
                    <div className='totalText'>
                        <b className='totalTextTitle'>Subtotal:</b>$79.60
                    </div>
                    <div className='totalText'>
                        <b className='totalTextTitle'>Discount:</b>$0.00
                    </div>
                    <div className='totalText'>
                        <b className='totalTextTitle'>Total:</b>$79.60
                    </div>
                    <button className='button'>CHECKOUT NOW!</button>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart