import React, { useState, useEffect } from 'react';
import prod_img from '../../assets/source_img';
import { useNavigate } from 'react-router-dom';
import { useContract } from '../../contexts/ContractContext';
import { toast } from 'react-toastify';
const apiUrl = import.meta.env.VITE_API_URL;

const BuyerContracts = () => {
  const navigate = useNavigate();
  const [contracts, setContracts] = useState([]);
  const [pendingContracts, setPendingContracts] = useState([]);
  const { setContract } = useContract();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchContracts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${apiUrl}/contract/getContracts/confirmed`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        const data = await response.json();
        if (data.ok) {
          setContracts(data.detailsArray);
        } else {
          console.log(data.error);
        }
      } catch (error) {
        console.error("Error fetching confirmed contracts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchPendingContracts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${apiUrl}/contract/getContracts/pending`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        const data = await response.json();
        if (data.ok) {
          setPendingContracts(data.detailsArray);
        } else {
          console.log(data.error);
        }
      } catch (error) {
        console.error("Error fetching pending contracts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContracts();
    fetchPendingContracts();
  }, []);

  const handleOrder = (contract) => {
    if (contract) {
      toast.success('Navigating to orders page...');
      setContract(contract);
      navigate('/buyerOrder');
    }
  };

  return (
    <div>
      {isLoading ? (
        <div className="fixed inset-0 flex flex-col gap-6 justify-center items-center bg-white bg-opacity-75">
          <div className="font-bold text-xl">Please wait</div>
          <video autoPlay loop muted className="w-36 h-36 opac ity-60 mb-6">
            <source src="assets/loading.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <>
          <div className='min-h-screen bg-gray-00 p-5'>
            <h1 className='text-3xl font-semibold text-black mb-5'>Current Contracts</h1>
            {contracts.length > 0 ? (
              <div className='grid grid-cols-1 gap-6'>
                {contracts.map(contract => (
                  <div key={contract.id} className='bg-gray-100 p-6 rounded-lg shadow-lg flex justify-between items-start'>
                    <div className='flex-grow'>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${contract.status === true
                          ? 'bg-green-200 text-green-800'
                          : 'bg-yellow-200 text-yellow-800'
                          }`}
                      >
                        {contract.status === true ? 'Active' : 'Completed'}
                      </span>
                      <p className='text-2xl font-semibold mt-4'>{contract.productName.toUpperCase()} {contract.productCatogery.toUpperCase()}</p>
                      <p className='text-md mt-4'>Contract Id: {contract.id}</p>
                      <p className='text-md mt-4'>Price: ₹{contract.productPrice}/kilo</p>
                      <p className='text-md mt-4'>Supplier: {contract.supplierName}</p>
                      <p className='text-sm mt-2'>Contract created on: <span className='font-semibold'>{new Date(contract.createdAt).toLocaleDateString()}</span></p>
                      <button onClick={() => handleOrder(contract)} className='bg-gray-100 text-gray-700 hover:bg-blue-600 transition-all duration-700 p-2 font-bold rounded-lg hover:text-white mt-6'>
                        {contract.status === true ? 'Order Now' : ''}
                      </button>
                    </div>
                    <div className='flex flex-col items-center justify-center p-3'>
                      <img
                        src={prod_img[contract.productCatogery][contract.productName]}
                        alt={contract.supplierName}
                        className='w-full h-full object-cover rounded-lg'
                      />
                      <p className='text-lg text-gray-500 mt-5 font-semibold'>Duration: {contract.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className='text-center text-gray-500'>No confirmed contracts</p>
            )}
          </div>

          <div className='min-h-screen bg-gray-100 p-10'>
            <h1 className='text-3xl font-semibold text-black mb-5'>Pending Contracts</h1>
            {pendingContracts.length > 0 ? (
              <div className='grid grid-cols-1 gap-6'>
                {pendingContracts.map(contract => (
                  <div key={contract.id} className='bg-gray-100 p-6 rounded-lg shadow-lg flex justify-between items-start'>
                    <div className='flex-grow'>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${contract.status === true
                          ? 'bg-red-500 text-white'
                          : 'bg-yellow-200 text-yellow-800'
                          }`}
                      >
                        {contract.status === true ? 'Pending' : 'Completed'}
                      </span>
                      <p className='text-2xl font-semibold mt-4'>{contract.productName.toUpperCase()} {contract.productCatogery.toUpperCase()}</p>
                      <p className='text-md mt-4'>Contract Id: {contract.id}</p>
                      <p className='text-md mt-4'>Price: ₹{contract.productPrice}/kilo</p>
                      <p className='text-md mt-4'>Supplier: {contract.supplierName}</p>
                      <p className='text-sm mt-2'>Contract created on: <span className='font-semibold'>{new Date(contract.createdAt).toLocaleDateString()}</span></p>
                    </div>
                    <div className='flex flex-col items-center justify-center p-3'>
                      <img
                        src={prod_img[contract.productCatogery][contract.productName]}
                        alt={contract.supplierName}
                        className='w-full h-full object-cover rounded-lg'
                      />
                      <p className='text-lg text-gray-500 mt-5 font-semibold'>Duration: {contract.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className='text-center text-gray-500'>No pending contracts</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default BuyerContracts;
