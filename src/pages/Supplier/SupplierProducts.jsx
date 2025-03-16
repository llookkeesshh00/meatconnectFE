import React, { useState, useEffect } from 'react';
import prod_img from '../../assets/source_img';
const apiUrl = import.meta.env.VITE_API_URL;

const SupplierProducts = () => {
  const [Products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        let res = await fetch(`${apiUrl}/supplier/getProducts`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      const res = await fetch(`${apiUrl}/product/deleteProduct/${productId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
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
    <div className="sm:min-h-screen flex flex-col items-center mt-4">
      {isLoading ? (
        <div className="fixed inset-0 flex flex-col gap-6 justify-center items-center bg-white bg-opacity-75">
          <div className="font-bold text-xl">Please wait</div>
          <video autoPlay loop muted className="w-36 h-36 opacity-60 mb-6">
            <source src="assets/loading.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-semibold mb-6">Your Products</h1>
          <div className="w-full sm:w-3/4 overflow-x-auto">
            <table className="min-w-max sm:min-w-full bg-white shadow-md rounded-lg">
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
                      <img
                        src={prod_img[product.productCategory][product.productName]}
                        width={100}
                        height={100}
                        className="object-cover"
                        alt={product.productName}
                      />
                    </td>
                    <td className="px-6 py-4">{product.productCategory}</td>
                    <td className="px-6 py-4">{product.productName}</td>
                    <td className="px-6 py-4">${product.price}</td>
                    <td className="px-6 py-4">
                      <button
                        className="bg-gray-200 font-bold text-gray px-4 py-2 rounded transition-all hover:bg-red-500 hover:text-white duration-500 hover:shadow-md"
                        onClick={() => handleDelete(product._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default SupplierProducts;
