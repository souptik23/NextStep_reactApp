import React from 'react';

const LandingPage = () => {
  return (
    <section className="h-screen flex justify-between items-center px-20 relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        {/* Multi-layered gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-orange-100 opacity-90"></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-100/30 via-blue-200/20 to-emerald-100/30 animate-gradient-xy"></div>

        {/* Radial gradient accents */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-300/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-orange-200/20 to-transparent rounded-full blur-3xl"></div>
        
        {/* Primary texture pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='https://images.unsplash.com/photo-1531685250784-7569952593d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRleHR1cmUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.4
        }}></div>

        {/* Secondary geometric pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='https://images.unsplash.com/photo-1531685250784-7569952593d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRleHR1cmUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23bbb' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          opacity: 0.3
        }}></div>
        
        {/* Decorative elements with varied sizes and opacities */}
        <div className="absolute top-10 -right-20 w-1/3 h-1/3 opacity-80">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1995/1995539.png" 
            alt="Code"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 opacity-50">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2920/2920349.png"
            alt="Engineering"
            className="w-full h-full object-contain" 
          />
        </div>
        
        {/* topi : ) */}
        <div className="absolute top-5 left-0 w-1/3 h-1/3 opacity-55">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1940/1940611.png"
            alt="Education"
            className="w-full h-full object-contain"
          />
        </div>
        
      </div>

      {/* Rest of the content remains exactly the same */}
      {/* Content section */}
      <div className="w-full max-w-2xl text-left bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-2xl shadow-slate-500 z-10">
        <h1 className="text-4xl text-gray-700 font-bold mb-6">
          Supercharge your career with
          <div className='mt-4'>
            <span className="font-serif text-blue-500 italic">Long Term Mentorship</span>
          </div>
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Land your dream job, role, and company faster than ever with 1:1 long-term mentorship.
        </p>

        <div className="mb-6">
          <a href="#" className="inline-block px-6 py-3 m-2 text-lg font-bold bg-white text-black border border-gray-300 rounded-md hover:bg-gray-100 hover:text-blue-500 hover:border-blue-500 hover:scale-110 transition duration-300 ease-in-out transform hover:shadow-lg">
            Book a Free Trial
          </a>
          <a href="#" className="inline-block px-6 py-3 m-2 text-lg font-bold bg-gray-700 text-white rounded-md hover:bg-blue-500 hover:text-white hover:scale-110 transition duration-300 ease-in-out transform hover:shadow-lg">
            Find your Mentor &gt;
          </a>
        </div>

        <div className="text-lg text-gray-600 flex space-x-8">
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
            24/7 Support
          </span>
        </div>
      </div>

      {/* Right Section - Course Cards */}
      <div className="w-full max-w-2xl z-10">
        <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Recommended Courses</h2>
        <div className="grid grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-4">
          {/* Course Card 1 */}
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-28 bg-blue-100 rounded-lg mb-3 overflow-hidden">
              <img src="https://cdn-icons-png.flaticon.com/256/1803/1803765.png" alt="Frontend Development" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Frontend Development</h3>
            <p className="text-sm text-gray-600 mb-3">Master React, HTML, CSS and modern frontend frameworks</p>
            <div className="flex justify-between items-center">
              <span className="text-blue-500 font-bold">$99</span>
              <button className="px-3 py-1.5 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600">Enroll Now</button>
            </div>
          </div>

          {/* Course Card 2 */}
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-28 bg-green-100 rounded-lg mb-3 overflow-hidden">
              <img src="https://cdn-icons-png.flaticon.com/256/2721/2721304.png" alt="Backend Development" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Backend Development</h3>
            <p className="text-sm text-gray-600 mb-3">Learn Node.js, Express and Database Management</p>
            <div className="flex justify-between items-center">
              <span className="text-blue-500 font-bold">$149</span>
              <button className="px-3 py-1.5 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600">Enroll Now</button>
            </div>
          </div>

          {/* Course Card 3 */}
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-28 bg-purple-100 rounded-lg mb-3 overflow-hidden">
              <img src="https://cdn-icons-png.flaticon.com/256/6062/6062646.png" alt="Full Stack Development" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Full Stack Development</h3>
            <p className="text-sm text-gray-600 mb-3">Become a complete web developer with MERN stack</p>
            <div className="flex justify-between items-center">
              <span className="text-blue-500 font-bold">$199</span>
              <button className="px-3 py-1.5 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600">Enroll Now</button>
            </div>
          </div>

          {/* Course Card 4 */}
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-28 bg-yellow-100 rounded-lg mb-3 overflow-hidden">
              <img src="https://cdn-icons-png.flaticon.com/256/1688/1688400.png" alt="Web Security" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Web Security</h3>
            <p className="text-sm text-gray-600 mb-3">Learn web security best practices and implementation</p>
            <div className="flex justify-between items-center">
              <span className="text-blue-500 font-bold">$179</span>
              <button className="px-3 py-1.5 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600">Enroll Now</button>
            </div>
          </div>

          {/* Course Card 5 */}
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-28 bg-red-100 rounded-lg mb-3 overflow-hidden">
              <img src="https://cdn-icons-png.flaticon.com/256/1995/1995581.png" alt="Data Science" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Data Science</h3>
            <p className="text-sm text-gray-600 mb-3">Learn Python, Machine Learning, and Data Analysis</p>
            <div className="flex justify-between items-center">
              <span className="text-blue-500 font-bold">$199</span>
              <button className="px-3 py-1.5 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600">Enroll Now</button>
            </div>
          </div>

          {/* Course Card 6 */}
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-28 bg-pink-100 rounded-lg mb-3 overflow-hidden">
              <img src="https://cdn-icons-png.flaticon.com/256/1995/1995590.png" alt="AI and ML" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">AI and ML</h3>
            <p className="text-sm text-gray-600 mb-3">Master Artificial Intelligence and Machine Learning</p>
            <div className="flex justify-between items-center">
              <span className="text-blue-500 font-bold">$249</span>
              <button className="px-3 py-1.5 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600">Enroll Now</button>
            </div>
          </div>
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-6">
          <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore More Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
