import React, { useState, useRef } from 'react';
import pic from './allimages/pic.jpg';
import mainlogo from './allimages/logo2.png';
import aiimg from './allimages/Artificial Intelligence design.gif';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for chatbot sidebar
  const [chatMessage, setChatMessage] = useState('');
  const [chatResponses, setChatResponses] = useState([]);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false); // Close function for sidebar

  // Handle Chat Submission
  const handleChatSubmit = async (e) => {
    e.preventDefault();

    if (!chatMessage.trim()) return;

    try {
      const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: chatMessage }),
      });

      const data = await response.json();
      setChatResponses([...chatResponses, { question: chatMessage, answer: data.response }]);
      setChatMessage('');  // Clear the input after submission
    } catch (error) {
      console.error("Error while communicating with the chatbot:", error);
    }
  };

  return (
    <div className="bg-transparent">
      <nav className="bg-gradient-to-r from-red-400 to-blue-400 shadow-md fixed top-0 left-0 w-full z-50 border-b-1 border-black" style={{ height: '85px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="/" className="text-white text-xl font-bold">
              <img className="h-[35px] w-[130px]" src={mainlogo} alt="Logo" />
            </a>
          </div>

          <div className="hidden md:flex space-x-8 mr-auto ml-10">
            <a href="/body" className="text-white hover:bg-blue-600 px-5 py-3 rounded-md text-base font-extrabold text-lg shadow-lg hover:scale-105 transition-transform">Home</a>
            <a href="#" className="text-white hover:bg-blue-600 px-5 py-3 rounded-md text-base font-extrabold text-lg shadow-lg hover:scale-105 transition-transform">Trending</a>
            <a href="#" className="text-white hover:bg-blue-600 px-5 py-3 rounded-md text-base font-extrabold text-lg shadow-lg hover:scale-105 transition-transform">Services</a>
            <a href="#" className="text-white hover:bg-blue-600 px-5 py-3 rounded-md text-base font-extrabold text-lg shadow-lg hover:scale-105 transition-transform">Blog</a>
          </div>

          <div className="flex items-center space-x-5">
            {/* AI Image Button */}
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center flex-shrink-0" onClick={toggleSidebar}>
              <img src={aiimg} alt="AI GIF" className="w-full h-full object-cover cursor-pointer" />
            </div>

            {/* Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button onClick={toggleDropdown} className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                <img src={pic} alt="Profile" className="w-full h-full rounded-full object-cover" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-gray-100 border border-gray-200 rounded-md shadow-lg">
                  <ul className="py-2 text-base text-gray-700">
                    <Link to="/myprofile">
                      <li className="block px-5 py-3 hover:bg-gray-500 rounded-xl font-bold">My Profile</li>
                    </Link>
                    <li><a href="#" className="block px-5 py-3 hover:bg-gray-500 rounded-xl font-bold">Weekly Assessment</a></li>
                    <li><a href="#" className="block px-5 py-3 hover:bg-gray-500 rounded-xl font-bold">Customer Care</a></li>
                    <li><a href="#" className="block px-5 py-3 hover:bg-gray-500 rounded-xl font-bold">Settings</a></li>
                    <li><a href="#" className="block px-5 py-3 hover:bg-gray-500 rounded-xl font-bold">Logout</a></li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Chatbot Sidebar */}
        {sidebarOpen && (
          <div className="fixed right-0 top-0 h-full w-[400px] bg-gray-100 shadow-lg z-50 flex flex-col">
            <div className="bg-blue-500 p-5 flex justify-between items-center">
              <h2 className="text-white text-xl font-semibold">Chatbot</h2>
              <button onClick={closeSidebar} className="text-white font-bold text-2xl">&times;</button>
            </div>
            <div className="flex-1 p-5 overflow-y-auto bg-white">
              {chatResponses.map((res, index) => (
                <div key={index} className="mb-4 p-3 bg-gray-100 rounded-lg shadow">
                  <p className="font-semibold">You:</p>
                  <p className="bg-blue-100 p-3 rounded-md">{res.question}</p>
                  <p className="font-semibold mt-3">Bot:</p>
                  <p className="bg-green-100 p-3 rounded-md">{res.answer}</p>
                </div>
              ))}
            </div>
            <div className="p-5 bg-gray-200">
              <form onSubmit={handleChatSubmit} className="flex space-x-3">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Type your message"
                />
                <button type="submit" className="bg-blue-500 text-white p-3 rounded-md">Send</button>
              </form>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
