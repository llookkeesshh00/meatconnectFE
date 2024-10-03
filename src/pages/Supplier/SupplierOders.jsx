import React, { useState, useEffect } from 'react';

const SupplierOders = () => {
  // Mock data for orders, this would typically come from a backend API call
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulate an API call to fetch orders
    const fetchedOrders = [
      {
        id: 1,
        productName: 'Chickenbreast',
        description: 'Fresh chicken breasts from local farms',
        price: 100,
        negotiable: true,
        availableQuantity: 50,
        createdAt: '2024-09-01',
      },
      {
        id: 2,
        productName: 'apollofish',
        description: 'High-quality boneless fish',
        price: 250,
        negotiable: false,
        availableQuantity: 30,
        createdAt: '2024-09-05',
      },
    ];
    setOrders(fetchedOrders);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col  items-center ">
      <h1 className="text-3xl font-semibold mb-6">Your Orders</h1>
      <div className="w-3/4 flex justify-center">
        <table className="min-w-full bg-white shadow-md rounded-lg  overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr> 
              <th className="px-6 py-3 text-left text-sm font-medium">Product Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Description</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Price</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Negotiable</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Available Quantity</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Date Uploaded</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.id} className="border-t">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img src={`/assets/uploadImages/${order.productName.toLowerCase().replace(/\s/g, '')}.jpeg`} alt="" />{order.productName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{`Rs${order.price}`}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.negotiable ? 'Yes' : 'No'}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.availableQuantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.createdAt}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupplierOders;
