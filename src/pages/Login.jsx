import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ role, switchToSignup,terminate }) => {
  const navigate= useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // If login is successful, store JWT token in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);
        localStorage.setItem('name', data.name);
        console.log(data);
        terminate();
        navigate(`/${data.role}/${data.role}Home`)

        alert('Login successful');
      } else {
        setErrorMessage(data.error);
      }
    } catch (err) {
      setErrorMessage('Login failed. Please try again.'+err);
      console.error('Error during login:', err);
    }
  };

  return (
    <div className=''>
      <div className="container shadow-xl bg-purple-200 max-w-md m-2 p-3 rounded-lg">
        <h1 className='text-2xl'>Login to get Started</h1>
        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
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
          <button type="submit" className="bg-purple-600 mt-5 mb-5 text-white p-2 w-full hover:bg-purple-500">
            Submit
          </button>
        </form>
        <div className='flex justify-center flex-col font-medium'>
          <p className='text-center'>didn't  have an account?</p>
          <button onClick={switchToSignup} className="text-purple-600 mt-5 mb-5 flex justify-center text-center underline">
            Click here to signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
