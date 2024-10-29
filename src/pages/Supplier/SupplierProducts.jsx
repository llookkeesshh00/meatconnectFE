import React, { useState, useEffect } from 'react';

const SupplierProducts = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let res = await fetch('http://localhost:3000/supplier/getProducts', {
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

  // Handle Delete Product
  const handleDelete = async (productId) => {
    try {
      const res = await fetch(`http://localhost:3000/supplier/deleteProduct/${productId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include the JWT token
          'Content-Type': 'application/json',
        },
      });
      if (res.ok) {
        // Remove the deleted product from the state
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
            {Products.map((product, index) => (
              <tr key={index}>
                <td className="px-6 py-4">
                  <img src="/assets/uploadImages/chickenbreast.jpeg" className="h-20" alt={product.productName} />
                </td>
                <td className="px-6 py-4">{product.productCategory}</td>
                <td className="px-6 py-4">{product.productName}</td>
                <td className="px-6 py-4">${product.price}</td>
                <td className="px-6 py-4">
                   <button className="bg-red-500 text-white px-4 py-2 rounded hover:shadow-md hover:bg-red-400" onClick={() => handleDelete(product._id)}> Delete </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupplierProducts;
