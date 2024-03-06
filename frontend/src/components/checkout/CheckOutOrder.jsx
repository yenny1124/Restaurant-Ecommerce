import './checkoutorder.css'
import React, { useState, useEffect } from 'react'; // Correct import for useState
import { useCart } from '../../pages/CartContext'; // Import custom hook from CartContext
import { useNavigate } from 'react-router-dom';

const CheckOutOrder = () => {
    // Retrieve the total from localStorage
    const storedTotal = localStorage.getItem('cartTotal');
    const total = storedTotal ? parseFloat(storedTotal) : 0; // Parse the total back into a number
    const { cartItems, clearCart } = useCart();
    const [formData, setFormData] = useState({
        name: '',
        billingAddress: '', // Added this field to your form data state
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        pickUpDateTime: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        // Optional: Check if cartItems is empty and redirect or inform user
    }, [cartItems]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const orderData = {
            customerName: formData.name,
            billingAddress: formData.billingAddress,
            cardNumber: formData.cardNumber,
            expiryDate: formData.expiryDate,
            cvv: formData.cvv,
            pickUpDateTime: formData.pickUpDateTime,
            items: cartItems.map(({ _id: productId, quantity, additionalDetails }) => ({
                productId,
                quantity,
                additionalDetails
            })),
            total: total // Include the total calculated from the cart
        };

        try {
            const response = await fetch('https://restaurant-ecommerce.onrender.com/api/save/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit order');
            }

            const result = await response.json();
            console.log('Order submitted successfully', result);
            // Optionally clear the cart after successful order submission
            clearCart();
            // Navigate to a success page or show a success message
            navigate(`/order/${result._id}`); // Adjust the route as needed
        } catch (error) {
            console.error('Order submission error:', error);
            // Optionally inform the user of the failure to submit the order
        }
    };

    return (
        <div className="checkout-container">
            <form onSubmit={handleSubmit}>
                <div className='left'>
                    <table className='checkout-table'>
                        <thead>
                            <tr className='trTitle'>
                                <th>Name</th>
                                <th>Billing Address</th>
                                <th>Card Number</th>
                                <th>Expiry Date</th>
                                <th>CVV</th>
                                <th>PickUp Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name on Card"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="billingAddress"
                                        placeholder="Billing Address"
                                        value={formData.billingAddress}
                                        onChange={handleChange}
                                        required
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="cardNumber"
                                        placeholder="card Number"
                                        value={formData.cardNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="expiryDate"
                                        placeholder="Expiry Date (MM/YY)"
                                        value={formData.expiryDate}
                                        onChange={handleChange}
                                        required
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="cvv"
                                        placeholder="CVV"
                                        value={formData.cvv}
                                        onChange={handleChange}
                                        required
                                    />
                                </td>
                                <td>
                                    <input
                                        type="datetime-local"
                                        name="pickUpDateTime"
                                        value={formData.pickUpDateTime}
                                        onChange={handleChange}
                                        required
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='right'>
                    <div className='right-wrapper'>
                        <h3>Order Summary</h3>
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={index}>{item.name} - Quantity: {item.quantity} , Detail: {item.additionalDetails}</li>
                            ))}
                        </ul>
                        <p className='totalText'>Total: ${total}</p>
                    </div>
                    <button type="submit">Place Order</button>
                </div>
            </form>
        </div>
    )
}

export default CheckOutOrder;