import React, { useState } from 'react';
import './LoginRegister.css';

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
    <div className="container">
      <div className="form-container">
        <h2 className="form-title">{isLoginMode ? 'Login' : 'Signup'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="eg-> flames@angaar.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="eg-> Codeflame#3@"
            />
          </div>
          {!isLoginMode && (
            <>
              <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="eg-> 87554-45275"
                />
              </div>
              <div className="form-group">
                <label htmlFor="college">College Name:</label>
                <input
                  type="text"
                  id="college"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  required
                  placeholder="eg-> ABC University"
                />
              </div>
            </>
          )}
          <button type="submit" className="btn">
            {isLoginMode ? 'Login Kardo Mujhe' : 'Signup Kardo Mujhe'}
          </button>
        </form>
        <p className="switch-mode">
          {isLoginMode ? (
            <span>
             BSDK Account banaya bhi h?{' '}
              <a href="#" onClick={() => setIsLoginMode(false)}>
               Le Kar Signup
              </a>
            </span>
          ) : (
            <span>
              Oy chutiye Account h kya pehle se?{' '}
              <a href="#" onClick={() => setIsLoginMode(true)}>
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