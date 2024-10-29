import React, { useState } from 'react';

const BuyerVerification = () => {
  const [formData, setFormData] = useState({
    panNumber: '',
    aadhaarNumber: '',
    gstin: '',
    businessType: '',
    cin: '',
    idProof: null,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, idProof: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting and verifying buyer info goes here
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Buyer Verification</h1>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        {/* PAN Number */}
        <div className="mb-4">
          <label className="block text-gray-700">PAN Number</label>
          <input
            type="text"
            name="panNumber"
            className="w-full px-4 py-2 border rounded-md"
            value={formData.panNumber}
            onChange={handleInputChange}
            placeholder="Enter your PAN number"
            required
          />
        </div>

        {/* Aadhaar Number */}
        <div className="mb-4">
          <label className="block text-gray-700">Aadhaar Number</label>
          <input
            type="text"
            name="aadhaarNumber"
            className="w-full px-4 py-2 border rounded-md"
            value={formData.aadhaarNumber}
            onChange={handleInputChange}
            placeholder="Enter your Aadhaar number"
            required
          />
        </div>

        {/* GSTIN (optional, if business) */}
        <div className="mb-4">
          <label className="block text-gray-700">GSTIN (if applicable)</label>
          <input
            type="text"
            name="gstin"
            className="w-full px-4 py-2 border rounded-md"
            value={formData.gstin}
            onChange={handleInputChange}
            placeholder="Enter your GSTIN (if applicable)"
          />
        </div>

        {/* Business Type */}
        <div className="mb-4">
          <label className="block text-gray-700">Business Type</label>
          <select
            name="businessType"
            className="w-full px-4 py-2 border rounded-md"
            value={formData.businessType}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Select your business type
            </option>
            <option value="soleProprietorship">Sole Proprietorship</option>
            <option value="partnership">Partnership</option>
            <option value="privateLimited">Private Limited Company</option>
            <option value="llp">Limited Liability Partnership (LLP)</option>
          </select>
        </div>

        {/* CIN (optional, if registered company) */}
        <div className="mb-4">
          <label className="block text-gray-700">CIN (Company Identification Number)</label>
          <input
            type="text"
            name="cin"
            className="w-full px-4 py-2 border rounded-md"
            value={formData.cin}
            onChange={handleInputChange}
            placeholder="Enter your CIN (if applicable)"
          />
        </div>

        {/* Upload ID Proof */}
        <div className="mb-4">
          <label className="block text-gray-700">Upload ID Proof</label>
          <input
            type="file"
            name="idProof"
            className="w-full px-4 py-2 border"
            onChange={handleFileChange}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-bold px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Submit Verification
        </button>
      </form>
    </div>
  );
};

export default BuyerVerification;
