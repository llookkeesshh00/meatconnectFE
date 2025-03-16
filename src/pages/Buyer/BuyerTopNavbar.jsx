import React from 'react';
import { useNavigate } from 'react-router-dom';

const BuyerTopNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
      <div className="topnavbar   text-sm sm:text-base drop-shadow-lg rounded-l flex justify-between  p-3 bg-white   items-center gap-16">
        {/* Dashboard Button */}
        <div className="text-purple-900 sm:text-base text-sm font-bold">Hey Buyer!
        </div>
        <div className='flex items-center sm:gap-10 gap-2 text-sm sm:text-base'>
          <div
            className="item flex items-center gap-1  transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => navigate('/buyerdashboard')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
              <path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z" />
            </svg>
            <div className="text font-semibold text-purple-500 hover:text-purple-700 transition-colors">Dashboard</div>
          </div>

          {/* Profile Button */}
          <div
            className="item flex items-center gap-1 transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => navigate('/buyerprofile')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
              <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
            </svg>
            <div className="text font-semibold text-purple-900 hover:text-purple-700 transition-colors">
              {localStorage.getItem('name') || 'Profile'}
            </div>
          </div>

          {/* Logout Button */}
          <div onClick={handleLogout} className="item flex items-center gap-1 transition-transform transform hover:scale-105 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
            </svg>
            <div className="text font-semibold text-purple-500 hover:text-purple-700 transition-colors">Logout</div>
          </div>
        </div>
    </div>
  );
};

export default BuyerTopNavbar;
