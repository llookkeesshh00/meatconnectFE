import React, { useState, useEffect } from 'react';
import prod_img from '../../assets/source_img';
const apiUrl = import.meta.env.VITE_API_URL;



const SupplierProducts = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let res = await fetch(`${apiUrl}/supplier/getProducts`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include the JWT token
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);


  const handleDelete = async (productId) => {
    try {
      const res = await fetch(`${apiUrl}/product/deleteProduct/${productId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include the JWT token
          'Content-Type': 'application/json',
        },
      });
      if (res.ok) {
        
        setProducts(Products.filter(product => product._id !== productId));
      } else {
        console.error('Failed to delete the product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };


  return (
    <div className="min-h-screen flex flex-col items-center mt-4">
      <h1 className="text-3xl font-semibold mb-6">Your Products</h1>
      <div className="w-3/4 flex justify-center">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">Product Image</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Product Category</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Product Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Price</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Products.map((product, index) => {
              return (
                <tr key={index}>
                  <td className="px-6 py-4">
                    <img
                      src={prod_img[product.productCategory][product.productName]}
                      width={100}  // Set desired width
                      height={100} // Set desired height
                      className="object-cover" // Optional: maintain aspect ratio
                      alt={product.productName}
                    />
                  </td>
                  <td className="px-6 py-4">{product.productCategory}</td>
                  <td className="px-6 py-4">{product.productName}</td>
                  <td className="px-6 py-4">${product.price}</td>
                  <td className="px-6 py-4">
                    <button
                      className="bg-gray-200 font-bold text-gray px-4 py-2 rounded transition-all  hover:bg-red-500 hover:text-white  duration-500 hover:shadow-md"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>


        </table>
      </div>
    </div>
  );
};

export default SupplierProducts;
