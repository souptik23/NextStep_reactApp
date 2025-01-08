import React from 'react';

const LandingPage = () => {
  return (
    <section className="min-h-screen flex justify-center items-center bg-gradient-to-b from-orange-100 to-white">
      <div className="w-full max-w-4xl text-center bg-white p-12 rounded-xl shadow-2xl shadow-slate-500 mt-20">
        <h1 className="text-5xl text-gray-700 font-bold mb-7">
          Supercharge your career with <br />
          <div className='mt-5'>
          <span className="font-serif text-blue-500 italic">Long Term Mentorship</span>
          </div>
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Land your dream job, role, and company faster than ever with 1:1 long-term mentorship.
        </p>

        <div className="mb-8">
          <a href="#" className="inline-block px-6 py-3 m-2 text-lg font-bold bg-white text-black border border-gray-300 rounded-md hover:bg-gray-100 hover:text-blue-500 hover:border-blue-500 hover:scale-110 transition duration-300 ease-in-out transform hover:shadow-lg">
            Book a Free Trial
          </a>
          <a href="#" className="inline-block px-6 py-3 m-2 text-lg font-bold bg-gray-700 text-white rounded-md hover:bg-blue-500 hover:text-white hover:scale-110 transition duration-300 ease-in-out transform hover:shadow-lg">
            Find your Mentor &gt;
          </a>
        </div>

        <div className="text-lg text-gray-600 flex justify-center space-x-8">
          <span className="flex items-center text-blue-500">
            <svg width="21" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.501 1.667a8.333 8.333 0 1 0 0 16.667 8.333 8.333 0 0 0 0-16.667Zm3.145 6.778a.833.833 0 0 0-1.29-1.056L9.19 11.26l-1.015-1.016a.833.833 0 0 0-1.179 1.179l1.667 1.667a.833.833 0 0 0 1.234-.062l3.75-4.583Z" fill="#3C9AFF" />
            </svg> 
            No Payment Required
          </span>
          <span className="flex items-center text-blue-500">
            <svg width="21" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.501 1.667a8.333 8.333 0 1 0 0 16.667 8.333 8.333 0 0 0 0-16.667Zm3.145 6.778a.833.833 0 0 0-1.29-1.056L9.19 11.26l-1.015-1.016a.833.833 0 0 0-1.179 1.179l1.667 1.667a.833.833 0 0 0 1.234-.062l3.75-4.583Z" fill="#3C9AFF" />
            </svg> 
            Verified Mentors Only
          </span>
          <span className="flex items-center text-blue-500">
            <svg width="21" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.501 1.667a8.333 8.333 0 1 0 0 16.667 8.333 8.333 0 0 0 0-16.667Zm3.145 6.778a.833.833 0 0 0-1.29-1.056L9.19 11.26l-1.015-1.016a.833.833 0 0 0-1.179 1.179l1.667 1.667a.833.833 0 0 0 1.234-.062l3.75-4.583Z" fill="#3C9AFF" />
            </svg> 
            Reschedule Anytime
          </span>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
