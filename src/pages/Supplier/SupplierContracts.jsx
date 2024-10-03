import React from 'react';

const SupplierContracts = () => {
  // Example contract data
  const contracts = [
    {
      id: 'CNTR001',
      buyerName: 'Restaurant ABC',
      terms: 'Deliver 500kg of chicken weekly for 6 months.',
      duration: '6 months',
      status: 'Active',
      createdAt: '2023-09-01',
      image: '/assets/uploadImages/chickenbreast.jpeg', // Image URL for contract
    },
    {
      id: 'CNTR002',
      buyerName: 'Hotel XYZ',
      terms: 'Deliver 200kg of fish bi-weekly for 3 months.',
      duration: '3 months',
      status: 'Completed',
      createdAt: '2023-10-01',
      image: '/assets/uploadImages/apollofish.jpeg', // Another image URL
    },
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Contracts</h1>
      <p className="text-gray-600 mb-6">All active and pending contracts</p>

      <div className="space-y-4">
        {contracts.map((contract) => (
          <div key={contract.id} className="bg-white p-6 rounded-lg shadow-md flex justify-between items-start">
            {/* Contract details */}
            <div className="flex-grow">
              <div className="flex justify-between items-center">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    contract.status === 'Active'
                      ? 'bg-green-200 text-green-800'
                      : 'bg-yellow-200 text-yellow-800'
                  }`}
                >
                  {contract.status === 'Active' ? 'Active' : 'Completed'}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">Contract Id</p>
                <p className="text-lg font-semibold">{contract.id}</p>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">Buyer: {contract.buyerName}</p>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Contract created on{' '}
                <span className="font-semibold">{new Date(contract.createdAt).toLocaleDateString()}</span>
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Terms: <span className="font-semibold">{contract.terms}</span>
              </p>
              <div className="flex space-x-4 mt-6">
                <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700">
                  {contract.status === 'Active' ? 'Manage Contract' : 'Review Contract'}
                </button>
                <button className="bg-red-100 text-red-600 font-semibold px-4 py-2 rounded-md hover:bg-red-200">
                  Contract Details
                </button>
              </div>
            </div>

            {/* Image and Duration */}
            <div className="flex flex-col items-center justify-center gap-16">
              <div className="w-32 h-32 mb-2">
                <img
                  src={contract.image}
                  alt={contract.buyerName}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-500 font-semibold">Duration: {contract.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupplierContracts;
