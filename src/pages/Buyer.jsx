import React from 'react';
import { toast } from 'react-toastify';
const Buyer = () => {
  return (
    <div className="container bg-gray-100 mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Buyer's Role</h2>
      <p className="text-lg text-gray-700 mb-8">
        In this platform, buyers, primarily restaurants and hotels, play a crucial role in sourcing quality meat products efficiently. Here are their key responsibilities:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Order Placement and Tracking</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <i className="fas fa-check text-blue-500 mr-2"></i>
              Placing Orders: Buyers can easily place orders for various meat products directly through the platform's user-friendly interface.
            </li>
            <li>
              <i className="fas fa-check text-blue-500 mr-2"></i>
              Order Tracking: They can monitor the status of their orders in real-time, from order confirmation to delivery.
            </li>
          </ul>
          <img src="/assets/image7.jpg" alt="Order Placement and Tracking" className="w-full  h-[40vh] rounded-lg mt-4" />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Contract Management</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <i className="fas fa-check text-blue-500 mr-2"></i>
              Contract Storage: Buyers can securely store and access their contracts with different suppliers within the platform.
            </li>
            <li>
              <i className="fas fa-check text-blue-500 mr-2"></i>
              Contract Review: They can easily review contract details, terms, and conditions as needed.
            </li>
          </ul>
          <img src="/assets/image8.jpg" alt="Contract Management" className="w-full h-[40vh] rounded-lg mt-4" />
        </div>
      </div>

      {/* ... rest of the content with similar styling */}

      <div className='shadow-lg   p-8 '>
        <h3 className="text-2xl font-bold text-gray-800  ">Additional Benefits for Buyers</h3>
        <ul className="list-disc list-inside text-gray-700 px-4 ">
          <li>Time-Saving</li>
          <li>Cost Reduction</li>
          <li>Improved Quality</li>
          <li>Enhanced Relationships</li>
        </ul>
      </div>
    </div>
  );
};

export default Buyer;