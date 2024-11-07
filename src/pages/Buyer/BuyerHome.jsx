import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import prod_img from '../../assets/source_img';

const BuyerHome = () => {
  const [orders, setOrders] = useState([]);
  const [buyerorders,setBuyerorders]=useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const navigate = useNavigate();

  useEffect(() => {
   
   
    const fetchContractOrders = async ()=>{
      try {
        const response = await fetch('http://localhost:3000/buyer/getBuyerProdcuts', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }


        const data = await response.json();
        console.log(data.newarr);
        setBuyerorders(data.newarr);

      }
        catch (error) {
          console.error('Error fetching orders:', error);
        }

    }


    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:3000/buyer/getAllProducts', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
    fetchContractOrders();
  }, []);

  // Handle negotiation click
  const handleNegotiate = (productId, supplierId) => {
    console.log(`Starting negotiation for order ID: ${productId}  ${supplierId}`);
    navigate('/buyerdigitalcontract', { state: { productId, supplierId } });
  };

  // Filter orders based on search query
  const filteredOrders = orders.filter(order => {
    
    return !buyerorders.includes(order._id) && (
      order.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.productCategory.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  return (
    <div className="flex flex-col items-center m-3">
      <div className='flex gap-26 justify-evenly w-full'>
        <div className="text-3xl font-semibold mb-6">Available Products</div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-4 px-4 py-2 border rounded w-[500px] hover:shadow-md hover:border-gray-200"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <div key={order._id} className="bg-white shadow-md border-2 border-gray-300 p-2 rounded-lg overflow-hidden flex flex-col">
              <img
                src={prod_img[order.productCategory][order.productName]}
                alt={order.productName}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 flex-1 gap-10">
                <h2 className="text-2xl font-semibold">{order.productCategory}</h2>
                <h2 className="text-md font-semibold">{order.productName}</h2>
                <p className="text-gray-600">{order.description}</p>
                <p className="text-xl font-bold">{`Rs ${order.price} /Kg`}</p>
                <p className="text-sm text-gray-500">From: {order.supplier.companyName}</p>
              </div>
              <div className="p-4">
                <button
                  className="bg-gray-100 text-gray-700 hover:bg-blue-600 transition-all duration-700 hover:text-white font-semibold px-4 py-2 rounded-md w-full"
                  onClick={() => handleNegotiate(order._id, order.supplier._id)}
                >
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
