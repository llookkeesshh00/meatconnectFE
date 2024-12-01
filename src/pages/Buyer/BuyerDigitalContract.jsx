import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const apiUrl = import.meta.env.VITE_API_URL;


const BuyerDigitalContract = () => {
    let date = new Date();
    const navigate = useNavigate();
    const location = useLocation();

    const { productId, supplierId } = location.state || {};
    const [isChecked, setIsChecked] = useState(false);




    const [supplierDetails, setSupplierDetails] = useState({
        name: '',
        id: '',
        email: '',
        contact: '',
        address: '',
    });

    const [productDetails, setProductDetails] = useState({
        category: '',
        name: '',
        price: '',
    });

    const [buyerDetails, setBuyerDetails] = useState({
        name: '',
        id: '',
        email: '',
        contact: '',
        address: '',
    });

    const [deliveryLocation, setDeliveryLocation] = useState({
        name: '',
        area: '',
        city: '',
        state: '',
        pincode: '',
    });
    const [contractDetails, setContractDetails] = useState({
        date: "",
        period: 0,
        paymentType: '',
        paymentMode: '',
        estimated_quantity: 0,
    });



    const handleCheckboxChange = (e) => {
        setIsChecked(!isChecked);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Check if the field name exists in contractDetails or deliveryLocation
        if (Object.keys(contractDetails).includes(name)) {
            setContractDetails((prev) => ({
                ...prev,
                [name]: value,
            }));
        } else if (Object.keys(deliveryLocation).includes(name)) {
            setDeliveryLocation((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };
    const handleSubmit = async () => {
        if (!isChecked) {
            alert("please click on the checkbox to agree the terms and conditions");
        }
        else {
            
            let agreementDetails = { contractDetails, deliveryLocation, buyerDetails, supplierDetails, productDetails }
            console.log(agreementDetails)
            let response = await fetch(`${apiUrl}/contract/makeContract`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`, // Attach the token in Authorization header
                },
                body: JSON.stringify(agreementDetails),
            }
            );
         
            let data = await response.json();
            console.log(data)

            if (data.ok) {
                toast.success('contract has been notified to supplier ')
                console.log(data.message);
                navigate('/buyercontracts')
            }
            else {
                console.log(data.error);
                toast.error('error in making a contract please make sure that you fill all the required fields')
            }

        }


    }
    useEffect(() => {
        const getBuyerDetails = async (req, res) => {
            try {
                const response = await fetch(`${apiUrl}/buyer/getBuyerDetails`, { // Adjust the endpoint as necessary
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include JWT token for authorization
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok)
                    console.log("error in fetching buyer details");
                let data = await response.json();

                setBuyerDetails({
                    name: data.name,                  // 'bhanu'
                    id: data.buyerid,                 // '67040dd8046852bd45b2d1c4'
                    email: data.email,                // 'bhanukiran280@gmail.com'
                    contact: data.mobile,             // '9381553534'
                    address: data.address,             // 'Uppal,Hyderabad,India'
                });
            }
            catch (error) {
                console.log(error)
            }
        }

        const getSupplierDetails = async (req, res) => {
            try {

                const response = await fetch(`${apiUrl}/supplier/getSupplierDetails?supplierId=${supplierId}`, { // Adjust the endpoint as necessary
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include JWT token for authorization
                        'Content-Type': 'application/json',
                    },

                });

                if (!response.ok)
                    console.log("error in fetching supplier details");
                let data = await response.json();
                console.log(data);
                setSupplierDetails(data);
            }
            catch (error) {
                // console.log(error)
            }
        }


        const getProductDetails = async (req, res) => {
            const response = await fetch(`${apiUrl}/product/getProductDetails?productId=${productId}`, { // Adjust the endpoint as necessary
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include JWT token for authorization
                    'Content-Type': 'application/json',
                },

            })

            let data = await response.json();


            if (response.ok) {
                setProductDetails({ price: data.productPrice, id: productId, name: data.productName, category: data.productCategory })

            }


        }


        getBuyerDetails();
        getSupplierDetails();
        getProductDetails();



    }, [])



    return (
        <div className="container bg-slate-200  mx-auto my-10 p-6  shadow-lg flex flex-col gap-9 rounded-lg max-w-4xl">
            {/* Supplier Details */} 
            <strong className='text-xllg text-red-500'>NOTE: SUPPLIER WILL NEGOTIATE AND AFTER CONFIRMATION CONTRACT WILL BE MADE !!  </strong>
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
            <div className="border-b-2 border-gray-300 p-4 mb-6 bg-white rounded-lg shadow-md">
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
            <div className="border-b-2 border-gray-300 p-4 mb-6 bg-white  rounded-lg shadow-md ">
                <h2 className="text-2xl font-bold mb-4">Agreement Terms & Conditions</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block font-semibold">Dated on:</label>
                        <input
                            type="date"
                            name="date"
                            value={contractDetails.date}
                            onChange={(e) => { handleInputChange(e) }}

                            className="border-b-2 border-gray-300 w-full"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">Period:(in months)</label>
                        <input
                            type="Number"
                            name="period"
                            value={contractDetails.period}
                            onChange={(e) => { handleInputChange(e) }}
                            placeholder="e.g., In months olny"
                            className="border-b-2 border-gray-300 w-full"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">Payment Type:</label>
                        <input
                            type="text"
                            name="paymentType"
                            value={contractDetails.paymentType}
                            onChange={(e) => { handleInputChange(e) }}
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
                            onChange={(e) => { handleInputChange(e) }}
                            placeholder="e.g., Bank Transfer"
                            className="border-b-2 border-gray-300 w-full"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">Estimated quantity(kg/week):</label>
                        <input
                            type="Number"
                            name="estimated_quantity"
                            value={contractDetails.estimated_quantity}
                            onChange={(e) => { handleInputChange(e) }}
                            placeholder="100kg /week"
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
                        <label className="block font-semibold"> Restraunt Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={deliveryLocation.houseNumber}
                            onChange={(e) => { handleInputChange(e) }}
                            placeholder=" eg .marriot bonvoy hotel"
                            className="border-b-2 border-gray-300 w-full"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">Area:</label>
                        <input
                            type="text"
                            name="area"
                            value={deliveryLocation.area}
                            onChange={(e) => { handleInputChange(e) }}
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
                            onChange={(e) => { handleInputChange(e) }}
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
                            onChange={(e) => { handleInputChange(e) }}
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
                            onChange={(e) => { handleInputChange(e) }}
                            placeholder="Pincode"
                            className="border-b-2 border-gray-300 w-full"
                        />
                    </div>
                </div>
            </div>

            {/* Signatures */}
            <div className="p-4 mb-6 rounded-lg shadow-lg bg-white">
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
                            value={supplierDetails.name}
                            disabled
                        />
                    </div>
                </div>
            </div>

            <div className="checkbox flex flex-col justify-start  gap-4">
                <div className='flex'>
                    <input type="checkbox" className='p-3 m-2' checked={isChecked}
                        onChange={handleCheckboxChange} />
                    <div>On clicking this check this check box it is equivalnet to signing the agreement  </div>
                </div>
               
            </div>



            <div onClick={handleSubmit} className="p-4 mb-6 rounded-lg shadow-lg bg-blue-300 hover:bg-blue-400 hover:transition">
                <button onClick={handleSubmit}> Submit</button>
            </div>

        </div>
    );
};

export default BuyerDigitalContract;
