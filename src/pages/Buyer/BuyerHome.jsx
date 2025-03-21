import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import prod_img from '../../assets/source_img';
import { toast } from 'react-toastify';
const apiUrl = import.meta.env.VITE_API_URL;

const BuyerHome = () => {
  const [orders, setOrders] = useState([]);
  const [buyerorders, setBuyerorders] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);  // Loading state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContractOrders = async () => {
      try {
        const response = await fetch(`${apiUrl}/buyer/getBuyerProdcuts`, {
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
        console.log(data.newarr);
        setBuyerorders(data.newarr);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    const fetchOrders = async () => {
      try {
        const response = await fetch(`${apiUrl}/buyer/getAllProducts`, {
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
        console.log(data);
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setIsLoading(false);  // Set loading to false after data is fetched
      }
    };

    fetchOrders();
    fetchContractOrders();
  }, []);

  const handleNegotiate = (productId, supplierId) => {
    console.log(`Starting negotiation for order ID: ${productId}  ${supplierId}`);
    toast.success('Navigating to contract creation, please wait');
    navigate('/buyerdigitalcontract', { state: { productId, supplierId } });
  };

  const filteredOrders = orders.filter(order => {
    return !buyerorders.includes(order._id) && (
      order.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.productCategory.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="flex flex-col border p-2  gap-10">
      <div className="flex flex-col sm:flex sm:flex-row justify-between sm:w-full">
        <div className="text-3xl flex justify-between font-semibold mb-6 sm:ml-56">Available Products</div>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-4 px-4 py-2 border rounded w-[100px ] sm:w-[350px] hover:shadow-md hover:border-gray-200"
        />
      </div>

      <div className="flex justify-start flex-col gap-3">
        <div className="text-3xl flex justify-start">Search by Category</div>
        <div className="imgsec flex gap-6 mt-6 rounded-full">
          <img
            src="/assets/chicken_vector2.jpg"
            onClick={() => { setSearchQuery('chicken') }}
            className={`sm:w-40 sm:h-40 w-20 h-20 rounded-full ${searchQuery === 'chicken' ? 'border-8 border-gray-500 transition-all duration-300' : ''}`}
            alt="chicken"
          />
          <img
            src="/assets/mutton_vector.jpg"
            onClick={() => { setSearchQuery('mutton') }}
            className={`sm:w-40 sm:h-40 w-20 h-20 rounded-full ${searchQuery === 'mutton' ? 'border-8 border-gray-500 transition-all duration-300' : ''}`}
            alt="mutton"
          />
          <img
            src="/assets/fish_vector.jpg"
            onClick={() => { setSearchQuery('fish') }}
            className={`sm:w-40 sm:h-40 w-20 h-20 rounded-full ${searchQuery === 'fish' ? 'border-8 border-gray-500 transition-all duration-300' : ''}`}
            alt="fish"
          />
        </div>
      </div>

      {isLoading ? (
        <div className="text-center font-medium flex flex-col gap-6 justify-center items-center">
          <div className="font-bold text-xl">Please wait</div>
          <video autoPlay loop muted className="w-36 h-36 opacity-60 mb-6">
            <source src="assets/loading.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mt-14">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <div key={order._id} className="bg-white shadow-md border-2 border-gray-300 p-2 rounded-lg overflow-hidden flex flex-col">
                <img
                  src={prod_img[order.productCategory][order.productName]}
                  alt={order.productName}
                  className="sm:h-48 sm:w-full sm:object-cover"
                />
                <div className="p-4 flex-1 gap-14">
                  <h2 className="text-2xl font-semibold">{order.productCategory}</h2>
                  <h2 className="text-md font-semibold">{order.productName}</h2>
                  <p className="text-gray-600">{order.description}</p>
                  <p className="text-xl font-bold">{`Rs ${order.price} /Kg`}</p>
                  <p className="text-md text-gray-">From: {order.supplier.companyName}</p>
                  <p className="text-md text-gray-">Location: {order.supplier.address}</p>
                </div>
                <div className="p-4">
                  <button
                    className="bg-gray-100 text-gray-700 hover:bg-blue-600 transition-all duration-700 hover:text-white font-semibold px-4 py-2 rounded-md w-full"
                    onClick={() => handleNegotiate(order._id, order.supplier._id)}
                  >
                    Start Negotiation
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center">
              <p>No products found.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BuyerHome;
