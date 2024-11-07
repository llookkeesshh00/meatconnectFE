import React from 'react';
import { useNavigate } from 'react-router-dom';

const BuyerNavbar = () => {
    const navigate = useNavigate();

    return (
        <div className="container bg-purple-00 min-h-[100vh] flex flex-col w-1/4 p-2 border-r-2 border-purple-300">
            <div className="p-2 flex flex-col gap-3">
                <div onClick={() => { navigate('/buyer/buyerhome') }} className="item flex gap-6 p-2 hover:bg-purple-200 hover:rounded-lg hover:shadow-lg transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M180-120q-25 0-42.5-17.5T120-180v-76l160-142v278H180Zm140 0v-160h320v160H320Zm360 0v-328L509-600l121-107 190 169q10 9 15 20.5t5 24.5v313q0 25-17.5 42.5T780-120H680ZM120-310v-183q0-13 5-25t15-20l300-266q8-8 18.5-11.5T480-819q11 0 21.5 3.5T520-804l80 71-480 423Z"/></svg>
                    <div className="text font-semibold text-purple-500">Home</div>
                </div>

                <div onClick={() => { navigate('/buyercontracts') }} className="item flex gap-6 p-2 hover:bg-purple-200 hover:rounded-lg hover:shadow-lg transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                        <path d="M240-80q-50 0-85-35t-35-85v-120h120v-560h600v680q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-600H320v480h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h360v80H360Zm0 120v-80h360v80H360ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm0 0h-40 400-360Z" />
                    </svg>
                    <div className="text font-semibold text-purple-500">Contract</div>
                </div>

                <div onClick={() => { navigate('/buyertracking') }} className="item flex gap-6 p-2 hover:bg-purple-200 hover:rounded-lg hover:shadow-lg transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M240-160q-50 0-85-35t-35-85H40v-440q0-33 23.5-56.5T120-800h560v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T280-280q0-17-11.5-28.5T240-320q-17 0-28.5 11.5T200-280q0 17 11.5 28.5T240-240ZM120-360h32q17-18 39-29t49-11q27 0 49 11t39 29h272v-360H120v360Zm600 120q17 0 28.5-11.5T760-280q0-17-11.5-28.5T720-320q-17 0-28.5 11.5T680-280q0 17 11.5 28.5T720-240Zm-40-200h170l-90-120h-80v120ZM360-540Z"/></svg>
                    <div className="text font-semibold text-purple-500">Track/Shipments</div>
                </div>

                <div onClick={() => { navigate('/buyernotifications') }} className="item flex gap-6 p-2 hover:bg-purple-200 hover:rounded-lg hover:shadow-lg transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                        <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
                    </svg>
                    <div className="text font-semibold text-purple-500">Notifications</div>
                </div>

                <div onClick={() => { navigate('/buyeraddresses') }} className="item flex gap-6 p-2 hover:bg-purple-200 hover:rounded-lg hover:shadow-lg transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-120v-560h240v-80l120-120 120 120v240h240v400H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"/></svg>
                    <div className="text font-semibold text-purple-500">Your address</div>
                </div>
            </div>
        </div>
    );
};

export default BuyerNavbar;
