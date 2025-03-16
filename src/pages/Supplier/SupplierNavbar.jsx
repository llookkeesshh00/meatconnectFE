import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_API_URL;

const SupplierNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [path, setPath] = useState('');
  const [count, setCount] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleWindowLoad = () => {
      setPath(location.pathname);
    };

    const getNotification = async () => {
      const res = await fetch(`${apiUrl}/contract/getContracts/supplier/pending/notifications`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();
      if (data.ok) {
        setCount(data.count);
      } else {
        setCount(0);
        console.log('Error fetching notifications');
      }
    };

    handleWindowLoad();
    getNotification();
  }, [location]);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <div className="container  min-h-screen flex flex-col  p-2 w-1/4 shadow-2xl border-purple-300 text-sm sm:text-base">
      <div className="p-2 flex flex-col gap-3">
        <div
          onClick={() => { navigate('/supplieruploadproducts'); }}
          className={path === '/supplieruploadproducts' ? 'item flex gap-6 p-2 bg-purple-200 rounded-lg shadow-md transition duration-300' : 'item flex gap-6 p-2 hover:bg-purple-200 hover:rounded-lg hover:shadow-md transition duration-300'}
        >
          <svg className='hidden sm:flex' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
            <path d="M440-160v-326L336-382l-56-58 200-200 200 200-56 58-104-104v326h-80ZM160-600v-120q0-33 23.5-56.5T240-800h480q33 0 56.5 23.5T800-720v120h-80v-120H240v120h-80Z" />
          </svg>
          <div className="text font-semibold text-purple-500">Upload</div>
        </div>

        <div
          onClick={() => { navigate('/supplierproducts'); }}
          className={path === '/supplierproducts' ? 'item flex gap-6 p-2 bg-purple-200 rounded-lg shadow-md transition duration-300' : 'item flex gap-6 p-2 hover:bg-purple-200 hover:rounded-lg hover:shadow-md transition duration-300'}
        >
          <svg  className='hidden sm:flex' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
            <path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" />
          </svg>
          <div className="text font-semibold text-purple-500">Your Products</div>
        </div>

        <div
          onClick={() => { navigate('/suppliercontracts'); }}
          className={path === '/suppliercontracts' ? 'item flex gap-6 p-2 bg-purple-200 rounded-lg shadow-md transition duration-300' : 'item flex gap-6 p-2 hover:bg-purple-200 hover:rounded-lg hover:shadow-md transition duration-300'}
        >
          <svg  className='hidden sm:flex' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
            <path d="M240-80q-50 0-85-35t-35-85v-120h120v-560h600v680q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-600H320v480h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h360v80H360Zm0 120v-80h360v80H360ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm0 0h-40 400-360Z" />
          </svg>
          <div className="text font-semibold text-purple-500">Your Contracts</div>
        </div>

        <div
          onClick={() => { navigate('/suppliernotifications'); }}
          className={path === '/suppliernotifications' ? 'relative item flex gap-6 p-2 bg-purple-200 rounded-lg shadow-md transition duration-300' : 'relative item flex gap-6 p-2 hover:bg-purple-200 hover:rounded-lg hover:shadow-md transition duration-300'}
        >
          <svg  className='hidden sm:flex' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
            <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
          </svg>
          <div className="text font-semibold text-purple-500">Notifications</div>

          {count > 0 && (
            <div className="bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full absolute -top-1 right-0">
              {count}
            </div>
          )}
        </div>

        <div
          onClick={() => { navigate('/supplierDelivery'); }}
          className={path === '/supplierDelivery' ? 'item flex gap-6 p-2 bg-purple-200 rounded-lg shadow-md transition duration-300' : 'item flex gap-6 p-2 hover:bg-purple-200 hover:rounded-lg hover:shadow-md transition duration-300'}
        >
          <svg className='hidden sm:flex' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
            <path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z" />
          </svg>
          <div className="text font-semibold text-purple-500">Your Payments</div>
        </div>
      </div>

    </div>
  );
};

export default SupplierNavbar;
