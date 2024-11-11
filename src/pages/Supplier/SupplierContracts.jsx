import React from 'react';
import { useState, useEffect } from 'react';
import prod_img from '../../assets/source_img';
import { useNavigate } from 'react-router-dom';
import { useContract } from '../../contexts/ContractContext';
import { toast } from 'react-toastify';

const SupplierContracts = () => {
  const navigate = useNavigate();
  const [contracts, setcontracts] = useState([]);
  const [pending_contracts, setpending_contracts] = useState([])
  const { setContract } = useContract();


  useEffect(() => {

    let pendingfetchContracts = async () => {
      let response = await fetch('http://localhost:3000/contract/getContracts/supplier/pending', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Attach the token in Authorization header
        },

      }
      );


      let data = await response.json();


      if (data.ok) {
        setpending_contracts(data.detailsArray);
        console.log(data.detailsArray)
      }
      else {
        console.log(data.error);

      }
    }
    let confirmedfetchContracts = async () => {
      let response = await fetch('http://localhost:3000/contract/getContracts/supplier/confirmed', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Attach the token in Authorization header
        },

      }
      );


      let data = await response.json();


      if (data.ok) {
        setcontracts(data.detailsArray);
        console.log(data.detailsArray)
      }
      else {
        console.log(data.error);

      }
    }

    pendingfetchContracts();
    confirmedfetchContracts();

  }, [])


  const handleAccept = async (order) => {

    let response = await fetch(`http://localhost:3000/contract/acceptContract/${order.contract_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Attach the token in Authorization header
      },

    }
    );


    let data = await response.json();


    if (data.ok) {
      toast.success('contract accepted sucessfully!')
      navigate(0)
    }
    else {
      toast.error('contract unable to accept!')
      console.log(data.error);


    }



  }
  return (
    <div>
      <div className='bg-gray-00 p-10 m-10'>
        <h1 className='text-3xl font-semibold text-black mb-5'>Pending Contracts</h1>

        {pending_contracts.length === 0 ? (
          <p className='text-xl text-red-500'>No pending contracts</p>
        ) : (
          <div className='grid grid-cols-1 gap-6'>
            {pending_contracts.map(contract => (
              <div key={contract.id} className='bg-gray-100 p-4 rounded-lg shadow-lg flex justify-between items-start'>
                {/* Contract details */}
                <div className='flex-grow'>
                  {/* Contract info */}
                  <div className='flex justify-between items-center'>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${contract.status === true ? 'bg-red-500 text-white' : 'bg-yellow-200 text-yellow-800'}`}>
                      {contract.status === true ? 'Pending' : 'Completed'}
                    </span>
                  </div>
                  <div className='mt-4'>
                    <p className='text-2xl font-semibold'>{contract.productName.toUpperCase()} {contract.productCatogery.toUpperCase()}</p>
                  </div>
                  <div className='mt-4'>
                    <p className='text-md text-black-800'>Contract Id: {contract.id}</p>
                  </div>
                  <div className='mt-4 flex justify-center gap-3'>
                    <p className='text-md'>Price</p>
                    <p className='text-md text-red-500 font-bold'>₹{contract.productPrice}/kilo</p>
                  </div>
                  <div className='mt-4'>
                    <p className='text-md'>buyername: {contract.buyername}</p>
                  </div>
                  <div className='flex space-x-4 mt-16 ml-2'>
                    <button onClick={() => { handleAccept(contract) }} className='bg-gray-200 hover:bg-green-600 transition-all duration-700 p-2 font-bold rounded-lg hover:text-white'>
                      accept now
                    </button>
                  </div>
                </div>
                {/* Image and Duration */}
                <div className='flex flex-col items-center justify-center p-3 gap-16'>
                  <div className='w-50 h-50 m-2'>
                    <img
                      src={prod_img[contract.productCatogery][contract.productName]}
                      alt={contract.supplierName}
                      className='w-full h-full object-cover rounded-lg'
                    />
                    <p className='text-lg text-gray-500 mt font-semibold translate-y-8'>Duration: {contract.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className='bg-gray-00 p-10 m-10'>
        <h1 className='text-3xl font-semibold text-black mb-5'>Confirmed Contracts</h1>

        {contracts.length === 0 ? (
          <p className='text-xl text-red-500'>No confirmed contracts</p>
        ) : (
          <div className='grid grid-cols-1 gap-6'>
            {contracts.map(contract => (
              <div key={contract.id} className='bg-gray-100 p-6 rounded-lg shadow-lg flex justify-between items-start'>
                {/* Contract details */}
                <div className='flex-grow'>
                  <div className='flex justify-between items-center'>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${contract.status === true ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                      {contract.status === true ? 'Active' : 'Completed'}
                    </span>
                  </div>
                  <div className='mt-4'>
                    <p className='text-2xl font-semibold'>{contract.productName.toUpperCase()} {contract.productCatogery.toUpperCase()}</p>
                  </div>
                  <div className='mt-4'>
                    <p className='text-md text-black-800'>Contract Id: {contract.id}</p>
                  </div>
                  <div className='mt-4 flex justify-center gap-3'>
                    <p className='text-md'>Price</p>
                    <p className='text-md text-red-500 font-bold'>₹{contract.productPrice}/kilo</p>
                  </div>
                  <div className='mt-4'>
                    <p className='text-md'>buyername: {contract.buyername}</p>
                  </div>
                  <p className='text-sm mt-2'>
                    Contract created on{' '}
                    <span className='font-semibold'>{new Date(contract.createdAt).toLocaleDateString()}</span>
                  </p>
                </div>
                {/* Image and Duration */}
                <div className='flex flex-col items-center justify-center p-3 gap-16'>
                  <div className='w-50 h-50 m-2'>
                    <img
                      src={prod_img[contract.productCatogery][contract.productName]}
                      alt={contract.supplierName}
                      className='w-full h-full object-cover rounded-lg'
                    />
                    <p className='text-lg text-gray-500 mt-5 font-semibold translate-y-8'>Duration: {contract.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>

  );
};

export default SupplierContracts;
