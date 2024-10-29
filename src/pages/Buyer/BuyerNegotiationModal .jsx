import React, { useState } from 'react';

const BuyerNegotiationModal = ({ orderId, onClose }) => {
  const [priceOffer, setPriceOffer] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Make API call to send the negotiation offer
    try {
      const response = await fetch(`http://localhost:3000/buyer/negotiate`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderId,
          priceOffer,
          quantity,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit negotiation');
      }

      const result = await response.json();
      console.log(result);
      // You can handle success or error messages here

    } catch (error) {
      console.error('Error in negotiation:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Negotiate for Order {orderId}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Offer Price</label>
            <input
              type="number"
              value={priceOffer}
              onChange={(e) => setPriceOffer(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Submit Negotiation
          </button>
          <button onClick={onClose} className="ml-4 text-gray-600">Cancel</button>
        </form>
      </div>
    </div>
  );
};


export default BuyerNegotiationModal;