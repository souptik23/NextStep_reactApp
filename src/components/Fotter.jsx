import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-10 text-gray-800 mt-20 border-b-2 ">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between">
        {/* Helpline Section */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h4 className="text-lg font-bold mb-2">Call Our Helpline</h4>
          <p className="text-sm mb-4">Got career-related questions? Talk to our experts!</p>
          <a
            href="tel:+918744987449"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md font-semibold mb-4 hover:bg-blue-700 transition"
          >
            <i className="fa fa-phone mr-2"></i> +91 8167008981
          </a>

          <div className="mt-6">
            <div className="flex items-center space-x-4 mt-2"></div>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <div className="mt-8 flex justify-between space-x-16">
            <div className='mb-9 -mt-8 ml-20'>
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-xl font-semibold text-gray-700 hover:text-blue-500 transition border-b-2 border-blue-500">About Us</a>
                <a href="#" className="text-sm text-gray-700 hover:text-blue-500 transition">NextStep Goals</a>
                <a href="#" className="text-sm text-gray-700 hover:text-blue-500 transition">Success Stories</a>
                <a href="#" className="text-sm text-gray-700 hover:text-blue-500 transition">Pricing</a>
                <a href="#" className="text-sm text-gray-700 hover:text-blue-500 transition">Blog</a>
              </div>
            </div>
            <div className='mb-9 -mt-8'>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-xl font-semibold text-gray-700 hover:text-blue-500 transition border-b-2 border-blue-500">Contact Us</a>
              <a href="#" className="text-sm text-gray-700 hover:text-blue-500 transition">Terms and Conditions</a>
              <a href="#" className="text-sm text-gray-700 hover:text-blue-500 transition">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-700 hover:text-blue-500 transition">Disclaimer</a>
            </div>
            </div>
          </div>
        </div>

        {/* Stay Connected and Contact Us Sections */}
        <div className="w-full md:w-1/3 flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-8 mb-8 md:mb-0">
          {/* Stay Connected Section */}
          <div className="flex flex-col space-y-2">
            <h4 className="text-lg font-bold mb-2 ml-11 text-gray-700 border-b-2 border-blue-500">Stay Connected</h4>
            <p className="text-sm mb-4 ml-11">Stay updated with us....</p>
            <div className='mb-7'>
            <div className="flex space-x-4  ml-11 ">
              <a href="#" className="text-gray-700 text-xl hover:text-blue-500 transition">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-700 text-xl hover:text-blue-600 transition">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-700 text-xl hover:text-red-500 transition">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-700 text-xl hover:text-blue-600 transition">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col space-y-2">
            <h4 className="text-lg font-bold mb-2 ml-10 text-gray-700 border-b-2 border-blue-500">Our Adress</h4>
            <p className="text-sm ml-10">20/31, Bhubaneswar, <br /> Patia - 751024</p>
            <p className="text-sm ml-10">
              <a href="mailto:hello@mindler.com" className="font-semibold text-gray-700 hover:text-gray-900 transition">hello@Nextstep.com</a>
            </p>
            <p className="text-sm ml-10">
              <a href="tel:+918744987449" className="font-semibold text-gray-700 hover:text-gray-900 transition">+91 8167008981</a>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-10 border-t border-gray-300">
        <div className="container mx-auto flex justify-between">
          {/* How We Help Section */}
          <div className="w-1/3">
            <h3 className="text-xl font-bold text-blue-600 mb-4 text-center border-b-2 border-blue-500 pb-2">
              How We Help
            </h3>
            <p className="text-sm text-gray-700 mb-4 ml-8">
              There are hundreds of career options, multiple stream combinations, and endless career paths. Let us help
              you choose your right path like the thousands of students we have helped!
            </p>
            <ul className="mt-4">
              <li className="text-sm text-gray-700 mb-2  ml-20">Career Counselling for Class 8-9</li>
              <li className="text-sm text-gray-700 mb-2  ml-20">Career Counselling for Class 10-12</li>
              <li className="text-sm text-gray-700 mb-2  ml-20">Career Counselling for Graduates</li>
            </ul>
          </div>

          {/* Popular Careers Section */}
          <div className="w-1/3">
            <h3 className="text-xl font-bold text-blue-600 mb-4 text-center border-b-2 border-blue-500 pb-2">
              Popular Careers
            </h3>
            <ul className="mt-4">
              <li className="text-sm text-gray-700 mb-2 ml-20">Career in Design</li>
              <li className="text-sm text-gray-700 mb-2 ml-20">Career in Engineering</li>
              <li className="text-sm text-gray-700 mb-2 ml-20">Career in Media & Communication</li>
              <li className="text-sm text-gray-700 mb-2 ml-20">Career in Social Sciences & Humanities</li>
              <li className="text-sm text-gray-700 mb-2 ml-20">Career in2Ethical Hacking</li>
              <li className="text-sm text-gray-700 mb-2 ml-20">Career in Hotel Management</li>
              <li>
                <a href="#" className="text-blue-600 text-sm hover:underline ml-20">View All Popular Careers</a>
              </li>
            </ul>
          </div>

          {/* Popular Blogs Section */}
          <div className="w-1/3">
            <h3 className="text-xl font-bold text-blue-600 mb-4 text-center border-b-2 border-blue-500 pb-2">
              Popular Blogs
            </h3>
            <ul className="mt-4">
              <li className="text-sm text-gray-700 mb-2 ml-12">Career Options for PCM Students</li>
              <li className="text-sm text-gray-700 mb-2 ml-12">Career Options for PCB Students</li>
              <li className="text-sm text-gray-700 mb-2 ml-12">Career Options for Commerce Students</li>
              <li className="text-sm text-gray-700 mb-2 ml-12">How to Become a Pilot in India</li>
              <li className="text-sm text-gray-700 mb-2 ml-12">How to Become a Psychologist in India</li>
              <li className="text-sm text-gray-700 mb-2 ml-12">Difference Between CBSE, ICSE & IB Boards</li>
              <li>
                <a href="#" className="text-blue-600 text-sm hover:underline ml-12">View All Popular Blogs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
