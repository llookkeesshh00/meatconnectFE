import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Supplier = () => {
  const Navigate= useNavigate();
  return (
    <div className="container bg-gray-100 mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Supplier's Role</h2>
      <p className="text-lg text-gray-700 mb-8">
        In this platform, suppliers, primarily meat producers and distributors, play a crucial role in providing high-quality meat products to buyers. Here are their key responsibilities:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Product Listing and Management</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <i className="fas fa-check text-blue-500 mr-2"></i>
              Product Catalog: Suppliers can create and manage a comprehensive catalog of their meat products, including details like cuts, weights, and certifications.
            </li>
            <li>
              <i className="fas fa-check text-blue-500 mr-2"></i>
              Inventory Management: They can track their inventory levels and update product availability in real-time.
            </li>
          </ul>
          <img src="/assets/image1.jpg" alt="Product Listing and Management" className="w-full h-[40vh] rounded-lg mt-4" />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Order Fulfillment</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <i className="fas fa-check text-blue-500 mr-2"></i>
              Order Processing: Suppliers can efficiently process orders received from buyers, ensuring timely fulfillment.
            </li>
            <li>
              <i className="fas fa-check text-blue-500 mr-2"></i>
              Quality Control: They can implement rigorous quality control measures to guarantee the freshness and safety of their products.
            </li>
          </ul>
          <img src="/assets/image2.jpg" alt="Order Fulfillment" className=" rounded-lg w-[40vw] mx-auto h-[40vh] mt-4" />
        </div>
      </div>

      {/* ... rest of the content with similar styling */}

      <div className='shadow-lg p-4'>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Our Community</h3>
        <p className="text-lg text-gray-700 mb-8">
          Become a part of our growing community of suppliers. Together, we can revolutionize the meat supply chain.
        </p>
        <button  onClick={() => { toast.error('please sign up') }} className="bg-gray-300 text-gray-700 hover:bg-purple-600 mt-5 mb-5 transition-all duration-700 hover:text-white font-semibold px-4 py-2 rounded-md">
        Sign Up Now
      </button>
      </div>
     
    </div>
  );
};

export default Supplier;