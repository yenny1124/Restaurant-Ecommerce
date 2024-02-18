import React from 'react'
import './order[id].css';
import styles from './order[id].css'; // Update the path to your CSS file

const Order = () => {
    const status = 0;

    const statusClass = (index) => {
        if (index - status < 1) return styles.done;
        if (index - status === 1) return styles.inProgress;
        if (index - status > 1) return styles.undone;
    };
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
                    <div className={statusClass(0)}>
                        <i class="fa fa-credit-card" aria-hidden="true"></i>
                        {/* <img src="/img/paid.png" width={30} height={30} alt="" /> */}
                        <span>Payment</span>
                        <div className='checkedIcon'>
                            <i class="fa fa-check-square-o" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className={statusClass(1)}>
                        <i class="fa fa-credit-card" aria-hidden="true"></i>
                        {/* <img src="/img/paid.png" width={30} height={30} alt="" /> */}
                        <span>Preparing</span>
                        <div className='checkedIcon'>
                            <i class="fa fa-check-square-o" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className={statusClass(2)}>
                        <i class="fa fa-credit-card" aria-hidden="true"></i>
                        {/* <img src="/img/paid.png" width={30} height={30} alt="" /> */}
                        <span>Ready to PickUp</span>
                        <div className='checkedIcon'>
                            <i class="fa fa-check-square-o" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className={statusClass(3)}>
                        <i class="fa fa-credit-card" aria-hidden="true"></i>
                        {/* <img src="/img/paid.png" width={30} height={30} alt="" /> */}
                        <span>Picked Up</span>
                        <div className='checkedIcon'>
                            <i class="fa fa-check-square-o" aria-hidden="true"></i>
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