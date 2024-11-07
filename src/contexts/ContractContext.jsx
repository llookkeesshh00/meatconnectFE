// src/contexts/ContractContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the ContractContext
const ContractContext = createContext();

// ContractProvider component that will wrap the app
export const ContractProvider = ({ children }) => {
  const [contract, setContract] = useState(null);  // State for the current contract

  return (
    <ContractContext.Provider value={{ contract, setContract }}>
      {children}
    </ContractContext.Provider>
  );
};

// Custom hook to use the contract context
export const useContract = () => {
  const context = useContext(ContractContext);

  // If context is undefined, it means the hook is being used outside of ContractProvider
  if (!context) {
    throw new Error('useContract must be used within a ContractProvider');
  }

  return context;  // Returns an object { contract, setContract }
};
