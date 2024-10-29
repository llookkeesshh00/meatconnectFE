import React, { useState } from 'react';

const BuyerChatHome = () => {
  // Dummy data for suppliers previously chatted with
  const [suppliers, setSuppliers] = useState([
    { id: 1, name: 'Supplier A', lastMessage: 'Looking forward to your next order!' },
    { id: 2, name: 'Supplier B', lastMessage: 'Thanks for the inquiry.' },
    { id: 3, name: 'Supplier C', lastMessage: 'Your order is ready for shipment.' },
    { id: 4, name: 'Supplier D', lastMessage: 'Let me know if you need more details.' },
  ]);

  // Handle click to open chat with a supplier
  const openChat = (supplierId) => {
    console.log(`Opening chat with supplier ID: ${supplierId}`);
    // Here, you can navigate to the specific chat page for the supplier
  };

  return (
    <div className="min-h-screen flex flex-col items-center w-full p-6">
      <h1 className="text-3xl font-bold mb-6">Chat with Suppliers</h1>
      <div className="w-full ">
        {suppliers.length > 0 ? (
          suppliers.map((supplier) => (
            <div
              key={supplier.id}
              className="bg-white shadow-md rounded-lg p-4 mb-4 cursor-pointer hover:bg-gray-100"
              onClick={() => openChat(supplier.id)}
            >
              <h2 className="text-xl font-semibold">{supplier.name}</h2>
              <p className="text-gray-600">{supplier.lastMessage}</p>
            </div>
          ))
        ) : (
          <p>No previous chats with suppliers.</p>
        )}
      </div>
    </div>
  );
};

export default BuyerChatHome;
