import React, { useState } from 'react';
import { toast } from 'react-toastify';

const apiUrl = import.meta.env.VITE_API_URL;

const Signup = ({ role, switchToLogin }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: role,
    name: '',
    mobile: '',
    companyName: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`${apiUrl}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Sign up successful!');
        switchToLogin();
      } else {
        toast.error(data.error || 'Sign up failed!');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 b rounded-md shadow-lg">
      {isLoading ? (
        <div className="fixed inset-0 flex flex-col gap-6 bg-white justify-center items-center bg-violet- 5">
          <div className="font-bold text-xl">Please wait</div>
          <video autoPlay loop muted className="w-36 h-36 opacity-60 mb-6">
            <source src="assets/loading.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">Sign up as a {role}</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="mb-4 p-2 w-full border"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="mb-4 p-2 w-full border"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="mb-4 p-2 w-full border"
              required
            />
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="Mobile Number"
              className="mb-4 p-2 w-full border"
              required
            />
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder={role === 'buyer' ? 'Buyer Company Name' : 'Supplier Business Name'}
              className="mb-4 p-2 w-full border"
              required
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Company Address"
              className="mb-4 p-2 w-full border"
              required
            />
            <button
              type="submit"
              className="bg-gray-300 text-gray-700 hover:bg-purple-600 mt-5 mb-5 transition-all duration-700 hover:text-white font-semibold px-4 py-2 rounded-md w-full"
            >
              Submit
            </button>
          </form>
          <div>
            <p>Already have an account?</p>
            <button
              onClick={switchToLogin}
              className="bg-gray-300 text-gray-700 hover:bg-purple-600 mt-5 mb-5 transition-all duration-700 hover:text-white font-semibold px-4 py-2 rounded-md"
            >
              Click here to log in
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Signup;
