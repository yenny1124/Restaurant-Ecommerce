import React from 'react'
import './order[id].css';

const Order = () => {
    return (
        <div className='order-container'>
            <div className='left'>
                <div className='row'>
                    <table className='order-table'>
                        <tr className='trTitle'>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Address</th>
                            <th>Total</th>
                        </tr>
                        <tr className='tr'>
                            <td>
                                <span className='id'>129837819237</span>
                            </td>
                            <td>
                                <span className='name'>John Doe</span>
                            </td>
                            <td>
                                <span className='address'>Elton st. 212-33 LA</span>
                            </td>
                            <td>
                                <span className='total'>$79.80</span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className='row'>
                    <div className='status'>
                        <i class="fa fa-credit-card" aria-hidden="true"></i>
                        {/* <img src="/img/paid.png" width={30} height={30} alt="" /> */}
                        <span>Payment</span>
                        <div className='checkedIcon'>
                            <img
                                className='checkedIcon'
                                src="/img/checked.png"
                                width={20}
                                height={20}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className='status'>
                        <i class="fa fa-credit-card" aria-hidden="true"></i>
                        {/* <img src="/img/paid.png" width={30} height={30} alt="" /> */}
                        <span>Payment</span>
                        <div className='checkedIcon'>
                            <img
                                className='checkedIcon'
                                src="/img/checked.png"
                                width={20}
                                height={20}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className='status'>
                        <i class="fa fa-credit-card" aria-hidden="true"></i>
                        {/* <img src="/img/paid.png" width={30} height={30} alt="" /> */}
                        <span>Payment</span>
                        <div className='checkedIcon'>
                            <img
                                className='checkedIcon'
                                src="/img/checked.png"
                                width={20}
                                height={20}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className='status'>
                        <i class="fa fa-credit-card" aria-hidden="true"></i>
                        {/* <img src="/img/paid.png" width={30} height={30} alt="" /> */}
                        <span>Payment</span>
                        <div className='checkedIcon'>
                            <img
                                className='checkedIcon'
                                src="/img/checked.png"
                                width={20}
                                height={20}
                                alt=""
                            />
                        </div>
                    </div>
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
                        <button disabled className='button'>PAID</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order