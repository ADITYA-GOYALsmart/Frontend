import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock,FaPhone,FaEnvelope } from "react-icons/fa";
import './Signup.css';

const Signup = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
      // Call your signup API or perform signup logic here
      //...
      // After successful signup, redirect to login page
      navigate('/Loginpage', { replace: true });
    };
  return (
    <div className="max-w-md">
      <form action="">
        <h1>Signup</h1>
        <div className="mb-4 input-box">
          <input type="text" placeholder='Username' required className="text-sm text-white" />
          <FaUser className='icon' />
        </div>
        <div className="mb-4 input-box">
          <input type="password" placeholder='Password' required className="text-sm text-white" />
          <FaLock className='icon' />
        </div>
        <div className="mb-4 input-box">
          <input type="phone" placeholder='Phone no.' required className="text-sm text-white" />
          <FaPhone className='icon' />
          </div>
          <div className="mb-4 input-box">
          <input type="email" placeholder='Email' required className="text-sm text-white" />
          <FaEnvelope className='icon' />
          </div>
        <div className="flex justify-between mb-4 text-sm">
          <label>
            <input type="checkbox" className="mr-2 accent-white" />Remember me
          </label>
          <a href="#" className="text-white hover:underline">Forgot password?</a>
        </div>
        <button type="submit" className="w-full h-10 py-2 text-sm font-bold text-gray-700 bg-white border border-gray-200 border-solid rounded-full cursor-pointer">Signup</button>
        <div className="mt-4 text-center">
          <span className="text-sm font-bold text-white">Already a member?<a href="/LoginForm" className="hover:underline">Login</a></span>
        </div>
      </form>
    </div>
  );
};

export default Signup;