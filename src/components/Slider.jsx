import React from 'react';

const LandingPage = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row justify-between items-center px-4 md:px-10 lg:px-20 relative overflow-hidden animate-fadeIn">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        {/* Multi-layered gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-orange-100 opacity-90 animate-pulse"></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-100/30 via-blue-200/20 to-emerald-100/30 animate-gradient-xy"></div>

        {/* Radial gradient accents */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-300/20 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-orange-200/20 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
        
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
        <div className="absolute top-10 -right-20 w-1/3 h-1/3 opacity-80 animate-float">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1995/1995539.png" 
            alt="Code"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 opacity-50 animate-float-delayed">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2920/2920349.png"
            alt="Engineering"
            className="w-full h-full object-contain" 
          />
        </div>
        
        {/* topi : ) */}
        <div className="absolute top-5 left-0 w-1/3 h-1/3 opacity-55 animate-float">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1940/1940611.png"
            alt="Education"
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Floating gold coins animation */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute animate-float-coin"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              <img 
                src="https://cdn-icons-png.flaticon.com/512/2933/2933116.png"
                alt="Gold Coin"
                className="w-8 h-8 opacity-70"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Rest of the content remains exactly the same */}
      {/* Content section */}
      <div className="w-full max-w-2xl text-left bg-white/90 backdrop-blur-sm p-4 md:p-8 rounded-xl shadow-2xl shadow-slate-500 z-10 hover:scale-105 transition-transform duration-300">
        <h1 className="text-2xl md:text-4xl text-gray-700 font-bold mb-4 md:mb-6 animate-fadeInUp">
          Make Your Roadmap With
          <div className='mt-2 md:mt-4'>
            <span className="font-serif text-blue-500 italic">Our AI-Powered Platform</span>
          </div>
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          Get a personalized learning path tailored to your career goals using advanced AI technology.
        </p>

        <div className="mb-4 md:mb-6">
          <a href="#" className="inline-block px-4 py-2 md:px-6 md:py-3 m-1 md:m-2 text-base md:text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md hover:from-blue-600 hover:to-purple-700 hover:scale-110 transition duration-300 ease-in-out transform hover:shadow-lg animate-pulse">
            Generate Your Roadmap with AI
          </a>
          <a href="#" className="inline-block px-4 py-2 md:px-6 md:py-3 m-1 md:m-2 text-base md:text-lg font-bold bg-gray-700 text-white rounded-md hover:bg-blue-500 hover:text-white hover:scale-110 transition duration-300 ease-in-out transform hover:shadow-lg">
            Update with Recent Job Market
          </a>
        </div>

        <div className="text-base md:text-lg text-gray-600 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-4">
          <span className="flex items-center text-blue-500 animate-bounce">
            <svg width="21" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.501 1.667a8.333 8.333 0 1 0 0 16.667 8.333 8.333 0 0 0 0-16.667Zm3.145 6.778a.833.833 0 0 0-1.29-1.056L9.19 11.26l-1.015-1.016a.833.833 0 0 0-1.179 1.179l1.667 1.667a.833.833 0 0 0 1.234-.062l3.75-4.583Z" fill="#3C9AFF" />
            </svg> 
            AI-Powered Analysis
          </span>
          <span className="flex items-center text-blue-500 animate-bounce" style={{animationDelay: '0.1s'}}>
            <svg width="21" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.501 1.667a8.333 8.333 0 1 0 0 16.667 8.333 8.333 0 0 0 0-16.667Zm3.145 6.778a.833.833 0 0 0-1.29-1.056L9.19 11.26l-1.015-1.016a.833.833 0 0 0-1.179 1.179l1.667 1.667a.833.833 0 0 0 1.234-.062l3.75-4.583Z" fill="#3C9AFF" />
            </svg> 
            Real-time Updates
          </span>
          <span className="flex items-center text-blue-500 animate-bounce" style={{animationDelay: '0.2s'}}>
            <svg width="21" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.501 1.667a8.333 8.333 0 1 0 0 16.667 8.333 8.333 0 0 0 0-16.667Zm3.145 6.778a.833.833 0 0 0-1.29-1.056L9.19 11.26l-1.015-1.016a.833.833 0 0 0-1.179 1.179l1.667 1.667a.833.833 0 0 0 1.234-.062l3.75-4.583Z" fill="#3C9AFF" />
            </svg> 
            Market Insights
          </span>
        </div>

        <a 
          href="https://souptik23.github.io/EY_FutureMind_V1/pricingPage.html" 
          className="block text-base md:text-lg text-yellow-600 italic text-center font-semibold hover:text-yellow-500 transition-colors duration-300 relative group animate-pulse"
        >
          <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 animate-spin">
            <img src="https://cdn-icons-png.flaticon.com/512/2933/2933116.png" alt="coin" className="w-5 h-5"/>
          </span>
          🌟 Unlock more powerful features with our premium subscription
          <span className="absolute -right-6 top-1/2 transform -translate-y-1/2 animate-spin">
            <img src="https://cdn-icons-png.flaticon.com/512/2933/2933116.png" alt="coin" className="w-5 h-5"/>
          </span>
        </a>
      </div>

      {/* Right Section - Course Cards */}
      <div className="w-full max-w-2xl z-10 mt-8 lg:mt-0">
        <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-4 md:mb-6 text-center animate-fadeInUp">Recommended Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-4">
          {/* Course Card 1 */}
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <img src="https://img.freepik.com/free-vector/webpage-template-with-code_24908-78070.jpg" alt="HTML Course" className="w-full h-32 object-cover rounded-lg mb-4"/>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">HTML5 Mastery</h3>
            <p className="text-sm text-gray-600 mb-4 opacity-0 group-hover:opacity-100 transition-opacity">Master modern HTML5 features and semantic markup.</p>
            <div className="flex justify-between items-center">
              <span className="text-blue-500 font-bold">₹799</span>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Enroll Now</button>
            </div>
          </div>

          {/* Course Card 2 */}
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg" alt="CSS Course" className="w-full h-32 object-cover rounded-lg mb-4"/>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">CSS3 & Animations</h3>
            <p className="text-sm text-gray-600 mb-4 opacity-0 group-hover:opacity-100 transition-opacity">Learn advanced CSS3 styling and animations.</p>
            <div className="flex justify-between items-center">
              <span className="text-blue-500 font-bold">₹899</span>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Enroll Now</button>
            </div>
          </div>

          {/* Course Card 3 */}
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <img src="https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept-bright-vibrant-violet-isolated-illustration_335657-986.jpg" alt="JavaScript Course" className="w-full h-32 object-cover rounded-lg mb-4"/>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">JavaScript Fundamentals</h3>
            <p className="text-sm text-gray-600 mb-4 opacity-0 group-hover:opacity-100 transition-opacity">Build a strong foundation in modern JavaScript.</p>
            <div className="flex justify-between items-center">
              <span className="text-blue-500 font-bold">₹1499</span>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Enroll Now</button>
            </div>
          </div>

          {/* Course Card 4 */}
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <img src="https://media.licdn.com/dms/image/v2/D4E12AQG1PxZ73PEBSw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1708668303539?e=2147483647&v=beta&t=QZ6IviSc6wyLpBOJAdbf97iYHddRto31uZEj6kaP8BY" alt="MERN Course" className="w-full h-32 object-cover rounded-lg mb-4"/>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">MERN Stack Development</h3>
            <p className="text-sm text-gray-600 mb-4 opacity-0 group-hover:opacity-100 transition-opacity">Full-stack development with MongoDB, Express, React & Node.</p>
            <div className="flex justify-between items-center">
              <span className="text-blue-500 font-bold">₹2999</span>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Enroll Now</button>
            </div>
          </div>

          {/* Course Card 5 */}
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="React Course" className="w-full h-32 object-cover rounded-lg mb-4"/>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">React.js Advanced</h3>
            <p className="text-sm text-gray-600 mb-4 opacity-0 group-hover:opacity-100 transition-opacity">Master React hooks, context API, and advanced patterns.</p>
            <div className="flex justify-between items-center">
              <span className="text-blue-500 font-bold">₹1999</span>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Enroll Now</button>
            </div>
          </div>

          {/* Course Card 6 */}
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <img src="https://img.freepik.com/free-vector/flat-design-api-illustration_23-2149380374.jpg" alt="API Course" className="w-full h-32 object-cover rounded-lg mb-4"/>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">API Development</h3>
            <p className="text-sm text-gray-600 mb-4 opacity-0 group-hover:opacity-100 transition-opacity">Learn RESTful API design and implementation.</p>
            <div className="flex justify-between items-center">
              <span className="text-blue-500 font-bold">₹1599</span>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Enroll Now</button>
            </div>
          </div>
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-6">
          <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg animate-bounce">
            Explore More Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
