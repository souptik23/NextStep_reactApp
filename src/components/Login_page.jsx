
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import google from './allimages/icons8-google-48.png';
import linkedin from './allimages/icons8-linkedin-48.png';
import lg from './allimages/lg.svg';
import register from './allimages/register.svg';

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false); // New state for showing alert

  const navigate = useNavigate();

  const handleClick = () => {
    if (email === "sankhadeepk13@gmail.com" && password === "1234") {
      setShowAlert(true); // Show custom alert
      setTimeout(() => {
        setShowAlert(false); // Hide alert after 2 seconds
        navigate('/body'); // Route to the Body page
      }, 2000);
    } else {
      alert("Wrong information"); // Use default alert for incorrect info
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  useEffect(() => {
    const signInBtn = document.querySelector("#sign-in-btn");
    const signUpBtn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    signUpBtn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    signInBtn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-200 to-white relative">
      {/* Custom Green Alert */}
      {showAlert && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded z-50" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> You have logged in successfully.</span>
        </div>
      )}

      <img
        className='absolute bottom-4 left-4 w-[350px] h-[300px]'
        src={lg}
        alt="LG"
      />
      <img
        className='absolute bottom-4 right-4 w-[350px] h-[300px]'
        src={register}
        alt="Register"
      />
      <div className="container w-full max-w-md p-8 bg-blue-50 rounded-lg shadow-lg border-b-4 border-black relative">
        {/* Student Login Title */}
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Student Login
        </h2>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input with Visibility Toggle */}
        <div className="mb-6 relative">
          <label className="block text-gray-700 font-medium mb-2">Password</label>
          <input
            type={isPasswordVisible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
          <button
            className="absolute right-2 top-3 text-gray-700 mt-7"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? "Hide" : "Show"}
          </button>
        </div>

        {/* Submit Button */}
        <button
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          onClick={handleClick}
        >
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center justify-center my-6">
          <hr className="w-full border-gray-300" />
          <span className="absolute px-2 text-gray-500">or</span>
        </div>

        {/* Social Media Login Buttons */}
        <div className="flex flex-col space-y-3">
          <button className="w-full flex items-center justify-center text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition">
            <img src={google} alt="Google" className="w-5 h-5 mr-2" />
            Sign in with Google
          </button>

          <button className="w-full flex items-center justify-center text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-blue-800 transition">
            <img src={linkedin} alt="LinkedIn" className="w-5 h-5 mr-2" />
            Sign in with LinkedIn
          </button>
        </div>

        {/* Sign-in / Sign-up Mode Switcher */}
        <div className="mt-6 text-center">
          <button id="sign-in-btn" className="text-blue-500 mr-4"></button>
          <button id="sign-up-btn" className="text-blue-500">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
