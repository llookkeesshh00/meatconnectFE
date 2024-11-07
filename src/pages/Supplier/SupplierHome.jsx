import React from 'react';
import { useNavigate } from 'react-router-dom';

const SupplierHome = () => {
  const navigate = useNavigate();

  

  return (
    <div className="flex justify-center items-center h-screen bg-gray-00  " style={{ 
      backgroundImage: `url("/assets/supplierHome.jpeg")` ,backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'center' }}>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-4">
          Welcome, Supplier!
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Upload your orders and contracts to manage them efficiently.
        </p>
        <div className="text-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
           onClick={()=>{navigate('/supplieruploadproducts')}}
          >
            Upload Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupplierHome;
