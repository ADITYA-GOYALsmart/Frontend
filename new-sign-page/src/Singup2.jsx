import { useState } from 'react';
import { FaUserCircle, FaEnvelope, FaLock, FaCheckCircle, FaExclamationCircle, FaFacebook, FaGoogle, FaInstagram, FaTiktok } from 'react-icons/fa';
import './Styles2.css';

function SignUpPage2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
    setEmailError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value)); {/*!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value): This is a regular expression reg ex test that checks if the input email address is valid.*/ }
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
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-10 bg-white rounded-lg shadow-md w-96">
        <h2 className="mb-4 text-2xl font-bold text-center">Sign Up</h2>
        <p className="mb-6 text-center text-gray-600">We Code Flame Squad Welcome's You</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-bold text-gray-700">
              <FaUserCircle className="inline-block mr-2" />
              Name
            </label>
            <input
              type="text"
              id="name"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${nameError ? "border-red-500" : "border-gray-300"
                }`}
              value={name}
              onChange={handleNameChange}
            />
            {nameError && (
              <p className="mt-1 text-sm text-red-500">Name must be at least 3 characters</p>
            )}
            {name.length >= 3 && (
              <FaCheckCircle className="float-right text-green-500" />
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold text-gray-700">
              <FaEnvelope className="inline-block mr-2" />
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${emailError ? "border-red-500" : "border-gray-300"
                }`}
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && (
              <p className="mt-1 text-sm text-red-500">Invalid email address</p>
            )}
            {!emailError && (
              <FaCheckCircle className="float-right text-green-500" />
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-bold text-gray-700">
              <FaLock className="inline-block mr-2" />
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${passwordError ? "border-red-500" : "border-gray-300"
                }`}
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && (
              <p className="mt-1 text-sm text-red-500">Password must be at least 8 characters</p>
            )}
            {!passwordError && (
              <FaCheckCircle className="float-right text-green-500" />
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-2 font-bold text-gray-700">
              <FaLock className="inline-block mr-2" />
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${confirmPasswordError ? "border-red-500" : "border-gray-300"
                }`}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {confirmPasswordError && (
              <p className="mt-1 text-sm text-red-500">Passwords don't match</p>
            )}
            {!confirmPasswordError && (
              <FaCheckCircle className="float-right text-green-500" />
            )}
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus-shadow-outline"
            >
              Sign Up
            </button>
          </div>
          {/* <div className="text-center">
            <p className="text-gray-500">Or sign up with</p>
            <div className="flex justify-center mt-2">
              <button className="px-4 py-2 mr-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus-shadow-outline">
                <FaFacebook className="inline-block mr-2" />
                Facebook
              </button>
              <button className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus-shadow-outline">
                <FaGoogle className="inline-block mr-2" />
                Google
              </button>
            </div>
          </div> */}
        </form>
      </div>
      {/* <div className="absolute top-0 right-0">
        <div className="p-6 bg-blue-500 rounded-tl-lg rounded-bl-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl font-bold text-white">Flames</div>
            <FaInstagram className="text-white" size={30} />
          </div>
          <div className="mb-4 text-4xl font-bold text-white">176,18</div>
          <div className="w-full h-4 overflow-hidden bg-gray-300 rounded-full">
            <div className="h-4 bg-yellow-500 rounded-full" style={{ width: '60%' }}></div>
          </div>
          <div className="mt-2 text-sm font-bold text-white">45</div>
        </div>
        <div className="p-6 mt-4 bg-blue-300 rounded-tr-lg rounded-br-lg shadow-md">
          <div className="text-lg font-bold text-center text-white">Your data, your rules</div>
          <div className="mt-2 text-sm text-center text-white">Your data belongs to you, and our encryption ensures that</div>
        </div>
        <div className="absolute bottom-0 right-0 p-6 bg-blue-100 rounded-tr-lg rounded-br-lg shadow-md">
          <FaTiktok className="text-black" size={40} />
        </div>
      </div> */}
    </div>
  );
}

export default SignUpPage2;
