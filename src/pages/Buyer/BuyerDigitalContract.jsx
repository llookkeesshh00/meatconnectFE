import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BuyerDigitalContract = () => {
    const location= useLocation();
    console.log(location.state)
    const { productId, supplierId } = location.state || {};
    
    // Dummy data for Supplier and Product Details
    const [supplierDetails, setSupplierDetails] = useState({
        name: 'John Doe Supplies',
        id: 'SUP12345',
        email: 'johndoe@example.com',
        contact: '9876543210',
        address: '123 Supply St, Meat Town',
    });

    const [productDetails, setProductDetails] = useState({
        category: 'Meat Products',
        name: 'Chicken Breast',
        price: 'Rs 200/Kg',
    });

    const [buyerDetails, setBuyerDetails] = useState({
        name: '',
        id: '',
        email:'',
        contact: '',
        address: '',
    });

    const [deliveryLocation, setDeliveryLocation] = useState({
        houseNumber: '',
        area: '',
        city: '',
        state: '',
        pincode: '',
    });
    const [contractDetails, setContractDetails] = useState({
        date: '',
        period: '',
        paymentType: '',
        paymentMode: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContractDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


  useEffect(() => {
    const getBuyerDetails= async (req,res)=>{
        try{
            const response = await fetch('http://localhost:3000/buyer/getBuyerDetails', { // Adjust the endpoint as necessary
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include JWT token for authorization
              'Content-Type': 'application/json',
            },
          });

          if(!response.ok)
            console.log("error in fetching buyer details"); 
           let data= await response.json();
           console.log(buyerDetails)
             setBuyerDetails({
            name: data.name,                  // 'bhanu'
            id: data.buyerid,                 // '67040dd8046852bd45b2d1c4'
            email: data.email,                // 'bhanukiran280@gmail.com'
            contact: data.mobile,             // '9381553534'
            address: data.address,             // 'Uppal,Hyderabad,India'
          });
        }
        catch(error)
        {
            console.log(error)
        }
    }
 
    const getSupplierDetails= async (req,res)=>{
        try{ console.log(supplierId)
            const response = await fetch(`http://localhost:3000/supplier/getSupplierDetails?supplierId=${supplierId}`, { // Adjust the endpoint as necessary
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include JWT token for authorization
              'Content-Type': 'application/json',
            },
        
          });

          if(!response.ok)
            console.log("error in fetching supplier details"); 
           let data= await response.json();
           setSupplierDetails(data);
        }
        catch(error)
        {
           // console.log(error)
        }
    }
getBuyerDetails();
 getSupplierDetails();
    
  }, [])
  







    return (
        <div className="container mx-auto my-10 p-6  shadow-lg flex flex-col gap-9 rounded-lg max-w-4xl">
            {/* Supplier Details */}
            <div className="border-b-2 border-gray-300 p-4 mb-6  bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Supplier Details</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block font-semibold">Supplier Name:</label>
                        <p className="border-b-2 border-gray-300">{supplierDetails.name}</p>
                    </div>
                    <div>
                        <label className="block font-semibold">Supplier ID:</label>
                        <p className="border-b-2 border-gray-300">{supplierDetails.id}</p>
                    </div>
                    <div>
                        <label className="block font-semibold">Supplier Email:</label>
                        <p className="border-b-2 border-gray-300">{supplierDetails.email}</p>
                    </div>
                    <div>
                        <label className="block font-semibold">Supplier Contact:</label>
                        <p className="border-b-2 border-gray-300">{supplierDetails.contact}</p>
                    </div>
                    <div>
                        <label className="block font-semibold">Supplier Address:</label>
                        <p className="border-b-2 border-gray-300">{supplierDetails.address}</p>
                    </div>
                </div>
            </div>

            {/* Buyer Details */}
            <div className="border-b-2 border-gray-300 p-4 mb-6   bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Buyer Details</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block font-semibold">Buyer Name:</label>
                        <p className="border-b-2 border-gray-300">{buyerDetails.name}</p>
                    </div>
                    <div>
                        <label className="block font-semibold">Buyer ID:</label>
                        <p className="border-b-2 border-gray-300">{buyerDetails.id}</p>
                    </div>
                    <div>
                        <label className="block font-semibold">Buyer Email:</label>
                        <p className="border-b-2 border-gray-300">{buyerDetails.email}</p>
                    </div>
                    <div>
                        <label className="block font-semibold">Buyer Contact:</label>
                        <p className="border-b-2 border-gray-300">{buyerDetails.contact}</p>
                    </div>
                    <div>
                        <label className="block font-semibold">Buyer Address:</label>
                        <p className="border-b-2 border-gray-300">{buyerDetails.address}</p>
                    </div>
                </div>
            </div>

            {/* Product Details */}
            <div className="border-b-2 border-gray-300 p-4 mb-6  rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Product Details</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block font-semibold">Product Category:</label>
                        <p className="border-b-2 border-gray-300">{productDetails.category}</p>
                    </div>
                    <div>
                        <label className="block font-semibold">Product Name:</label>
                        <p className="border-b-2 border-gray-300">{productDetails.name}</p>
                    </div>
                    <div>
                        <label className="block font-semibold">Product Price:</label>
                        <p className="border-b-2 border-gray-300">{productDetails.price}</p>
                    </div>
                </div>
            </div>

            {/* Agreement Terms */}
            <div className="border-b-2 border-gray-300 p-4 mb-6  rounded-lg shadow-md ">
                <h2 className="text-2xl font-bold mb-4">Agreement Terms & Conditions</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block font-semibold">Dated on:</label>
                        <input
                            type="date"
                            name="date"
                            value={contractDetails.date}
                            onChange={handleInputChange}
                            className="border-b-2 border-gray-300 w-full"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">Period:</label>
                        <input
                            type="text"
                            name="period"
                            value={contractDetails.period}
                            onChange={handleInputChange}
                            placeholder="e.g., 6 months"
                            className="border-b-2 border-gray-300 w-full"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">Payment Type:</label>
                        <input
                            type="text"
                            name="paymentType"
                            value={contractDetails.paymentType}
                            onChange={handleInputChange}
                            placeholder="e.g., Net 30 days"
                            className="border-b-2 border-gray-300 w-full"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">Payment Mode:</label>
                        <input
                            type="text"
                            name="paymentMode"
                            value={contractDetails.paymentMode}
                            onChange={handleInputChange}
                            placeholder="e.g., Bank Transfer"
                            className="border-b-2 border-gray-300 w-full"
                        />
                    </div>
                </div>
            </div>
            {/* Delivery Location */}
            <div className="p-4 mb-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Delivery Location</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block font-semibold">House Number:</label>
                        <input
                            type="text"
                            name="houseNumber"
                            value={deliveryLocation.houseNumber}
                            onChange={handleInputChange}
                            placeholder="House Number"
                            className="border-b-2 border-gray-300 w-full"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">Area:</label>
                        <input
                            type="text"
                            name="area"
                            value={deliveryLocation.area}
                            onChange={handleInputChange}
                            placeholder="Area"
                            className="border-b-2 border-gray-300 w-full"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">City:</label>
                        <input
                            type="text"
                            name="city"
                            value={deliveryLocation.city}
                            onChange={handleInputChange}
                            placeholder="City"
                            className="border-b-2 border-gray-300 w-full"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">State:</label>
                        <input
                            type="text"
                            name="state"
                            value={deliveryLocation.state}
                            onChange={handleInputChange}
                            placeholder="State"
                            className="border-b-2 border-gray-300 w-full"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">Pincode:</label>
                        <input
                            type="text"
                            name="pincode"
                            value={deliveryLocation.pincode}
                            onChange={handleInputChange}
                            placeholder="Pincode"
                            className="border-b-2 border-gray-300 w-full"
                        />
                    </div>
                </div>
            </div>

            {/* Signatures */}
            <div className="p-4 mb-6 rounded-lg shadow-lg ">
                <h2 className="text-2xl font-bold mb-4">Signatures</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block font-semibold">Buyer:</label>
                        <input
                            type="text"
                            placeholder="Sign here"
                            className="border-b-2 border-gray-300 w-full"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">Supplier:</label>
                        <input
                            type="text"
                            placeholder="Sign here"
                            className="border-b-2 border-gray-300 w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyerDigitalContract;
