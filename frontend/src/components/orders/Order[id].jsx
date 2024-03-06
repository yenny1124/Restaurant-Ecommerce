import './order[id].css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Order = () => {
    const { orderId } = useParams();
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3004/api/get/order/${orderId}`); // Adjust the URL as needed
                if (!response.ok) throw new Error('Failed to fetch order details');
                const data = await response.json();
                setOrderDetails(data);
            } catch (error) {
                console.error('Error fetching order details:', error);
            }
        };

        fetchOrderDetails();
    }, [orderId]);

    if (!orderDetails) return <p>Loading order details...</p>;


    return (
        <div>
            <h1>Order Success</h1>
            {/* Display order details */}
            <p>Order ID: {orderDetails._id}</p>
            {/* Add more details you want to display */}
        </div>
    )
}

export default Order