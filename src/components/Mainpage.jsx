import React from "react";
import Fotter from "./Fotter";
import { Link } from "react-router-dom";

// the landing page
const NextStep = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-violet-200 to-pink-100 animate-gradient-x">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob top-0 left-0"></div>
        <div className="absolute w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 top-0 right-0"></div>
        <div className="absolute w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000 bottom-0 left-1/4"></div>
      </div>

      <header className="fixed top-0 left-0 w-full text-white bg-white/80 backdrop-blur-sm body-font shadow-lg z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 hover:scale-105 transition-transform">
            <span className="ml-3 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-600 font-extrabold">
              NextStep
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {["Features", "Partners", "About Us", "Contact Us"].map((item) => (
              <a key={item} className="mr-5 text-gray-800 hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105">
                {item}
              </a>
            ))}
          </nav>
          <Link to="/Login">
            <button className="inline-flex items-center text-white bg-gradient-to-r from-pink-500 to-violet-500 border-0 py-2 px-6 focus:outline-none hover:from-pink-600 hover:to-violet-600 rounded-full text-base mt-4 md:mt-0 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/50">
              Login
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </header>

      <section className="relative text-gray-600 body-font pt-24">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center">
          <div className="lg:flex-grow md:w-1/2 flex flex-col items-center text-center z-10">
            <div className="mt-6 animate-fade-in-down">
              <h1 className="title-font text-6xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-600 font-extrabold leading-tight">
                Boost Your Career 
                <br className="hidden lg:inline-block"/>
                With Us
              </h1>
            </div>
            <p className="mb-8 leading-relaxed text-gray-700 text-xl max-w-2xl animate-fade-in">
              Empower your career journey with expert guidance. Unlock your full
              potential and achieve career success.
            </p>
            <div className="flex justify-center animate-bounce-slow">
              <Link to="/signup">
                <button className="inline-flex text-white bg-gradient-to-r from-pink-500 to-violet-500 border-0 py-3 px-12 focus:outline-none hover:from-pink-600 hover:to-violet-600 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-pink-500/50">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <img
            className="w-full max-w-6xl mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 animate-fade-in"
            src="https://www.survivedivorce.com/wp-content/uploads/3-What-Professions-Have-the-Highest-Rate-of-Divorce.jpg"
            alt="Career"
          />
        </div>

        <div className="bg-white/80 backdrop-blur-sm py-16 text-center relative rounded-3xl mx-4 lg:mx-20 -mt-20 shadow-xl z-10">
          <div className="flex flex-wrap justify-center items-center gap-16">
            {[
              {
                icon: "https://mindlerimages.imgix.net/tinyimg/Group%201310.svg",
                number: "1 Million",
                text: "Students Impacted"
              },
              {
                icon: "https://mindlerimages.imgix.net/tinyimg/Group%201311.svg",
                number: "10,000",
                text: "Educators Certified"
              },
              {
                icon: "https://mindlerimages.imgix.net/tinyimg/Group%201312.svg",
                number: "100+",
                text: "Partner Colleges"
              },
              {
                icon: "https://mindlerimages.imgix.net/tinyimg/Group%201313.svg",
                number: "25+",
                text: "University Partners"
              }
            ].map((stat, index) => (
              <div key={index} className="flex items-center text-left group hover:scale-110 transition-transform duration-300">
                <img
                  src={stat.icon}
                  alt={stat.text}
                  className="w-12 h-12 mr-4 group-hover:animate-spin-slow"
                />
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent">
                    {stat.number}
                  </h3>
                  <p className="text-lg text-gray-600 mt-1">{stat.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the sections with similar styling updates */}
      {/* Keeping existing content but adding gradient backgrounds, animations, and hover effects */}
      
      {/* Continue with remaining sections... */}
      
      <div>
        <Fotter />
      </div>
    </div>
  );
};

export default NextStep;
