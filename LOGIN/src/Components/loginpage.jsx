
import React, { useState, useEffect } from "react";
import lg from './allimages/lg.svg';
import register from './allimages/register.svg';
// import Popup from './Popup';

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showpopup, setshowpopup] = useState(false);

  const handleClick = () => {
    if (email === "sankhadeepk13@gmail.com" && password === "1234") {
      setshowpopup(true);
    } else {
      alert("Wrong information");
    }
  };

  const closePopup = () => {
    setshowpopup(false);
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

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Sign in &amp; Sign up Form</title>

      <div className="container relative w-full min-h-screen bg-white overflow-hidden">
        <div className="forms-container absolute w-full h-full top-0 left-0">
          <div className="signin-signup absolute top-1/2 left-[75%] w-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-in-out grid grid-cols-1 z-5">
            <form className="sign-in-form flex flex-col items-center justify-center p-0 sm:p-5 transition-all duration-700 ease-in-out overflow-hidden z-2">
              <h2 className="title text-4xl font-bold text-gray-700 mb-4">Student Login</h2>
              <div className="input-field flex items-center bg-gray-200 h-14 rounded-full mb-4 px-4">
                <i className="fas fa-user text-center text-gray-500 text-lg" />
                <input
                  type="text"
                  placeholder="Username or Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-transparent outline-none border-none text-gray-800 font-semibold text-lg pl-3 flex-1"
                />
              </div>
              <div className="input-field flex items-center bg-gray-200 h-14 rounded-full mb-4 px-4 relative">
                <i className="fas fa-lock text-center text-gray-500 text-lg" />
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-transparent outline-none border-none text-gray-800 font-semibold text-lg pl-3 flex-1"
                />
                <span className="eye absolute right-4 cursor-pointer" onClick={togglePasswordVisibility}>
                  <i className={`fa ${isPasswordVisible ? "fa-eye" : "fa-eye-slash"} text-gray-600`}></i>
                </span>
              </div>
              <button onClick={handleClick} type="button" className="btn bg-blue-500 text-white uppercase font-semibold py-2 px-8 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out">
                Submit
              </button>
              {showpopup && <Popup closePopup={closePopup} />}
              <p className="social-text py-4 text-lg">Or Sign in with social platforms</p>
              <div className="social-media flex justify-center">
                <a href="#" className="social-icon w-12 h-12 flex items-center justify-center mx-2 text-gray-600 border border-gray-600 rounded-full hover:text-blue-500 hover:border-blue-500 transition duration-300 ease-in-out">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="social-icon w-12 h-12 flex items-center justify-center mx-2 text-gray-600 border border-gray-600 rounded-full hover:text-blue-500 hover:border-blue-500 transition duration-300 ease-in-out">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" className="social-icon w-12 h-12 flex items-center justify-center mx-2 text-gray-600 border border-gray-600 rounded-full hover:text-blue-500 hover:border-blue-500 transition duration-300 ease-in-out">
                  <i className="fab fa-google" />
                </a>
                <a href="#" className="social-icon w-12 h-12 flex items-center justify-center mx-2 text-gray-600 border border-gray-600 rounded-full hover:text-blue-500 hover:border-blue-500 transition duration-300 ease-in-out">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </form>

            <form className="sign-up-form flex flex-col items-center justify-center p-0 sm:p-5 transition-all duration-700 ease-in-out overflow-hidden opacity-0 z-1">
              <h2 className="title text-4xl font-bold text-gray-700 mb-4">Councillor Login</h2>
              <div className="input-field flex items-center bg-gray-200 h-14 rounded-full mb-4 px-4">
                <i className="fas fa-envelope text-center text-gray-500 text-lg" />
                <input
                  type="email"
                  placeholder="Username or Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-transparent outline-none border-none text-gray-800 font-semibold text-lg pl-3 flex-1"
                />
              </div>
              <div className="input-field flex items-center bg-gray-200 h-14 rounded-full mb-4 px-4 relative">
                <i className="fas fa-lock text-center text-gray-500 text-lg" />
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-transparent outline-none border-none text-gray-800 font-semibold text-lg pl-3 flex-1"
                />
                <span className="eye absolute right-4 cursor-pointer" onClick={togglePasswordVisibility}>
                  <i className={`fa ${isPasswordVisible ? "fa-eye" : "fa-eye-slash"} text-gray-600`}></i>
                </span>
              </div>
              <button onClick={handleClick} type="button" className="btn bg-blue-500 text-white uppercase font-semibold py-2 px-8 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out">
                Submit
              </button>
              {showpopup && <Popup closePopup={closePopup} />}
              <p className="social-text py-4 text-lg">Or Sign up with social platforms</p>
              <div className="social-media flex justify-center">
                <a href="#" className="social-icon w-12 h-12 flex items-center justify-center mx-2 text-gray-600 border border-gray-600 rounded-full hover:text-blue-500 hover:border-blue-500 transition duration-300 ease-in-out">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="social-icon w-12 h-12 flex items-center justify-center mx-2 text-gray-600 border border-gray-600 rounded-full hover:text-blue-500 hover:border-blue-500 transition duration-300 ease-in-out">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" className="social-icon w-12 h-12 flex items-center justify-center mx-2 text-gray-600 border border-gray-600 rounded-full hover:text-blue-500 hover:border-blue-500 transition duration-300 ease-in-out">
                  <i className="fab fa-google" />
                </a>
                <a href="#" className="social-icon w-12 h-12 flex items-center justify-center mx-2 text-gray-600 border border-gray-600 rounded-full hover:text-blue-500 hover:border-blue-500 transition duration-300 ease-in-out">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container absolute h-full w-full top-0 left-0 grid grid-cols-2">
          <div className="panel flex flex-col items-end justify-around text-center z-6 p-12 pr-[12%]">
            <div className="content text-white">
              <h3 className="font-semibold text-3xl">New here ?</h3>
              <p className="text-lg">Don't miss to create your account with just a click!</p>
              <button className="btn bg-transparent border-2 border-white text-white uppercase font-semibold py-2 px-8 rounded-full mt-4 hover:bg-white hover:text-blue-500 transition duration-300 ease-in-out" id="sign-up-btn">
                Sign up
              </button>
            </div>
            <img src={register} className="image max-w-full h-auto" alt="register" />
          </div>
          <div className="panel flex flex-col items-start justify-around text-center z-6 p-12 pl-[12%]">
            <div className="content text-white">
              <h3 className="font-semibold text-3xl">One of us ?</h3>
              <p className="text-lg">Please login with your personal info</p>
              <button className="btn bg-transparent border-2 border-white text-white uppercase font-semibold py-2 px-8 rounded-full mt-4 hover:bg-white hover:text-blue-500 transition duration-300 ease-in-out" id="sign-in-btn">
                Sign in
              </button>
            </div>
            <img src={lg} className="image max-w-full h-auto" alt="lg" />
          </div>
        </div>
      </div>
    </>
  );
}
