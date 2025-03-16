import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const BuyerNavbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [path, setpath] = useState('');


    useEffect(() => {

        const handleWindowLoad = () => {
            setpath(location.pathname)
        };


        handleWindowLoad()



    },);

    return (
        <div className="container bg-purple-00 border w-1/4 flex flex-col  p-2 border-r-2 border-purple-300">
            <div className="p-2 flex flex-col gap-3">
                {/* Home */}
                <div onClick={() => { navigate('/buyer/buyerhome') }}
                    className={`text-sm sm:text-base item flex gap-6 p-2 rounded-lg transition duration-300 
      ${path === '/buyer/buyerhome' ? 'bg-purple-200 shadow-md' : 'hover:bg-purple-200 hover:shadow-md'}`}
                >
                    <svg className="hidden sm:block" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                        <path d="M180-120q-25 0-42.5-17.5T120-180v-76l160-142v278H180Zm140 0v-160h320v160H320Zm360 0v-328L509-600l121-107 190 169q10 9 15 20.5t5 24.5v313q0 25-17.5 42.5T780-120H680ZM120-310v-183q0-13 5-25t15-20l300-266q8-8 18.5-11.5T480-819q11 0 21.5 3.5T520-804l80 71-480 423Z" />
                    </svg>
                    <div className="text font-semibold text-sm sm:text-base text-purple-500">Home</div>
                </div>

                {/* Contracts */}
                <div onClick={() => { navigate('/buyercontracts') }}
                    className={`item flex gap-6 p-2 rounded-lg transition duration-300 
      ${path === '/buyercontracts' ? 'bg-purple-200 shadow-md' : 'hover:bg-purple-200 hover:shadow-md'}`}
                >
                    <svg className="hidden sm:block" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                        <path d="M240-80q-50 0-85-35t-35-85v-120h120v-560h600v680q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-600H320v480h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h360v80H360Zm0 120v-80h360v80H360ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm0 0h-40 400-360Z" />
                    </svg>
                    <div className="text font-semibold text-sm sm:text-base text-purple-500">Contract</div>
                </div>

                {/* Tracking */}
                <div onClick={() => { navigate('/buyertracking') }}
                    className={`item flex gap-6 p-2 rounded-lg transition duration-300 
      ${path === '/buyertracking' ? 'bg-purple-200 shadow-md' : 'hover:bg-purple-200 hover:shadow-md'}`}
                >
                    <svg className="hidden sm:block" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                        <path d="M240-160q-50 0-85-35t-35-85H40v-440q0-33 23.5-56.5T120-800h560v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T280-280q0-17-11.5-28.5T240-320q-17 0-28.5 11.5T200-280q0 17 11.5 28.5T240-240ZM120-360h32q17-18 39-29t49-11q27 0 49 11t39 29h272v-360H120v360Zm600 120q17 0 28.5-11.5T760-280q0-17-11.5-28.5T720-320q-17 0-28.5 11.5T680-280q0 17 11.5 28.5T720-240Zm-40-200h170l-90-120h-80v120ZM360-540Z" />
                    </svg>
                    <div className="text font-semibold text-sm sm:text-base text-purple-500">Shipments</div>
                </div>

                {/* Summary */}
                <div onClick={() => { navigate('/buyersummary') }}
                    className={`item flex gap-6 p-2 rounded-lg transition duration-300 
      ${path === '/buyersummary' ? 'bg-purple-200 shadow-md' : 'hover:bg-purple-200 hover:shadow-md'}`}
                >
                    <svg className="hidden sm:block" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                        <path d="M320-600q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm0 160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0 160q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h440l200 200v440q0 33-23.5 56.5T760-120H200Zm0-80h560v-400H600v-160H200v560Zm0-560v160-160 560-560Z" />
                    </svg>
                    <div className="text font-semibold text-sm sm:text-base text-purple-500">Summary</div>
                </div>
                <div onClick={() => { navigate('/buyeraddresses') }}
                    className={`item flex gap-6 p-2 rounded-lg transition duration-300 
      ${path === '/buyeraddresses' ? 'bg-purple-200 shadow-md' : 'hover:bg-purple-200 hover:shadow-md'}`}
                >
                    <svg className="hidden sm:block" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z"/></svg>
                    <div className="text font-semibold text-sm sm:text-base text-purple-500">Addresses</div>
                </div>
            </div>

        </div>
    );
};

export default BuyerNavbar;