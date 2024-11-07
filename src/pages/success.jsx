import React from 'react';

const SuccessMessage = ({prop}) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-sm text-center">
                <h2 className="text-2xl font-bold text-purple-600 mb-4">
                    🎉 Success!
                </h2>
                <p className="text-gray-700 mb-6">
                    ${prop}
                </p>
                
            </div>
        </div>
    );
};

export default SuccessMessage;
