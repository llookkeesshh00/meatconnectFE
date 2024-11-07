import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import './App.css';
import { useState } from 'react';

import NavBar from './components/Navbar';
import HomePage from './pages/Home';
import Supplier from './pages/Supplier';
import Contracts from './pages/Contracts';
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
import SupplierProducts from './pages/Supplier/SupplierProducts';
import SupplierContracts from './pages/Supplier/SupplierContracts';

import SupplierNotifications from './pages/Supplier/SupplierNotifications';
import BuyerChatHome from './pages/Buyer/BuyerChatHome';
import BuyerVerification from './pages/Buyer/BuyerVerification';
import BuyerDigitalContract from './pages/Buyer/BuyerDigitalContract';
import SuccessMessage from './pages/success';
import BuyerAddress from './pages/Buyer/BuyerAddress';
import BuyerOrder from './pages/Buyer/BuyerOrder';

function App() {
  const [logged, setLogged] = useState(false);
  const [role, setrole] = useState('')
  const location = useLocation();

  useEffect(() => {
    const role = localStorage.getItem('role')
    if (role) {
      console.log(role)
      setrole(role)
      setLogged(true);
    }
    else {
      setrole('');
      setLogged(false)
    }

  }, [location])


  useEffect(() => {
    if (location.pathname === '/') {
      const confirmLogout = window.confirm("You will be logged out. Are you sure?");
      if (confirmLogout) {
        localStorage.clear();
        setLogged(false);
        setrole('');
      } else {
      }
    }
  }, [location.pathname]);

  return (

    <div className="flex flex-col min-h-screen ">

      {!logged && <NavBar />}

      {logged && role == 'buyer' && <BuyerTopNavbar className="w-full fixed" />}
      {logged && role == 'supplier' && <SupplierTopNavbar className="w-full fixed" />}

      <div className="flex flex-1">
        {logged && role == 'buyer' && <BuyerNavbar className="w-64 sticky" />}
        {logged && role == 'supplier' && <SupplierNavbar className="w-64 sticky" />}
        <div className=" w-full mx-auto overflow-y-auto">
          
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/buyer/buyerHome" element={<BuyerHome />} />
              <Route path="/buyers" element={<Buyer />} />
              <Route path="/buyercontracts" element={<BuyerContracts />} />
              <Route path="/buyertracking" element={<BuyerTracking />} />

              <Route path="/buyerchathome" element={<BuyerChatHome />} />
              <Route path="/buyerverification" element={<BuyerVerification />} />
              <Route path="/buyerdigitalcontract" element={<BuyerDigitalContract />} />
              <Route path="/buyeraddresses" element={<BuyerAddress />} />

              <Route path="/buyerOrder" element={<BuyerOrder />} />


              <Route path="/suppliers" element={<Supplier />} />
              <Route path="/supplier/supplierHome" element={<SupplierHome />} />
              <Route path='/supplieruploadproducts' element={<SupplierUploadProduct />} />
              <Route path='/supplierproducts' element={<SupplierProducts />} />
              <Route path='/suppliercontracts' element={<SupplierContracts />} />
              <Route path="/suppliernotifications" element={<SupplierNotifications />} />

              <Route path='/sucess' element={<SuccessMessage />} />
              <Route path="/contracts" element={<Contracts />} />
              <Route path="/about-us" element={<Aboutus />} />

            </Routes>
          
        </div>
      </div>
    </div>
  );
}

export default App;
