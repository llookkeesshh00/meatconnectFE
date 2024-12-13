import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const apiUrl = import.meta.env.VITE_API_URL;

const Login = ({ role, switchToSignup, terminate }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    try {
      const response = await fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);
        localStorage.setItem('name', data.name);

        terminate();
        navigate(`/${data.role}/${data.role}Home`);
        toast.success('Login successful');
      } else {
        toast.error(data.error);
        setErrorMessage(data.error);
      }
    } catch (err) {
      setErrorMessage('Login failed. Please try again.');
      console.error('Error during login:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=''>
      <div className="inset-0 container shadow-xl bg-purple-200 max-w-md m-2 p-3 rounded-lg">
        <h1 className='text-2xl'>Login to get Started</h1>
        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        {isLoading ? (
          <div className="text-center  font-medium flex flex-col gap-6 justify-center items-center">
            <div className='font-bold text-xl'>Please wait </div>
            <video autoPlay loop muted className="w-36 h-36 opacity-60 mb-6">
              <source src="assets/loading.mp4" type="video/mp4" className='' />
              Your browser does not support the video tag.
            </video>
          </div>

        ) : (
          <form onSubmit={handleSubmit} className='flex flex-col text-start gap-2'>
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="p-2 border"
              required
            />
            <span>Password</span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="p-2 border"
              required
            />
            <button
              type="submit"
              className="bg-gray-100 text-gray-700 hover:bg-purple-600 mt-5 mb-5 transition-all duration-700 hover:text-white font-semibold px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </form>
        )}
        <div className='flex justify-center flex-col font-medium'>
          <p className='text-center'>Didn't have an account?</p>
          <button onClick={switchToSignup} className="text-purple-600 mt-5 mb-5 flex justify-center text-center underline">
            Click here to signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
