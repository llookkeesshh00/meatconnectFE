import React, { useState, useEffect } from 'react';
import prod_img from '../../assets/source_img';
import { useNavigate } from 'react-router-dom';
import { useContract } from '../../contexts/ContractContext';
import { toast } from 'react-toastify';
const apiUrl = import.meta.env.VITE_API_URL;

const SupplierContracts = () => {
  const navigate = useNavigate();
  const [contracts, setcontracts] = useState([]);
  const [pending_contracts, setpending_contracts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const { setContract } = useContract();

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        setIsLoading(true);
        const pendingResponse = await fetch(`${apiUrl}/contract/getContracts/supplier/pending`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const confirmedResponse = await fetch(`${apiUrl}/contract/getContracts/supplier/confirmed`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        const pendingData = await pendingResponse.json();
        const confirmedData = await confirmedResponse.json();

        if (pendingData.ok) setpending_contracts(pendingData.detailsArray);
        if (confirmedData.ok) setcontracts(confirmedData.detailsArray);

      } catch (error) {
        console.error('Error fetching contracts:', error);
      } finally {
        setIsLoading(false); // Stop loading after fetch
      }
    };

    fetchContracts();
  }, []);

  const handleAccept = async (order) => {
    try {
      const response = await fetch(`${apiUrl}/contract/acceptContract/${order.contract_id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      const data = await response.json();

      if (data.ok) {
        toast.success('Contract accepted successfully!');
        navigate(0);
      } else {
        toast.error('Unable to accept the contract!');
        console.error(data.error);
      }
    } catch (error) {
      console.error('Error accepting contract:', error);
    }
  };

  return (
    <div>
      {isLoading ?(
                <div className="fixed inset-0 flex flex-col gap-6 justify-center items-center bg-white bg-opacity-75">
                    <div className="font-bold text-xl">Please wait</div>
                    <video autoPlay loop muted className="w-36 h-36 opacity-60 mb-6">
                        <source src="assets/loading.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ): (
        <>
          <div className="bg-gray-00 p-6 sm:p-10 m-4 sm:m-10">
            <h1 className="text-2xl sm:text-3xl font-semibold text-black mb-5">Pending Contracts</h1>
            {pending_contracts.length === 0 ? (
              <p className="text-lg sm:text-xl text-red-500">No pending contracts</p>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {pending_contracts.map((contract) => (
                  <div key={contract.id} className="bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col sm:flex-row justify-between items-start">
                    <div className="flex-grow">
                      <div className="flex justify-between items-center">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            contract.status === true ? 'bg-red-500 text-white' : 'bg-yellow-200 text-yellow-800'
                          }`}
                        >
                          {contract.status === true ? 'Pending' : 'Completed'}
                        </span>
                      </div>
                      <div className="mt-4">
                        <p className="text-lg sm:text-2xl font-semibold">
                          {contract.productName.toUpperCase()} {contract.productCatogery.toUpperCase()}
                        </p>
                      </div>
                      <div className="mt-4">
                        <p className="text-md text-black-800">Contract Id: {contract.id}</p>
                      </div>
                      <div className="mt-4 flex justify-center gap-3">
                        <p className="text-md">Price</p>
                        <p className="text-md text-red-500 font-bold">₹{contract.productPrice}/kilo</p>
                      </div>
                      <div className="mt-4">
                        <p className="text-md">Buyer: {contract.buyername}</p>
                      </div>
                      <div className="flex space-x-4 mt-8 ml-2">
                        <button
                          onClick={() => handleAccept(contract)}
                          className="bg-gray-200 hover:bg-green-600 transition-all duration-300 p-2 font-bold rounded-lg hover:text-white"
                        >
                          Accept Now
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-3">
                      <div className="w-32 sm:w-50 h-32 sm:h-50">
                        <img
                          src={prod_img[contract.productCatogery][contract.productName]}
                          alt={contract.supplierName}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <p className="text-sm sm:text-lg text-gray-500 mt-2 sm:mt-5 font-semibold">
                          Duration: {contract.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="bg-gray-00 p-6 sm:p-10 m-4 sm:m-10">
            <h1 className="text-2xl sm:text-3xl font-semibold text-black mb-5">Confirmed Contracts</h1>
            {contracts.length === 0 ? (
              <p className="text-lg sm:text-xl text-red-500">No confirmed contracts</p>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {contracts.map((contract) => (
                  <div key={contract.id} className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col sm:flex-row justify-between items-start">
                    <div className="flex-grow">
                      <div className="flex justify-between items-center">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            contract.status === true ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
                          }`}
                        >
                          {contract.status === true ? 'Active' : 'Completed'}
                        </span>
                      </div>
                      <div className="mt-4">
                        <p className="text-lg sm:text-2xl font-semibold">
                          {contract.productName.toUpperCase()} {contract.productCatogery.toUpperCase()}
                        </p>
                      </div>
                      <div className="mt-4">
                        <p className="text-md text-black-800">Contract Id: {contract.id}</p>
                      </div>
                      <div className="mt-4 flex justify-center gap-3">
                        <p className="text-md">Price</p>
                        <p className="text-md text-red-500 font-bold">₹{contract.productPrice}/kilo</p>
                      </div>
                      <div className="mt-4">
                        <p className="text-md">Buyer: {contract.buyername}</p>
                      </div>
                      <p className="text-sm mt-2">
                        Contract created on{' '}
                        <span className="font-semibold">{new Date(contract.createdAt).toLocaleDateString()}</span>
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-3">
                      <div className="w-32 sm:w-50 h-32 sm:h-50">
                        <img
                          src={prod_img[contract.productCatogery][contract.productName]}
                          alt={contract.supplierName}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <p className="text-sm sm:text-lg text-gray-500 mt-2 sm:mt-5 font-semibold">
                          Duration: {contract.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default SupplierContracts;
