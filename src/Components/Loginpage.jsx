import React from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import './Loginpage.css';

const LoginForm = () => {
  return (
    <div className="max-w-md">
      <form action="">
        <h1>Login</h1>
        <div className="mb-4 input-box">
          <input type="text" placeholder='Username' required className="text-sm text-white" />
          <FaUser className='icon' />
        </div>
        <div className="mb-4 input-box">
          <input type="password" placeholder='Password' required className="text-sm text-white" />
          <FaLock className='icon' />
        </div>
        <div className="flex justify-between mb-4 text-sm">
          <label>
            <input type="checkbox" className="mr-2 accent-white" />Remember me
          </label>
          <a href="#" className="text-white hover:underline">Forgot password?</a>
        </div>
        <button type="submit" className="w-full h-10 py-2 text-sm font-bold text-gray-700 bg-white border border-gray-200 border-solid rounded-full cursor-pointer">Login</button>
        <div className="mt-4 text-center">
          <span className="text-sm font-bold text-white">Don't have an account? <a href="/Signup" className="hover:underline">Register</a></span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;