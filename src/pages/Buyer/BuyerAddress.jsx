import React, { useState, useEffect } from 'react';

const BuyerAddress = () => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const getAddresses = async () => {
      try {
        const response = await fetch('http://localhost:3000/delivery/getAdress', {
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
        setAddresses(data.deliveryDetails);
        console.log(data.deliveryDetails);
      } catch (error) {
        console.error("Error fetching addresses:", error);
      }
    };

    getAddresses();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Buyer Addresses</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Area</th>
              <th className="p-4 text-left">City</th>
              <th className="p-4 text-left">State</th>
              <th className="p-4 text-left">Pincode</th>
              <th className="p-4 text-left">Buyer ID</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {addresses.map((address) => (
              <tr key={address._id} className="border-b hover:bg-gray-50">
                <td className="p-4">{address.name}</td>
                <td className="p-4">{address.area}</td>
                <td className="p-4">{address.city}</td>
                <td className="p-4">{address.state}</td>
                <td className="p-4">{address.pincode}</td>
                <td className="p-4">{address.buyer}</td>
                <td className="p-4">
                  <button
                    className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    onClick={() => handleEdit(address._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                    onClick={() => handleDelete(address._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );


  const handleEdit = (id) => {
    console.log("Edit Address ID:", id);
    
  };

  const handleDelete = (id) => {
    console.log("Delete Address ID:", id);
   
  };
};

export default BuyerAddress;
