import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SupplierUploadProduct = () => {
  const navigate = useNavigate();
 const [Message, setMessage] = useState('')
  const chickenOptions = [
    'Whole Breast', 'Breast with Ribs', 'Boneless Breast', 'Tenderloin', 'Whole Leg', 'Boneless Thigh',
    'Thigh', 'Drumstick', 'Wing Drumette', 'Whole Wing', 'Back', 'Paws', 'Gizzard', 'Liver', 'Heart'
  ];

  const muttonOptions = [
    'Leg', 'Loin', 'Rib', 'Shoulder', 'Breast', 'Shank', 'Neck', 'Liver', 'Heart', 'Kidneys'
  ];

  const fishOptions = ['Salmon',
    'apollofish', 'Tuna', 'Cod', 'Mackerel', 'Sardines', 'Swordfish', 'Shrimp', 'Prawns', 'Crabs', 'Lobster', 'Squid', 'Octopus', 'Cuttlefish', 'Crawfish'

  ];

  const [formData, setFormData] = useState({
    productCategory: '',
    productName: '',
    price: '',
  });

  // Dynamically get product name options based on category
  const getProductOptions = () => {
    switch (formData.productCategory) {
      case 'Chicken':
        return chickenOptions;
      case 'Mutton':
        return muttonOptions;
      case 'Fish':
        return fishOptions;
      default:
        return [];
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Get the token from localStorage
    const token = localStorage.getItem('token');

    try {
      let res = await fetch('http://localhost:3000/supplier/uploadProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Attach the token in Authorization header
        },
        body: JSON.stringify(formData),
      });

      let data = await res.json();

      if (res.ok) {
        setMessage('Product uploaded successfully!');
        alert('product uploaded sucessfully');
        setFormData({
          productCategory: '',
          productName: '',
          price: ''})
          
      } else {
        setMessage(data.error || 'Failed to upload product.');
      }
    } catch (error) {
      console.error('Error uploading product:', error);
      setMessage('An error occurred while uploading the product.');
    }
  };






  return (
    <div className="flex justify-center items-bcenter h-screen bg-gray-000 ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[73vw]">
        <h2 className="text-2xl font-semibold mb-6">Upload Product Requirements</h2>
        <form onSubmit={handleSubmit}>
          {/* Product Category */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productCategory">
              Product Category
            </label>
            <select
              id="productCategory" name="productCategory" value={formData.productCategory} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" required >
              <option value="">Select a category</option>
              <option value="Chicken">Chicken</option>
              <option value="Mutton">Mutton</option>
              <option value="Fish">Fish</option>
            </select>
          </div>

          {/* Product Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
              Product Name
            </label>
            <select
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              required
            >
              <option value="">Select a product</option>
              {getProductOptions().map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>




          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Upload Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default SupplierUploadProduct;
