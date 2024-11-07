import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cover bg-center h-[400px] w-full mt-4" style={{ backgroundImage: `url(./assets/background.png)` }}> 
        <div className="container mx-auto flex flex-col justify-center h-full text-center">
          <h1 className="text-purple-700  text-5xl font-bold">Meat Supply Connection Farm</h1>
          <p className="text-purple-500 text-xl mt-4">Connecting farms with reliable meat supply partners.</p>
          <button className='flex justify-center'>
            <Link to="/signup" className="mt-6 w-[200px]  flex justify-center bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
              Explore Contracts
            </Link>
          </button>
        </div>
      </section>

      {/* Streamline Your Supply Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-purple-500">Streamline Your Supply</h2>
        <p className="mt-4 text-gray-700">Discover how MeatConnect can revolutionize your supply chain with our tailored solutions.</p>
        <Link to="/features" className="mt-6  inline-block bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
          Explore Features
        </Link>
      </section>

      {/* How It Works Section */}
      <section className="p-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-4 shadow-md">
              <img src="./assets/explore.png" alt="Explore Contracts" className="mx-auto mb-4" /> {/* Dummy image */}
              <h4 className="text-xl font-semibold mb-2">Explore Contracts</h4>
              <p className="text-gray-700">Browse through a variety of contracts tailored to your needs.</p>
              <Link to="/learn-more" className="mt-4 inline-block text-purple-500">Learn More</Link>
            </div>
            <div className="bg-white p-4 shadow-md">
              <img src="./assets/select.png" alt="Select Contract" className="mx-auto mb-4" /> {/* Dummy image */}
              <h4 className="text-xl font-semibold mb-2">Select Contract</h4>
              <p className="text-gray-700">Choose the best contract that suits your business requirements.</p>
              <Link to="/view-options" className="mt-4 inline-block text-purple-500">View Options</Link>
            </div>
            <div className="bg-white p-4 shadow-md">
              <img src="./assets/delivery.png" alt="Take Delivery" className="mx-auto mb-4" /> {/* Dummy image */}
              <h4 className="text-xl font-semibold mb-2">Take Delivery</h4>
              <p className="text-gray-700">Efficient and timely delivery as per the contract terms.</p>
              <Link to="/track-delivery" className="mt-4 inline-block text-purple-500">Track Delivery</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Join Today Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-purple-500">Join Today!</h2>
        <p className="m-4 text-gray-700">Connect with fellow meat lovers and explore exclusive deals and community events.</p>
        <Link to="/signup" className=" bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
          Buy and Connect
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <img src="https://via.placeholder.com/150x50" alt="MeatConnect" className="mx-auto mb-4" /> {/* Dummy logo */}
          <ul className="flex justify-center space-x-6 text-sm">
            <li><Link to="/pricing" className="hover:underline">Pricing</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/features" className="hover:underline">Features</Link></li>
            <li><Link to="/help" className="hover:underline">Help Center</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQs</Link></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
