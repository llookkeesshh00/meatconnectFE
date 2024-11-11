import React, { useState, useEffect } from 'react';
import prod_img from '../../assets/source_img';
import { toast } from 'react-toastify';
const BuyerTracking = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        let res = await fetch('http://localhost:3000/orders/getOrders', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`, // Attach the token in Authorization header
          },
        });
        let data = await res.json();

        if (!data.ok) {
          // Assuming data has an `error` field for error details
          toast.error('Difficulty in fetching orders: ' + data.error);
        } else {
          console.log(data.orders)
          setOrders(data.orders);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
        toast.error('An error occurred while fetching orders'+data.message);
      }
    };

    getOrders();
  }, []);

  return (
    <div className="p-4 bg-gray-0 min-h-screen ">
      <h1 className="text-2xl font-bold mb-4">Order History</h1>
      <p className="text-gray-600 mb-6">All past order details at one place</p>

      <div className="space-y-4">
  {orders.map((order) => (
    <div key={order._id} className="flex justify-between relative bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-4">
      {/* Status marker at the top left */}
      <div className={`absolute top-[10px] left-[20px] px-3 py-1 rounded-full text-sm font-semibold 
        ${order.status === 'confirmed' ? 'bg-yellow-200 text-yellow-800' : 'bg-green-200 text-green-800'}`}>
        {order.status === 'confirmed' ? 'In Delivery' : 'Complete'}
      </div>

      {/* Content section aligned to the left */}
      <div className="flex pr-6 flex-col items-start">
        <p className="text-lg  mb-4 flex mt-4 ">Order ID: <span className="font-semibold">{order._id}</span></p>
        <p className="text-md  mb-1 flex gap-10">Product Name: <span className="font-semibold">{order.product_id.productName}</span></p>
        <p className="text-md  mb-1 flex gap-4">Product Category: <span className="font-semibold">{order.product_id.productCategory}</span></p>
        <p className="text-md  mb-1 flex gap-20">Quantity: <span className="font-semibold">{order.quantity}</span></p>
        <p className="text-md  mb-1 flex gap-12">Price per KG: <span className="font-semibold">${order.product_id.price}</span></p>
        <p className="text-md  mb-1 flex gap-12">Total Amount: <span className="font-semibold">${order.product_id.price * order.quantity}</span></p>
        <p className="text-md  mb-1 flex gap-16">Order Date: <span className="font-semibold">{new Date(order.order_date).toLocaleDateString()}</span></p>

        {/* Buttons at the bottom left */}
        <div className="mt-4 flex space-x-4">
          <button className="bg-gray-100 text-gray-700 hover:bg-blue-600 transition-all duration-700 hover:text-white font-semibold px-4 py-2 rounded-md ">
            Track Order
          </button>
          <button className="bg-gray-100 text-gray-700 hover:bg-blue-600 transition-all duration-700 hover:text-white font-semibold px-4 py-2 rounded-md ">
            Delivery Details
          </button>
        </div>
      </div>

      <div className="flex-shrink-0 items-center justify-center ">
        <img src={prod_img[order.product_id.productCategory][order.product_id.productName]} alt={order.product_id.productName} className="w-48 h-48 object-cover rounded-md" />
      </div>
    </div>
  ))}
</div>



    </div>
  );
};

export default BuyerTracking;
