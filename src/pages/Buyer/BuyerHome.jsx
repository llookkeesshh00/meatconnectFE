import React, { useState, useEffect } from 'react';

const SupplierOrders = () => {
  // Mock data for orders, this would typically come from a backend API call
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulate an API call to fetch orders
    const fetchedOrders = [
      {
        id: 1,
        productName: 'Chicken Breast',
        description: 'Fresh chicken breasts from local farms',
        price: 100,
        negotiable: true,
        availableQuantity: 50,
        createdAt: '2024-09-01',
      },
      {
        id: 2,
        productName: 'Apollo Fish',
        description: 'High-quality boneless fish',
        price: 250,
        negotiable: false,
        availableQuantity: 30,
        createdAt: '2024-09-05',
      },
    ];
    setOrders(fetchedOrders);
  }, []);

  // Handle negotiation click
  const handleNegotiate = (orderId) => {
    console.log(`Starting negotiation for order ID: ${orderId}`);
    // You can add logic here to open a negotiation modal or redirect to a negotiation page.
  };

  return (
    <div className="min-h-screen  flex flex-col items-center m-3">
      <h1 className="text-3xl font-semibold mb-6">Available Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order.id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
              <img
                src={`/assets/uploadImages/${order.productName.toLowerCase().replace(/\s/g, '')}.jpeg`}
                alt={order.productName}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 flex-1">
                <h2 className="text-lg font-semibold">{order.productName}</h2>
                <p className="text-gray-600">{order.description}</p>
                <p className="text-xl font-bold">{`Rs ${order.price}`}</p>
                <p className="text-sm text-gray-500">Available: {order.availableQuantity}</p>
                <p className="text-sm text-gray-500">Uploaded on: {order.createdAt}</p>
              </div>
              <div className="p-4">
                {order.negotiable ? (
                  <button
                    className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 w-full"
                    onClick={() => handleNegotiate(order.id)}
                  >
                    Start Negotiation
                  </button>
                ) : (
                  <span className="text-gray-500">Non-negotiable</span>
                )}
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

export default SupplierOrders;
