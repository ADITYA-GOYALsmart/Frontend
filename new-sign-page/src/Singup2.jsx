import { useState } from 'react';
import { FaUserCircle, FaEnvelope, FaLock, FaCheckCircle, FaExclamationCircle, FaFacebook, FaGoogle, FaInstagram, FaTiktok } from 'react-icons/fa';
import './Styles2.css';

function SignUpPage2() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError(event.target.value.length < 3);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError(event.target.value.length < 8);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setConfirmPasswordError(event.target.value !== password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform signup logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <p className="text-gray-600 text-center mb-6">We Code Flame Squad Welcome's You</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              <FaUserCircle className="inline-block mr-2" />
              Name
            </label>
            <input
              type="text"
              id="name"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${nameError ? 'border-red-500' : 'border-gray-300'}`}
              value={name}
              onChange={handleNameChange}
            />
            {nameError && (
              <p className="text-red-500 text-sm mt-1">Name must be at least 3 characters</p>
            )}
            {name.length >= 3 && (
              <FaCheckCircle className="float-right text-green-500" />
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              <FaEnvelope className="inline-block mr-2" />
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${emailError ? 'border-red-500' : 'border-gray-300'}`}
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">Invalid email address</p>
            )}
            {!emailError && (
              <FaCheckCircle className="float-right text-green-500" />
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              <FaLock className="inline-block mr-2" />
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${passwordError ? 'border-red-500' : 'border-gray-300'}`}
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">Password must be at least 8 characters</p>
            )}
            {!passwordError && (
              <FaCheckCircle className="float-right text-green-500" />
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">
              <FaLock className="inline-block mr-2" />
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${confirmPasswordError ? 'border-red-500' : 'border-gray-300'}`}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {confirmPasswordError && (
              <p className="text-red-500 text-sm mt-1">Passwords don't match</p>
            )}
            {!confirmPasswordError && (
              <FaCheckCircle className="float-right text-green-500" />
            )}
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
            >
              Sign Up
            </button>
          </div>
          <div className="text-center">
            <p className="text-gray-500">Or sign up with</p>
            <div className="flex justify-center mt-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline mr-2">
                <FaFacebook className="inline-block mr-2" />
                Facebook
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline">
                <FaGoogle className="inline-block mr-2" />
                Google
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* <div className="absolute right-0 top-0">
        <div className="bg-blue-500 rounded-tl-lg rounded-bl-lg p-6 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <div className="text-white text-2xl font-bold">Flames</div>
            <FaInstagram className="text-white" size={30} />
          </div>
          <div className="text-white font-bold text-4xl mb-4">176,18</div>
          <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
            <div className="bg-yellow-500 h-4 rounded-full" style={{ width: '60%' }}></div>
          </div>
          <div className="text-white text-sm font-bold mt-2">45</div>
        </div>
        <div className="bg-blue-300 rounded-tr-lg rounded-br-lg p-6 shadow-md mt-4">
          <div className="text-white text-center font-bold text-lg">Your data, your rules</div>
          <div className="text-white text-sm text-center mt-2">Your data belongs to you, and our encryption ensures that</div>
        </div>
        <div className="absolute right-0 bottom-0 bg-blue-100 rounded-tr-lg rounded-br-lg p-6 shadow-md">
          <FaTiktok className="text-black" size={40} />
        </div>
      </div> */}
    </div>
  );
}

export default SignUpPage2;