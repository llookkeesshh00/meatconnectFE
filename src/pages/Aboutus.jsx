import React from 'react';
import { toast } from 'react-toastify';
const AboutUs = () => {
  return (
    <div className="container mx-auto sm:px-4 sm:py-16 bg-gray-100">
      <div className="bg-white p-12 rounded-lg shadow-lg mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Us</h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          We are a platform dedicated to revolutionizing the meat supply chain. Our goal is to connect meat suppliers and buyers seamlessly, ensuring efficient order management, transparent communication, and high-quality products.
        </p>
        <img src="/assets/image3.jpg" alt="Hero Image" className="sm:h-[70vh] sm:w-[75vw] mx-auto rounded-lg shadow-md" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-lg text-gray-700">
            To streamline the meat supply chain and provide a reliable, efficient, and transparent platform for all stakeholders, including suppliers, buyers, and consumers. We aim to create a win-win situation for everyone involved.
          </p>
          <img src="/assets/image5.jpg" alt="Mission Image" className="sm:w-[50vw] rounded-lg h-[50vh] shadow-md mt-4" />
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
          <p className="text-lg text-gray-700">
            To be the leading platform for meat procurement, empowering businesses (restaurants, hotels, etc.) to thrive in the global market. We envision a future where buying and selling meat is a seamless, secure, and enjoyable experience.
          </p>
          <img src="/assets/image4.jpg" alt="Vision Image" className="w-full rounded-lg sm:h-[50vh] shadow-md mt-4" />
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md mb-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-4">
          <li className="flex items-start">
            <i className="fas fa-star text-yellow-500 mr-2 mt-1"></i>
            <div>
              <strong>Quality:</strong> We prioritize the highest quality meat products, ensuring fresh and safe offerings for consumers.
            </div>
          </li>
          <li className="flex items-start">
            <i className="fas fa-handshake text-blue-500 mr-2 mt-1"></i>
            <div>
              <strong>Integrity:</strong> We believe in building trust and fostering honest relationships between all participants in the supply chain.
            </div>
          </li>
          <li className="flex items-start">
            <i className="fas fa-lightbulb text-orange-500 mr-2 mt-1"></i>
            <div>
              <strong>Innovation:</strong> We constantly strive to develop new features and technologies to improve efficiency and create a more user-friendly platform.
            </div>
          </li>
          <li className="flex items-start">
            <i className="fas fa-smile text-green-500 mr-2 mt-1"></i>
            <div>
              <strong>Customer Satisfaction:</strong> We are dedicated to exceeding customer expectations and providing exceptional service to both buyers and suppliers.
            </div>
          </li>
        </ul>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md mb-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h3>
        <p className="text-lg text-gray-700">
          Our journey began in 2023 with a shared vision of a more efficient and transparent meat supply chain. We witnessed firsthand the frustrations faced by both suppliers and buyers, and we knew there had to be a better way. Fueled by a passion for quality meat and a commitment to innovation, we developed this platform to connect these stakeholders seamlessly. Overcoming initial challenges of building trust and user adoption, we've grown into a trusted platform for the meat industry. We continue to evolve and strive to make the meat buying and selling experience exceptional for everyone involved.
        </p>
        <img src="/assets/ourimage.jpg" alt="Story Image" className="w-l rounded-lg shadow-md mt-4  mx-auto" />
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md text-center mb-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h3>
        <p className="text-lg text-gray-700 mb-4">
          Have any questions or feedback? Feel free to reach out to us!
        </p>
        <p className="text-lg text-gray-700">
          <strong>Email:</strong> lokeudayvijaya@gmail.com
          <br />
          <strong>Phone:</strong> +91 8919454947 
          <br />
          <strong>Address:</strong> Vasavi College Of Enginering,Ibrahimbagh,Hyderabad
        </p>
      </div>

      <div className="text-center">
        <button  onClick={() => { toast.error('please sign up') }} className="bg-gray-300 text-gray-700 hover:bg-purple-600 mt-5 mb-5 transition-all duration-700 hover:text-white font-semibold px-4 py-2 rounded-md">
          Join Us Today
        </button>
      </div>
    </div>
  );
};

export default AboutUs;