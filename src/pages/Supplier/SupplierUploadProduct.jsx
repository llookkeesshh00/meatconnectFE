import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const apiUrl = import.meta.env.VITE_API_URL;

const SupplierUploadProduct = () => {
  const navigate = useNavigate();
  const [Message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const chickenOptions = [
    'whole breast', 'breast with ribs', 'boneless breast', 'tenderloin', 'whole leg', 'boneless thigh',
    'thigh', 'drumstick', 'wing drumette', 'whole wing', 'back', 'paws', 'gizzard', 'liver', 'heart'
  ];

  const muttonOptions = [
    'leg', 'loin', 'rib', 'shoulder', 'breast', 'shank', 'neck', 'liver', 'heart', 'kidneys'
  ];

  const fishOptions = [
    'salmon', 'apollo fish', 'tuna', 'cod', 'mackerel', 'sardines', 'swordfish', 'shrimp', 'prawns',
    'crabs', 'lobster', 'squid', 'octopus', 'cuttlefish', 'crawfish'
  ];

  const [formData, setFormData] = useState({
    productCategory: '',
    productName: '',
    price: '',
  });

  // Dynamically get product name options based on category
  const getProductOptions = () => {
    switch (formData.productCategory) {
      case 'chicken':
        return chickenOptions;
      case 'mutton':
        return muttonOptions;
      case 'fish':
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
    setIsLoading(true);
    const token = localStorage.getItem('token');

    try {
      let res = await fetch(`${apiUrl}/supplier/uploadProduct`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      let data = await res.json();

      if (res.ok) {
        setMessage('Product uploaded successfully!');
        toast.success('Product uploaded successfully');
        navigate('/supplierproducts')
        setFormData({
          productCategory: '',
          productName: '',
          price: ''
        });
      } else {
        toast.error(data.error || 'Failed to upload product.');
      }
    } catch (error) {
      console.error('Error uploading product:', error);
      setMessage('An error occurred while uploading the product.');
      toast.error('An error occurred while uploading the product.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-000">
      {isLoading ? (
        <div className="fixed inset-0 flex flex-col gap-6 justify-center items-center bg-white bg-opacity-75">
          <div className="font-bold text-xl">Please wait</div>
          <video autoPlay loop muted className="w-36 h-36 opacity-60 mb-6">
            <source src="assets/loading.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-lg w-[73vw]">
          <h2 className="text-2xl font-semibold mb-6">Upload Product Requirements</h2>
          <form onSubmit={handleSubmit}>
            {/* Product Category */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productCategory">
                Product Category
              </label>
              <select
                id="productCategory"
                name="productCategory"
                value={formData.productCategory}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                required
              >
                <option value="">Select a category</option>
                <option value="chicken">Chicken</option>
                <option value="mutton">Mutton</option>
                <option value="fish">Fish</option>
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

            {/* Price */}
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
              className="bg-gray-300 text-gray-700 hover:bg-blue-600 transition-all duration-700 hover:text-white font-semibold px-4 py-2 rounded-md"
            >
              Upload Product
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SupplierUploadProduct;
