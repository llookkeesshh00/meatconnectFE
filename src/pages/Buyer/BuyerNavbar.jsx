import React from 'react';
import { useNavigate } from 'react-router-dom';

const BuyerNavbar = () => {
    const navigate = useNavigate();

    return (
        <div className="container bg-purple-00 min-h-[100vh] flex flex-col w-1/4 p-2 border-r-2 border-purple-300">
            <div className="p-2 flex flex-col gap-3">
                <div onClick={() => { navigate('/buyercontracts') }} className="item flex gap-6 p-2 hover:bg-purple-200 hover:rounded-lg hover:shadow-lg transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                        <path d="M240-80q-50 0-85-35t-35-85v-120h120v-560h600v680q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-600H320v480h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h360v80H360Zm0 120v-80h360v80H360ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm0 0h-40 400-360Z" />
                    </svg>
                    <div className="text font-semibold text-purple-500">Contract</div>
                </div>

                <div onClick={() => { navigate('/buyertracking') }} className="item flex gap-6 p-2 hover:bg-purple-200 hover:rounded-lg hover:shadow-lg transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                        <path d="M593-80q-24 0-46-9t-39-26L304-320l33-34q14-14 34-19t40 0l69 20v-287q0-17 11.5-28.5T520-680q17 0 28.5 11.5T560-640v393l-98-28 103 103q6 6 13 9t15 3h167q33 0 56.5-23.5T840-240v-160q0-17 11.5-28.5T880-440q17 0 28.5 11.5T920-400v160q0 66-47 113T760-80H593Zm7-280v-160q0-17 11.5-28.5T640-560q17 0 28.5 11.5T680-520v160h-80Zm120 0v-120q0-17 11.5-28.5T760-520q17 0 28.5 11.5T800-480v120h-80Zm40 200H565h195Zm-600-40q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h600q33 0 56.5 23.5T840-760v160h-80v-160H160v480h72l79 80H160Z" />
                    </svg>
                    <div className="text font-semibold text-purple-500">Track/Shipments</div>
                </div>

                <div onClick={() => { navigate('/buyernotifications') }} className="item flex gap-6 p-2 hover:bg-purple-200 hover:rounded-lg hover:shadow-lg transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                        <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
                    </svg>
                    <div className="text font-semibold text-purple-500">Notifications</div>
                </div>

                <div onClick={() => { navigate('/buyerchathome') }} className="item flex gap-6 p-2 hover:bg-purple-200 hover:rounded-lg hover:shadow-lg transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                        <path d="m480-80-10-120h-10q-142 0-241-99t-99-241q0-142 99-241t241-99q71 0 132.5 26.5t108 73q46.5 46.5 73 108T800-540q0 75-24.5 144t-67 128q-42.5 59-101 107T480-80Zm80-146q71-60 115.5-140.5T720-540q0-109-75.5-184.5T460-800q-109 0-184.5 75.5T200-540q0 109 75.5 184.5T460-280h100v54Zm-101-95q17 0 29-12t12-29q0-17-12-29t-29-12q-17 0-29 12t-12 29q0 17 12 29t29 12Zm-29-127h60q0-30 6-42t38-44q18-18 30-39t12-45q0-51-34.5-76.5T460-720q-44 0-74 24.5T344-636l56 22q5-17 19-33.5t41-16.5q27 0 40.5 15t13.5 33q0 17-10 30.5T480-558q-35 30-42.5 47.5T430-448Zm30-65Z" />
                    </svg>
                    <div className="text font-semibold text-purple-500">Your chats</div>
                </div>
            </div>
        </div>
    );
};

export default BuyerNavbar;
    