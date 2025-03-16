import React, { useState, useEffect } from 'react';
import prod_img from '../../assets/source_img';
import { useNavigate } from 'react-router-dom';
import { useContract } from '../../contexts/ContractContext';
import { toast } from 'react-toastify';
const apiUrl = import.meta.env.VITE_API_URL;

const BuyerOrder = () => {
    const Navigate = useNavigate();
    const [addresses, setAddresses] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState('');
    const [quantity, setQuantity] = useState(1);
    const { contract, setContract } = useContract();
    const [temp, setTemp] = useState(contract);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getAddresses = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${apiUrl}/delivery/getAdress`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setAddresses(data.deliveryDetails || []);
            } catch (error) {
                console.error("Error fetching addresses:", error);
            } finally {
                setIsLoading(false);
            }
        };

        getAddresses();
    }, []);

    const handleOrderSubmit = async () => {
        if (!selectedAddress || quantity < 1) {
            alert('Please select a valid address and quantity.');
            return;
        }

        const orderData = {
            supplier_id: contract.id,
            product_id: contract.productId,
            quantity,
            address: selectedAddress,
            productCategory: contract.productCatogery,
            productName: contract.productName,
            productPrice: contract.productPrice,
        };
        console.log(orderData);

        setIsLoading(true);

        try {
            const response = await fetch(`${apiUrl}/orders/create`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            if (!response.ok) {
                throw new Error('Failed to place order');
            }

            toast.success('Order placed successfully!');
            Navigate('/buyersummary');
        } catch (error) {
            console.error("Error placing order:", error);
            toast.error("There was an error placing your order.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-6 sm:max-w-[50vw] mt-10 mx-auto shadow-2xl rounded-xl">
            {isLoading ? (
                <div className="fixed inset-0 flex flex-col gap-6 justify-center items-center bg-white bg-opacity-75">
                    <div className="font-bold text-xl">Please wait</div>
                    <video autoPlay loop muted className="w-36 h-36 opacity-60 mb-6">
                        <source src="assets/loading.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ) : (
                <>
                    <h2 className=" font-semibold mb-4 sm:text-4xl  flex  text-xs text-purple-700">Place Your Order</h2>

                    <div className='flex  gap-10 justify-between w-full  border-black'>
                        <div className="bg-white p-4 w-full rounded  mb-4 gap-12 text-xs sm:text-base">
                            <h3 className="sm:text-2xl text-purple-500 font-semibold mb-2">{temp.productName.toUpperCase()} {temp.productCatogery.toUpperCase()}</h3>
                            <p><strong className='ml-'>Supplier:</strong> {temp.supplierName}</p>
                            <p><strong>Category:</strong> {temp.productCatogery}</p>
                            <p><strong>Price:</strong> ₹{temp.productPrice}</p>
                            <label className="block mb-2 sm:text-lg text-xs  font-semibold">Quantity in (kgs)</label>
                            <input
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className='flex items-center justify-center'>
                            <img src={prod_img[temp.productCatogery][temp.productName]} alt="Product" className="w-full flex justify-center p-2 items-center sm:h-[207px] " />
                        </div>
                    </div>

                    {/* Delivery Address Selection */}
                    <div className="bg-white p-4 rounded  mb-4">
                        <h3 className="text-lg font-semibold mb-2">Select Delivery Address</h3>
                        <select
                            value={selectedAddress}
                            onChange={(e) => setSelectedAddress(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        >
                            <option value="">Choose an address</option>
                            {addresses.map((address) => (
                                <option key={address._id} value={address._id}>
                                    {address.name} ,  {address.area} , {address.city} , {address.state} - {address.pincode}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        onClick={handleOrderSubmit}
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                    >
                        Place Order
                    </button>
                </>
            )}
        </div>
    );
};

export default BuyerOrder;
