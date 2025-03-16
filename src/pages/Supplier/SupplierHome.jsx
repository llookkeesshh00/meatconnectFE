import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SupplierHome = () => {
  const navigate = useNavigate();

  

  return (
    <div className="flex justify-center items-center sm:h-screen bg-gray-00 m-2" style={{ 
      backgroundImage: `url("/assets/image3.jpg")` ,backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'center' }}>
      <div className=" shadow-lg rounded-lg p-8">
        <h2 className="sm:text-4xl text-xl font-bold text-purple text-white  text-center mb-4">
          Welcome, Supplier!
        </h2>
        <p className="text-center text-white sm:text-xl  mb-6">
          Upload your orders and contracts to manage them efficiently.
        </p>
        <div className="text-center">
          <button
            className="bg-gray-100 text-gray-700 hover:bg-blue-600 transition-all duration-700 hover:text-white font-semibold px-4 py-2 rounded-md"
           onClick={()=>{navigate('/supplieruploadproducts');toast.success('navigating to upload section');}}
          >
            Upload Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupplierHome;
