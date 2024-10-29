import React, { useState } from 'react'
import { Link } from 'react-router-dom'; // Using Link from react-router-dom
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const NavBar = () => {
  const [menu, setmenu] = useState("")
  const [login, setlogin] = useState(false)
  const [signup, setsignup] = useState(false)
  const [role, setrole] = useState("")
  
  
  const switchToLogin=()=>{
    setlogin(true);
    setsignup(false);

  }
  const switchToSignup=()=>{
    setlogin(false);
    setsignup(true);

  }
  const terminate=()=>{
    setlogin(false);
    setsignup(false);

  }

  return (
    <nav className="bg-white shadow-md relative">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-purple-500">
          <Link to="/">MeatConnect</Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li onClick={() => { setmenu("home") }} className={menu === "home" ? "border-violet-600 border-b-2 " : ""} > <Link to="/" className="text-gray-700 hover:text-purple-500" >Home</Link></li>
          <li onClick={() => { setmenu("about-us") }} className={menu === "about-us" ? "border-violet-600 border-b-2 " : ""} > <Link to="/about-us" className="text-gray-700 hover:text-purple-500" >About Us</Link></li>
          <li onClick={() => { setmenu("suppliers") }} className={menu === "suppliers" ? "border-violet-600 border-b-2 " : ""} ><Link to="/suppliers" className="text-gray-700 hover:text-purple-500">Suppliers</Link></li>
          <li onClick={() => { setmenu("buyers") }} className={menu === "buyers" ? "border-violet-600 border-b-2 " : ""} ><Link to="/buyers" className="text-gray-700 hover:text-purple-500">Buyers</Link></li>
          <li onClick={() => { setmenu("contracts") }} className={menu === "contracts" ? "border-violet-600 border-b-2" : ""} > <Link to="/contracts" className="text-gray-700 hover:text-purple-500">Contracts</Link>        </li>
        </ul>

        {/* Get In Touch Button */}
        <div className='flex gap-5'>
          <button onClick={() => { setsignup(!signup) }} className="text-gray-700 hover:text-purple-500">Sign up</button>
          <button onClick={() => { setlogin(!login) }} className="text-gray-700 hover:text-purple-500">Login</button>

        </div>
      </div>
      {(signup || login) && 
                <div className="fixed inset-0 bg-black opacity-70 z-2 ">
                 <svg  onClick={()=>{ setlogin(false);setsignup(false);}} className='absolute right-12 top-4' xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z"/></svg>
                </div>}

      <div className="popup absolute top-[19px] left-[400px] w-1/3">
        {login && <Login role={role} switchToSignup={switchToSignup} terminate={terminate} />}
      </div>

      <div className="popup absolute top-[10px]  left-[400px] w-1/3  rounded-lg shadow-lg">
        {signup &&
          <div className="z-10 m-2 bg-purple-200">
            <div className="containeor p-10  ">
              <h1 className='text-3xl font-semibold text-black'>Please select your role</h1>
              <div className='mt-4'>
                <button className={role == 'buyer' ? 'border-b-4 border-black p-2 text-purple font-semibold ' : '  p-2 text-black font-semibold bg-purple-8900 hover:bg-purple-300 mr-2 rounded-md'} onClick={() => { setrole('buyer'); nav }}> Buyer  </button>
                <button className={role == 'supplier' ? 'border-b-4 p-2 border-black text-purpk font-semibold ' : '  p-2 text-black font-semibold  bg-purple-8080 hover:bg-purple-300 ml-2 rounded-md'} onClick={() => { setrole('supplier'); nav }}> Supplier  </button>
              </div>
            </div>
           { role==='supplier'&& <Signup role={role} switchToLogin={switchToLogin}/>}
           {role==='buyer' && <Signup role={role} switchToLogin={switchToLogin}/>}
          </div>

        }

      </div>


    </nav>
  );
};

export default NavBar;
