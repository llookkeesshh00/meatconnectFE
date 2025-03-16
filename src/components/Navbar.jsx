import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import { Menu, X } from 'lucide-react'; // Icons for hamburger menu

const NavBar = () => {
  const [menu, setMenu] = useState("");
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [role, setRole] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const switchToLogin = () => {
    setLogin(true);
    setSignup(false);
  };

  const switchToSignup = () => {
    setLogin(false);
    setSignup(true);
  };

  const terminate = () => {
    setLogin(false);
    setSignup(false);
  };

  return (
    <nav className="bg-white shadow-md relative">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-purple-500">
          <Link to="/">Meat Connect</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6">
          {[
            { name: "home", path: "/" },
            { name: "about-us", path: "/about-us" },
            { name: "suppliers", path: "/suppliers" },
            { name: "buyers", path: "/buyers" },
            { name: "contracts", path: "/contracts" },
          ].map((item) => (
            <li
              key={item.name}
              onClick={() => setMenu(item.name)}
              className={menu === item.name ? "border-violet-600 border-b-2" : ""}
            >
              <Link to={item.path} className="text-gray-700 hover:text-purple-500 capitalize">
                {item.name.replace("-", " ")}
              </Link>
            </li>
          ))}
        </ul>

        {/* Sign up & Login Buttons */}
        <div className="hidden md:flex gap-5">
          <button onClick={() => setSignup(!signup)} className="text-gray-700 hover:text-purple-500">Sign up</button>
          <button onClick={() => setLogin(!login)} className="text-gray-700 hover:text-purple-500">Login</button>
        </div>
      </div>

      {/* Mobile Menu Dropd own */}
      {isMobileMenuOpen && (
        <ul className="md:hidden bg-white shadow-lg absolute w-full left-0 top-16 space-y-4 p-4">
          {["home", "about-us", "suppliers", "buyers"].map((item) => (
            <li key={item} onClick={() => { setMenu(item); setIsMobileMenuOpen(false); }}>
              <Link
                to={item === "home" ? "/" : `/${item}`}
                className="block text-gray-700 hover:text-purple-500 capitalize"
              >
                {item.replace("-", " ")}
              </Link>
            </li>
          ))}
          <hr />
          <li>
            <button onClick={() => { setSignup(!signup); setIsMobileMenuOpen(false); }} className="text-gray-700 hover:text-purple-500">
              Sign up
            </button>
          </li>
          <li>
            <button onClick={() => { setLogin(!login); setIsMobileMenuOpen(false); }} className="text-gray-700 hover:text-purple-500">
              Login
            </button>
          </li>
        </ul>
      )}


      {/* Overlay for Login & Signup */}
      {(signup || login) && (
        <div className="fixed bg-black inset-0 bg-opacity-70 flex justify-center items-center z-50 pt-10">
          <div className="bg-purple-200 rounded-lg shadow-lg w-full max-w-md relative p-6">

            <button onClick={terminate} className="absolute top-4 right-4 text-gray-700 hover:text-gray-900">
              <X size={28} />
            </button>

            {login && <Login role={role} switchToSignup={switchToSignup} terminate={terminate} />}

            {signup && (
              <div className="text-center ">
                <h1 className="text-3xl font-semibold text-black mb-4">Please select your role</h1>
                <div className="flex justify-center gap-4">
                  <button
                    className={`p-2 text-black font-semibold rounded-md ${role === 'buyer' ? 'border-b-4 border-black' : 'bg-purple-300 hover:bg-purple-400'}`}
                    onClick={() => setRole('buyer')}
                  >
                    Buyer
                  </button>
                  <button
                    className={`p-2 text-black font-semibold rounded-md ${role === 'supplier' ? 'border-b-4 border-black' : 'bg-purple-300 hover:bg-purple-400'}`}
                    onClick={() => setRole('supplier')}
                  >
                    Supplier
                  </button>
                </div>
                {role && <Signup role={role} switchToLogin={switchToLogin} />}
              </div>
            )}
          </div>
        </div>
      )}

    </nav>
  );
};

export default NavBar;
