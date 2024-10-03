import React from 'react';

const BuyerContracts = () => {
  // Temporary data for two contracts
  const contracts = [
    {
      id: 1,
      supplierName: 'Fresh Meats Co.',
      deliveryDate: '2024-10-15',
      status: 'Active',
    },
    {
      id: 2,
      supplierName: 'Prime Beef Ltd.',
      deliveryDate: '2024-11-01',
      status: 'Pending',
    },
  ];

  return (
    <div className='h-[100vh] bg-slate-500 p-10'>
      <h1 className='text-3xl font-semibold text-white mb-5'>Current Contracts</h1>

      <div className='grid grid-cols-1 gap-6'>
        {contracts.map(contract => (
          <div key={contract.id} className='bg-white p-6 rounded-lg shadow-md'>
            <h2 className='text-2xl font-bold text-gray-800 mb-2'>
              Supplier: {contract.supplierName}
            </h2>
            <p className='text-gray-600'>
              Delivery Date: <span className='font-semibold'>{contract.deliveryDate}</span>
            </p>
            <p className={`text-lg mt-3 font-semibold ${contract.status === 'Active' ? 'text-green-500' : 'text-yellow-500'}`}>
              Status: {contract.status}
            </p>
            <button className='mt-4 px-4 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700'>
              View Contract
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyerContracts;
