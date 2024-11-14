import React, { useEffect, useState } from 'react';
import prod_img from '../../assets/source_img';
import { toast } from 'react-toastify';
import axios from 'axios';

const getMonthName = (month) => {
    const date = new Date(`${month}-01`);
    return date.toLocaleString('default', { month: 'long' });
};

const BuyerSummary = () => {
    const [summary, setSummary] = useState({});

    useEffect(() => {
        // Fetch summary data from the backend
        const fetchSummary = async () => {
            try {
                let response = await fetch('http://localhost:3000/summary/getsummary', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Attach the token in Authorization header
                    },
                });

                if (response.ok) {
                    let data = await response.json();
                    console.log(data);
                    setSummary(data.ordersByMonth || {}); // Set the fetched data to the state
                } else {
                    console.error("Failed to fetch summary");
                }
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchSummary();
    }, []);

    const handlePayment = async (amount) => {
        try {
            // Step 1: Create an order
            const orderResponse = await axios.post(
                'http://localhost:3000/summary/create-order',
                { amount },
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include token if needed
                    },
                }
            );
            const { id } = orderResponse.data;

            // Step 2: Redirect to PayPal for payment approval
            window.location.href = `https://www.sandbox.paypal.com/checkoutnow?token=${id}`;

            // Note: Code after this will not execute until the user returns from PayPal.
        } catch (error) {
            toast.error('An error occurred with the payment. Please try again.');
            console.error(error);
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-3xl font-semibold text-center mb-6">Monthly Payment Summary</h2>
            {Object.keys(summary).length > 0 ? (
                Object.entries(summary).map(([month, orders]) => {
                    // Get the full month name
                    const monthName = getMonthName(month);

                    // Calculate the total quantity and total price for each month
                    const totalQuantity = orders.reduce((sum, order) => sum + order.quantity, 0);
                    const totalPrice = orders.reduce((sum, order) => sum + (order.quantity * order.product_id.price), 0);

                    return (
                        <div key={month} className="mb-8">
                            <h3 className="text-2xl font-semibold mb-4">{`${month} (${monthName})`}</h3>
                            <table className="min-w-full bg-white table-auto border-collapse border border-gray-300 shadow-md">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="px-6 py-3 text-left text-gray-700 font-semibold text-sm">Product Image</th>
                                        <th className="px-6 py-3 text-left text-gray-700 font-semibold text-sm">Product Category</th>
                                        <th className="px-6 py-3 text-left text-gray-700 font-semibold text-sm">Product Name</th>
                                        <th className="px-6 py-3 text-left text-gray-700 font-semibold text-sm">Quantity</th>
                                        <th className="px-6 py-3 text-left text-gray-700 font-semibold text-sm">Total Price</th>
                                        <th className="px-6 py-3 text-left text-gray-700 font-semibold text-sm">Status</th>
                                        <th className="px-6 py-3 text-left text-gray-700 font-semibold text-sm">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order) => (
                                        <tr key={order._id} className="hover:bg-gray-50">
                                            <td className="px-6 py-3 text-gray-800 text-sm">
                                                <img
                                                    src={prod_img[order.product_id.productCategory][order.product_id.productName]}
                                                    alt=""
                                                    className="w-20 h-20 object-contain"
                                                />
                                            </td>
                                            <td className="px-6 py-3 text-gray-800 text-sm">{order.product_id.productCategory}</td>
                                            <td className="px-6 py-3 text-gray-800 text-sm">{order.product_id.productName}</td>
                                            <td className="px-6 py-3 text-gray-800 text-sm">{order.quantity}</td>
                                            <td className="px-6 py-3 text-gray-800 text-sm">{order.quantity * order.product_id.price}</td>
                                            <td className="px-6 py-3 text-gray-800 text-sm">
                                                <div className="flex items-center gap-3">
                                                    <div className="text-red-500">Pending</div>
                                                    <div className="bg-red-500 w-2 h-2 rounded-full border border-black"></div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-3">
                                                <button
                                                    className="bg-blue-600 text-white p-2 font-bold rounded-lg hover:bg-blue-700 transition-all duration-300"
                                                    onClick={() => handlePayment(order.quantity * order.product_id.price)}
                                                >
                                                    Make Payment
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="mt-4 flex justify-end text-lg">
                                <p>Total Quantity: {totalQuantity} | Total Price: {totalPrice}</p>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div className="text-center text-gray-500">Loading...</div>
            )}
        </div>
    );
};

export default BuyerSummary;
