import React, { useState } from 'react';


const LoginSignup = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: '',
    college: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the login or signup logic
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center text-white" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1718619578357-f3825be21d50?q=80&w=1263&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
      <div className="bg-black bg-opacity-70 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-center mb-6 text-2xl font-bold">{isLoginMode ? 'Login' : 'Signup'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="eg-> flames@angaar.com"
              className="w-full p-2 border border-gray-300 rounded bg-gray-200 text-gray-800"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-bold">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="eg-> Codeflame#3@"
              className="w-full p-2 border border-gray-300 rounded bg-gray-200 text-gray-800"
            />
          </div>
          {!isLoginMode && (
            <>
              <div className="mb-4">
                <label htmlFor="phone" className="block mb-2 font-bold">Phone Number:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="eg-> 87554-45275"
                  className="w-full p-2 border border-gray-300 rounded bg-gray-200 text-gray-800"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="college" className="block mb-2 font-bold">College Name:</label>
                <input
                  type="text"
                  id="college"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  required
                  placeholder="eg-> ABC University"
                  className="w-full p-2 border border-gray-300 rounded bg-gray-200 text-gray-800"
                />
              </div>
            </>
          )}
          <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded font-bold hover:bg-blue-700 transition duration-300">
            {isLoginMode ? 'Login Kardo Mujhe' : 'Signup Kardo Mujhe'}
          </button>
        </form>
        <p className="text-center mt-6 text-sm">
          {isLoginMode ? (
            <span>
              BSDK Account banaya bhi h?{' '}
              <a href="#" onClick={() => setIsLoginMode(false)} className="text-blue-500 font-bold hover:text-blue-700 transition duration-300">
                Le Kar Signup
              </a>
            </span>
          ) : (
            <span>
              Oy chutiye Account h kya pehle se?{' '}
              <a href="#" onClick={() => setIsLoginMode(true)} className="text-blue-500 font-bold hover:text-blue-700 transition duration-300">
                Le Kar Login
              </a>
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
