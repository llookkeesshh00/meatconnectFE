import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cover bg-center h-[400px] sm:w-full mt-4 shadow-xl opacity-8 0" style={{ backgroundImage: `url(./assets/image9.jpg)` }}>
        <div className="container mx-auto flex flex-col justify-center h-full text-center z-50">
          <h1 className="text-white font   text-5xl font-extrabold">Meat Connect <span className='text-purple-100'> (A B2B based firm)</span></h1>
          <p className="text-white text-xl mt-4">Connecting Buyers  with reliable meat supply partners.</p>
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
      <section className="p-16">
        <div className="container mx-auto text-center ">
          <h3 className="text-3xl font-bold mb-8">Why Choose Us!</h3>
          <div className="sm:flex  sm:flex-row flex flex-col  justify-center">
            <div className="bg-white p-4 shadow-2xl m-2 w-full md:w-1/4 hover:scale-105 hover:shadow-2xl transition-transform duration-500">
              <img src="./assets/h1.jpg" alt="High-Quality Meat Products" className="mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">High-Quality Meat Products</h4>
              <p className="text-gray-700">We provide premium quality meat sourced directly from trusted suppliers verified according to food safety regulations by the GOVT of India.</p>
            </div>

            <div className="bg-white p-4 shadow-2xl m-2 w-full md:w-1/4 hover:scale-105 hover:shadow-2xl transition-transform duration-500">
              <img src="./assets/h3.jpg" alt="Automated Billing" className="mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Automation of Bills at the End of Each Month</h4>
              <p className="text-gray-700">Enjoy automated, transparent billing processes that ensure timely, accurate invoicing every month.</p>
            </div>

            <div className="bg-white p-4 shadow-2xl m-2 w-full md:w-1/4 hover:scale-105 hover:shadow-2xl transition-transform duration-500">
              <img src="./assets/h2.jpg" alt="Efficient Contract Management" className="mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Efficient Contract Management and Payments</h4>
              <p className="text-gray-700">Our system streamlines contract handling and offers seamless, secure payment options for your convenience.</p>
            </div>

            <div className="bg-white p-4 shadow-2xl m-2 w-full md:w-1/4 hover:scale-105 hover:shadow-2xl transition-transform duration-500">
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
          <h3 className="text-3xl font-bold mb-8"> How It Works ?</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-4 shadow-2xl">
              <img src="./assets/explore.png" alt="Explore Contracts" className="mx-auto mb-4" /> 
              <h4 className="text-xl font-semibold mb-2">Explore Contracts</h4>
              <p className="text-gray-700">Browse through a wide variety of contracts tailored to your needs uploaded by differnt types of verified suppliers.</p>
              <Link onClick={() => { toast.error('please sign up') }} className="mt-4 inline-block text-purple-500">Learn More</Link>
            </div>
            <div className="bg-white p-4 shadow-2xl">
              <img src="./assets/select.png" alt="Select Contract" className="mx-auto mb-4" /> 
              <h4 className="text-xl font-semibold mb-2">Select Contract and Negotiate</h4>
              <p className="text-gray-700">Choose the best contract that suits your business requirements and you can order meat over regular periods till current contract ends.</p>
              <Link onClick={() => { toast.error('please sign up') }} className="mt-4 inline-block text-purple-500">View Options</Link>
            </div>
            <div className="bg-white p-4 shadow-2xl">
            <div className="bg-white p-4 shadow-2xl">
              <img src="./assets/payment.jpeg " alt="Take Delivery" className="h-2/5   mx-auto mb-4" /> 
              <h4 className="text-xl font-semibold mt-6 mb-2">Make Payments  </h4>
              <p className="text-gray-700 text-center">Make organized and legal payments based on Negotiation terms i.e monthy ,weekly,quaterly agreements</p>
              <Link onClick={() => { toast.error('please sign up') }} className="mt-4 inline-block text-purple-500">Track Delivery</Link>
            </div>
              <img src="./assets/delivery.png" alt="Take Delivery" className="mx-auto mb-4" /> 
              <h4 className="text-xl font-semibold mb-2">Take Delivery </h4>
              <p className="text-gray-700">Efficient and timely delivery as per the contract terms.</p>
              <Link onClick={() => { toast.error('please sign up') }} className="mt-4 inline-block text-purple-500">Track Delivery</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Join Today Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-purple-500">Join Today!</h2>
        <p className="m-4 text-gray-700">Connect with fellow meat lovers and explore exclusive deals and community events.</p>
        <Link onClick={() => { toast.error('please sign up') }} className="bg-gray-100 text-gray-700 hover:bg-purple-600 transition-all duration-700 hover:text-white font-semibold px-4 py-2 rounded-md">
          Buy and Connect
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container  mx-auto text-center">


          <ul className=" sm:flex sm:flex-row justify-center  flex items-center flex-col space-x-6 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 64 64">
              <linearGradient id="8xesnh1A1UH5qzSU5Ofa6a_bPDnjFfpBByo_gr1" x1="32.5" x2="32.5" y1="-.378" y2="64.868" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset=".695" stop-color="#c822ff"></stop></linearGradient><path fill="url(#8xesnh1A1UH5qzSU5Ofa6a_bPDnjFfpBByo_gr1)" d="M55,33.5C55,45.91,44.91,56,32.5,56c-3.63,0-7.07-0.88-10.11-2.42l0.82-1.85 C26,53.18,29.15,54,32.5,54C43.8,54,53,44.8,53,33.5S43.8,13,32.5,13S12,22.2,12,33.5c0,3.98,1.16,7.67,3.12,10.81v0.01 l-0.97,2.14C11.54,42.8,10,38.33,10,33.5C10,21.09,20.09,11,32.5,11S55,21.09,55,33.5z"></path><linearGradient id="8xesnh1A1UH5qzSU5Ofa6b_bPDnjFfpBByo_gr2" x1="40" x2="40" y1="-7.096" y2="52.554" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset=".492" stop-color="#aab9ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><polygon fill="url(#8xesnh1A1UH5qzSU5Ofa6b_bPDnjFfpBByo_gr2)" points="37,48 43,42.17 43,48"></polygon><linearGradient id="8xesnh1A1UH5qzSU5Ofa6c_bPDnjFfpBByo_gr3" x1="27.58" x2="27.58" y1="-8.029" y2="51.291" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset=".492" stop-color="#aab9ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><polygon fill="url(#8xesnh1A1UH5qzSU5Ofa6c_bPDnjFfpBByo_gr3)" points="37,16 28,36 37,36 37,33 43,39 37,45 37,42 25.3,42 19,56 12,56 36.18,4 43.16,4 43,36 37,30"></polygon>
            </svg>
            <li><Link to="/pricing" className="underline ">Pricing</Link></li>
            <li><Link to="/about-us" className="underline u">About Us</Link></li>
            <li><Link to="/features" className="underline">Features</Link></li>
            <li><Link to="/help" className="underline">Help Center</Link></li>
            <li><Link to="/contact" className="underline">Contact Us</Link></li>
            <li><Link to="/faq" className="underline">FAQs</Link></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
