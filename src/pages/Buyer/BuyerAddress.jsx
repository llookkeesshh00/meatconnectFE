import React, { useState, useEffect } from 'react';

const apiUrl = import.meta.env.VITE_API_URL;

const BuyerAddress = () => {
  const [addresses, setAddresses] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const getAddresses = async () => {
      try {
        const response = await fetch(`${apiUrl}/delivery/getAdress`, {
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
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };

    getAddresses();
  }, []);

  const handleEdit = (id) => {
    console.log("Edit Address ID:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete Address ID:", id);
  };

  return (
    <div className="p-6">
      {isLoading ? (
        <div className="fixed inset-0 flex flex-col gap-6 justify-center items-center bg-white bg-opacity-75">
          <div className="font-bold text-xl">Please wait</div>
          <video autoPlay loop muted className="w-36 h-36 opacity-60 mb-6">
            <source src="assets/loading.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <>
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
                    <td className="p-4">
                      <button
                        className="px-4 py-2 mr-2 bg-gray-200 shadow-lg text-gray-800 rounded hover:bg-blue-600 hover:text-white hover:duration-500 hover:transition-all transition-colors"
                        onClick={() => handleEdit(address._id)}
                      >
                        Edit
                      </button>
                      <button
                        className="px-4 py-2 mr-2 bg-gray-200 text-gray-800 shadow-lg rounded hover:bg-red-500 hover:text-white hover:duration-500 hover:transition-all transition-colors"
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
        </>
      )}
    </div>
  );
};

export default BuyerAddress;
