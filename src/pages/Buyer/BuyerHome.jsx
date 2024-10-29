import React, { useState, useEffect } from 'react';
import BuyerNegotiationModal from './BuyerNegotiationModal ';
import { useNavigate } from 'react-router-dom';

const BuyerHome = () => {
  const [orders, setOrders] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:3000/buyer/getAllProducts', { // Adjust the endpoint as necessary
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include JWT token for authorization
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
        setOrders(data); // Assuming data is an array of orders
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  // Handle negotiation click
  const handleNegotiate = (productId,supplierId) => {
    console.log(`Starting negotiation for order ID: ${productId}  ${supplierId}`);
    navigate('/buyerdigitalcontract',{state:{productId,supplierId}});
  };

  return (
    
    <div className="min-h-screen flex flex-col items-center m-3">
      
 
      <h1 className="text-3xl font-semibold mb-6">Available Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order._id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
              {/* <img
                src={`/assets/uploadImages/${order.productName.toLowerCase().replace(/\s/g, '')}.jpeg`}
                alt={order.productName}
                className="h-48 w-full object-cover"
              /> */}
              <img src="\assets\uploadImages\chickenbreast.jpeg" alt="" />
              <div className="p-4 flex-1 gap-10">
                <h2 className="text-2xl font-semibold">{order.productCategory}</h2>
                <h2 className="text-md font-semibold">{order.productName}</h2>
                <p className="text-gray-600">{order.description}</p>
                <p className="text-xl font-bold">{`Rs ${order.price} /Kg`}</p>
                <p className="text-sm text-gray-500">From: {order.supplier.companyName}</p>
              </div>
              <div className="p-4">
                <button  className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 w-full" onClick={() => handleNegotiate(order._id,order.supplier._id)}>
                  Start Negotiation
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center">
            <p>No products found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyerHome;
