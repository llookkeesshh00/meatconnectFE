import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import prod_img from '../../assets/source_img'; // Assuming prod_img is the path to the image
import { useContract } from '../../contexts/ContractContext'; // You might need this if you're using it for context
const apiUrl = import.meta.env.VITE_API_URL;

const SupplierNotifications = () => {
  const navigate = useNavigate();
  const [pending_contracts, setPendingContracts] = useState([]);

  useEffect(() => {
    const fetchPendingContracts = async () => {
      const response = await fetch(`${apiUrl}/contract/getContracts/supplier/pending`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      const data = await response.json();

      if (data.ok) {
        setPendingContracts(data.detailsArray);
        console.log(data.detailsArray)
      } else {
        console.log(data.error);
      }
    };

    fetchPendingContracts();
  }, []);

  return (
    <div className="w-full max-w-full mx-auto mt-4">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>

        {pending_contracts.length > 0 ? (
          <div>
            {pending_contracts.map((contract) => (
              <div key={contract.contract_id} className="flex items-center mb-4 p-4 bg-gray-100 rounded-lg shadow-sm justify-between">
                <div>
                  <img src={prod_img[contract.productCatogery][contract.productName]} alt="Product" className="w-16 h-16 object-cover mr-4 rounded-full" />
                  <p className="text-sm font-semibold">{contract.productCatogery} {contract.productName}</p>

                </div>
              

                  <p className="text-lg text-gray-600">Buyer: {contract.buyername}</p>
                  <p className="text-gray-600">Price: ₹{contract.productPrice}</p>
                  <p className="text-gray-600">Duration: {contract.duration} months</p>
                
              </div>
            ))}
            <button
              onClick={() =>{ navigate('/suppliercontracts');toast.success('navigating to contract handling page')}}
              className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
            >
              View All Contracts
            </button>
          </div>
        ) : (
          <p>No pending contracts at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default SupplierNotifications;
