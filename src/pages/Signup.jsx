import React, { useState } from 'react';

const Signup = ({ role, switchToLogin }) => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role:role,
    name: '',
    mobile: '',
    companyName: '',
    address: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

   //do required validatins from  front end only

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    
    try {
      // Send a POST request to the signup endpoint
      const response = await fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });
    
      const data = await response.json();
      
      if (response.ok) {
        console.log('Signup successful:', data);
        switchToLogin();
  
      }
      else 
        {  console.error('Signup failed:', data);
        }
    }
    
    catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-md shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Sign up as a {role}</h2>

      <form onSubmit={handleSubmit}>
        {/* Common fields for all roles */}
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

        {role === 'buyer' ? (
          <div>
            {/* Buyer-specific fields */}
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Buyer Company Name"
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
            
          </div>
        ) : (
          <div>
            {/* Supplier-specific fields */}
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Supplier Business Name"
              className="mb-4 p-2 w-full border"
              required
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Suppliers Business Address"
              className="mb-4 p-2 w-full border"
              required
            />
           
          </div>
        )}

        <button type="submit" className="bg-purple-600 text-white p-2 w-full">
          Submit
        </button>
      </form>
      <div>
        <p>Already have an account?</p>
        <button onClick={()=>{switchToLogin()}} className="text-purple-600 underline">
          Click here to log in
        </button>
      </div>
    </div>
  );
};

export default Signup;
