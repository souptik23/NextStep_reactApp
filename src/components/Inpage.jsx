import React from 'react';
import inpageimg from './allimages/sfhewjgf.jpg';

function OnlineDegree() {
  return (
    <div className="bg-white font-sans m-0 p-0 mr-20 mt-20 ml-20 ">
      <div className="max-w-5xl mx-auto p-5 flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-3/5 mr-20">
          <p className="text-base text-gray-600 mb-1">CAREER GUIDANCE</p>
          <h1 className="text-4xl font-bold leading-tight mb-4 text-gray-700">
            Where <span className="text-pink-600 ">Guidance</span> Meets Your Career Aspirations
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            NEXT STEP empowers your career journey with expert guidance, personalized advice, and strategic planning to help you achieve your professional goals and take the next step in your career.
          </p>
          <div className="mt-5">
            <button className="px-6 py-3 text-white bg-pink-400 rounded-md mr-3 hover:bg-pink-600 transition-colors">
              Explore Courses
            </button>
            <button className="px-6 py-3 text-pink-400 bg-white border border-pink-400 rounded-md hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-colors">
              Talk to counsellor 📞
            </button>
          </div>
        </div>
        <div className="w-full md:w-2/5 mt-5 md:mt-0 ">
          <img src={inpageimg} alt="Image" className="w-full h-auto object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default OnlineDegree;
