import React from 'react';

const BuyerTracking = () => {
  // Example orders data
  const orders = [
    {
        id: '053475870',
        amount: '₹901.55',
        placedOn: '12 May, 2024',
        paymentType: 'Wallet, Prepaid',
        status: 'Ondelivery', // Make sure the spelling is consistent
      },
    {
      id: '053854281',
      amount: '₹1945.60',
      placedOn: '7 Aug, 2024',
      paymentType: 'Wallet, Prepaid',
      status: 'Complete',
    }
    
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Order History</h1>
      <p className="text-gray-600 mb-6">All past order details at one place</p>

      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold 
                ${order.status === 'Complete' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                {order.status === 'Complete' ? 'Complete' : 'On Delivery'}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">Order Id</p>
              <p className="text-lg font-semibold">{order.id}</p>
            </div>
            <div className="flex justify-between mt-4">
              <p className="text-sm text-gray-500">{order.paymentType}</p>
              <p className="text-lg font-semibold">{order.amount}</p>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Order placed on <span className="font-semibold">{order.placedOn}</span>
            </p>
            <div className="flex space-x-4 mt-6">
              <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700">
                {order.status === "Complete" ? "Reorder Now" : "Track Delivery"}
              </button>
              <button className="bg-red-100 text-red-600 font-semibold px-4 py-2 rounded-md hover:bg-red-200">
                Order Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyerTracking;
