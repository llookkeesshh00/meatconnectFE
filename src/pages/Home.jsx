import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cover bg-center h-[400px] w-full mt-4 shadow-xl" style={{ backgroundImage: `url(./assets/image9.jpg)` }}>
        <div className="container mx-auto flex flex-col justify-center h-full text-center">
          <h1 className="text-purple-400  text-5xl font-bold">Meat Supply Connection Farm</h1>
          <p className="text-purple-400 text-xl mt-4">Connecting farms with reliable meat supply partners.</p>
          <button className='flex justify-center' onClick={() => { toast.error('please sign up') }}>
            <Link className="mt-6 w-[200px]  bg-gray-100 text-gray-700 hover:bg-purple-600 transition-all duration-700 hover:text-white font-semibold px-4 py-2 rounded-md">
              Explore Contracts
            </Link>
          </button>
        </div>
      </section>

      {/* Streamline Your Supply Section
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-purple-500">Streamline Your Supply</h2>
        <p className="mt-4 text-gray-700">Discover how MeatConnect can revolutionize your supply chain with our tailored solutions.</p>
        <Link onClick={() => { toast.error('please sign up') }} className="mt-6  inline-block bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
          Explore Features
        </Link>
      </section> */}

      <section className="p-16 ">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">Why Choose Us!</h3>
          <div className="flex flex- justify-center">
            <div className="bg-white p-4 shadow-2xl m-2 w-full md:w-1/4">
              <img src="./assets/h1.jpg" alt="High-Quality Meat Products" className="mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">High-Quality Meat Products</h4>
              <p className="text-gray-700">We provide premium quality meat sourced directly from trusted suppliers which are verifed according to food safety regulations by GOVT of India</p>
            </div>

            <div className="bg-white p-4 shadow-2xl m-2 w-full md:w-1/4">
              <img src="./assets/h3.jpg" alt="Automated Billing" className="mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Automation of Bills at the End of Each Month</h4>
              <p className="text-gray-700">Enjoy automated, transparent billing processes that ensure timely, accurate invoicing every month.</p>
            </div>
            <div className="bg-white p-4 shadow-2xl m-2 w-full md:w-1/4">
              <img src="./assets/h2.jpg" alt="Efficient Contract Management" className="mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Efficient Contract Management and Payments</h4>
              <p className="text-gray-700">Our system streamlines contract handling and offers seamless, secure payment options for your convenience.</p>
            </div>
            <div className="bg-white p-4 shadow-2xl m-2 w-full md:w-1/4">
              <img src="./assets/h4.jpg" alt="Reliable Delivery" className="mx-auto mb-4 h-[45vh]" />
              <h4 className="text-xl font-semibold mb-2">Timely and Reliable Delivery</h4>
              <p className="text-gray-700">We guarantee prompt and dependable delivery to meet your business requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="p-16 ">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-4 shadow-2xl">
              <img src="./assets/explore.png" alt="Explore Contracts" className="mx-auto mb-4" /> {/* Dummy image */}
              <h4 className="text-xl font-semibold mb-2">Explore Contracts</h4>
              <p className="text-gray-700">Browse through a variety of contracts tailored to your needs.</p>
              <Link  onClick={() => { toast.error('please sign up') }} className="mt-4 inline-block text-purple-500">Learn More</Link>
            </div>
            <div className="bg-white p-4 shadow-2xl">
              <img src="./assets/select.png" alt="Select Contract" className="mx-auto mb-4" /> {/* Dummy image */}
              <h4 className="text-xl font-semibold mb-2">Select Contract</h4>
              <p className="text-gray-700">Choose the best contract that suits your business requirements.</p>
              <Link  onClick={() => { toast.error('please sign up') }} className="mt-4 inline-block text-purple-500">View Options</Link>
            </div>
            <div className="bg-white p-4 shadow-2xl">
              <img src="./assets/delivery.png" alt="Take Delivery" className="mx-auto mb-4" /> {/* Dummy image */}
              <h4 className="text-xl font-semibold mb-2">Take Delivery</h4>
              <p className="text-gray-700">Efficient and timely delivery as per the contract terms.</p>
              <Link  onClick={() => { toast.error('please sign up') }} className="mt-4 inline-block text-purple-500">Track Delivery</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Join Today Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-purple-500">Join Today!</h2>
        <p className="m-4 text-gray-700">Connect with fellow meat lovers and explore exclusive deals and community events.</p>
        <Link  onClick={() => { toast.error('please sign up') }} className="bg-gray-100 text-gray-700 hover:bg-purple-600 transition-all duration-700 hover:text-white font-semibold px-4 py-2 rounded-md">
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
