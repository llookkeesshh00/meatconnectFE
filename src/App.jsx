import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import NavBar from './components/Navbar';
import HomePage from './pages/Home';
import Supplier from './pages/Supplier';
import Contracts from './pages/Contracts';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Aboutus from './pages/Aboutus';
import Buyer from './pages/Buyer';
import BuyerHome from './pages/Buyer/BuyerHome';
import BuyerContracts from './pages/Buyer/BuyerContracts';
import BuyerNavbar from './pages/Buyer/BuyerNavbar';
import BuyerTopNavbar from './pages/Buyer/BuyerTopNavbar';
import BuyerTracking from './pages/Buyer/BuyerTracking';
import SupplierNavbar from './pages/Supplier/SupplierNavbar';
import SupplierTopNavbar from './pages/Supplier/SupplierTopNavbar';
import SupplierHome from './pages/Supplier/SupplierHome';
import SupplierUploadProduct from './pages/Supplier/SupplierUploadProduct';
import SupplierOders from './pages/Supplier/SupplierOders';







function App() {
  const [logged, setLogged] = useState(true);
  const [role, setrole] = useState('supplier')

  return (
   
    <div className="flex flex-col h-screen ">
       
      {!logged && <NavBar />} 
      
      {logged && role=='buyer'&&  <BuyerTopNavbar className="w-full fixed" />}
      {logged && role=='supplier'&&  <SupplierTopNavbar className="w-full fixed" />}
      
      <div className="flex flex-1">
        {logged &&  role=='buyer' && <BuyerNavbar className="w-64 sticky" />}       
        {logged &&  role=='supplier' && <SupplierNavbar className="w-64 sticky" />}       
        <div className=" w-full overflow-y-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/suppliers" element={<Supplier />} />
            <Route path="/buyer/buyerHome" element={<BuyerHome />} />
            <Route path="/buyers" element={<Buyer />} />
            <Route path="/contracts" element={<Contracts />} />
            <Route path="/about-us" element={<Aboutus />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/buyercontracts" element={<BuyerContracts />} />
            <Route path="/buyertracking" element={<BuyerTracking />} />



            <Route path="/supplier/supplierHome" element={<SupplierHome />} />
            <Route path='/supplieruploadproducts' element={<SupplierUploadProduct/>}/>
            <Route path='/supplierproducts' element={<SupplierOders/>}/>


          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
