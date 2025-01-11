import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import google from './allimages/icons8-google-48.png';
import linkedin from './allimages/icons8-linkedin-48.png';
import lg from './allimages/lg.svg';
import register from './allimages/register.svg';

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showRocket, setShowRocket] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    if (email === "user@gmail.com" && password === "1234") {
      setShowAlert(true);
      setShowRocket(true);
      setTimeout(() => {
        setShowAlert(false);
        navigate('/body');
      }, 2000);
    } else {
      alert("Wrong information");
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500/80 via-purple-500/80 to-violet-500/80 relative overflow-hidden">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-pink-300/40 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000 top-0 -left-4"></div>
        <div className="absolute w-96 h-96 bg-violet-300/40 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob top-0 right-0"></div>
      </div>

      {showAlert && (
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-green-400/30 backdrop-blur-md border border-green-400 text-white px-6 py-3 rounded-xl z-50"
          role="alert"
        >
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> Login successful!</span>
        </motion.div>
      )}

      <motion.img
        initial={{ opacity: 1, y: 0 }}
        animate={showRocket ? { opacity: 0, y: -1000 } : { opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className='absolute bottom-4 left-4 w-[350px] h-[300px] transition-transform duration-300'
        src={lg}
        alt="LG"
      />
      
      <motion.img
        initial={{ opacity: 1, y: 0 }}
        animate={showRocket ? { opacity: 0, y: -1000 } : { opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className='absolute bottom-4 right-4 w-[350px] h-[300px] transition-transform duration-300'
        src={register}
        alt="Register"
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="container w-full max-w-md p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 relative hover:shadow-pink-500/20 transition-all duration-300"
      >
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Student Login
        </h2>

        <div className="space-y-6">
          <div className="group">
            <label className="block text-white font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400/50 text-white placeholder-white/50 transition-all duration-300"
              placeholder="Enter your email"
            />
          </div>

          <div className="group relative">
            <label className="block text-white font-medium mb-2">Password</label>
            <input
              type={isPasswordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400/50 text-white placeholder-white/50 transition-all duration-300"
              placeholder="Enter your password"
            />
            <button
              className="absolute right-3 top-[42px] text-white/70 hover:text-white transition-colors"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? "Hide" : "Show"}
            </button>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-pink-500/80 to-violet-500/80 text-white font-bold py-3 px-4 rounded-xl hover:from-pink-600/80 hover:to-violet-600/80 transition-all duration-300 transform hover:shadow-lg"
            onClick={handleClick}
          >
            Login
          </motion.button>

          <div className="relative flex items-center justify-center my-8">
            <div className="border-t border-white/20 w-full"></div>
            <span className="absolute bg-white/10 px-4 text-white/70">or</span>
          </div>

          <div className="space-y-4">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300"
            >
              <img src={google} alt="Google" className="w-5 h-5 mr-3" />
              Sign in with Google
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300"
            >
              <img src={linkedin} alt="LinkedIn" className="w-5 h-5 mr-3" />
              Sign in with LinkedIn
            </motion.button>
          </div>

          <div className="mt-8 text-center">
            <button id="sign-in-btn" className="text-white/70 hover:text-white mr-4 transition-colors"></button>
            <button id="sign-up-btn" className="text-white/70 hover:text-white transition-colors">Sign Up</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
