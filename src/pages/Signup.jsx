import React from 'react';

const Signup = ({ role }) => {
  return (
    <div className="max-w-md mx-auto  p-6  rounded-md shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Sign up as a {role}</h2>

      {role === 'buyer' ? (
        <div>
          {/* Buyer-specific fields */}
          <input type="text" placeholder="Buyer Company Name" className="mb-4 p-2 w-full border" />
          <input type="text" placeholder="Company Address" className="mb-4 p-2 w-full border" />
          <input type="text" placeholder="Contact Person Name" className="mb-4 p-2 w-full border" />
          <input type="tel" placeholder="Phone Number" className="mb-4 p-2 w-full border" />
        </div>
      ) : (
        <div>
          {/* Supplier-specific fields */}
          <input type="text" placeholder="Supplier Business Name" className="mb-4 p-2 w-full border" />
          <input type="text" placeholder="Business Address" className="mb-4 p-2 w-full border" />
          <input type="text" placeholder="Business License Number" className="mb-4 p-2 w-full border" />
          <input type="tel" placeholder="Phone Number" className="mb-4 p-2 w-full border" />
        </div>
      )}

      {/* Common fields */}
      <input type="email" placeholder="Email" className="mb-4 p-2 w-full border" />
      <input type="password" placeholder="Password" className="mb-4 p-2 w-full border" />
      <input type="password" placeholder="Confirm Password" className="mb-4 p-2 w-full border" />
      
      <button className="bg-purple-600 text-white p-2 w-full">Submit</button>
    </div>
  );
};

export default Signup;
