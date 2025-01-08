
// import React, { useState, useRef } from 'react';
// import pic from './allimages/pic.jpg';
// import mainlogo from './allimages/logo2.png';
// import aiimg from './allimages/Artificial Intelligence design.gif';
// import { Link } from "react-router-dom";


// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <div className="bg-transparent">
//       <nav
//         className="bg-gradient-to-r from-red-400 to-blue-400 shadow-md fixed top-0 left-0 w-full z-50 border-b-1 border-black"
//         style={{
//           height: '60px',
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
//           <div className="flex-shrink-0">
//             <a href="/" className="text-white text-xl font-bold">
//               <img className="h-[30px] w-[110px]" src={mainlogo} alt="Logo" />
//             </a>
//           </div>

//           <div className="hidden md:flex space-x-8 mr-auto ml-10">
//             <a href="/body" className="text-white hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium">
//               Home
//             </a>
//             <a href="#" className="text-white hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium">
//               Trending
//             </a>
//             <a href="#" className="text-white hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium">
//               Services
//             </a>
//             <a href="#" className="text-white hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium">
//               Blog
//             </a>
//           </div>

//           <div className="flex items-center space-x-4">
//             {/* AI Image */}
//             <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center flex-shrink-0">
//               <img
//                 src={aiimg}
//                 alt="AI GIF"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Profile Image */}
//             <div className="relative" ref={dropdownRef}>
//               <button
//                 onClick={toggleDropdown}
//                 className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center"
//               >
//                 <img
//                   src={pic}
//                   alt="Profile"
//                   className="w-full h-full rounded-full object-cover"
//                 />
//               </button>

//               {dropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-gray-100 border border-gray-200 rounded-md shadow-lg">
//                   <ul className="py-2 text-sm text-gray-700">
//                     <Link to="/myprofile"><li
//             className="block px-4 py-2 hover:bg-gray-500 rounded-xl">
//               My Profile
//               </li>
//           </Link>
//                     <li><a href="#" className="block px-4 py-2 hover:bg-gray-500 rounded-xl">Weekly Assessment</a></li>
//                     <li><a href="#" className="block px-4 py-2 hover:bg-gray-500 rounded-xl">Customer Care</a></li>
//                     <li><a href="#" className="block px-4 py-2 hover:bg-gray-500 rounded-xl">Settings</a></li>
//                     <li><a href="#" className="block px-4 py-2 hover:bg-gray-500 rounded-xl">Logout</a></li>
//                   </ul>
//                 </div>
//               )}
//             </div>

//             {/* Mobile menu button */}
//             <div className="-mr-2 flex md:hidden">
//               <button
//                 onClick={toggleMenu}
//                 className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//               >
//                 <svg
//                   className="h-6 w-6"
//                   stroke="currentColor"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     className={`${isOpen ? 'hidden' : 'block'}`}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                   <path
//                     className={`${isOpen ? 'block' : 'hidden'}`}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <a href="#" className="text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium">
//               Home
//             </a>
//             <a href="#" className="text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium">
//               Trending
//             </a>
//             <a href="#" className="text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium">
//               Services
//             </a>
//             <a href="#" className="text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium">
//               Blog
//             </a>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState, useRef } from 'react';
// import pic from './allimages/pic.jpg';
// import mainlogo from './allimages/logo2.png';
// import aiimg from './allimages/Artificial Intelligence design.gif';
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false); // State for chatbot sidebar
//   const [chatMessage, setChatMessage] = useState('');
//   const [chatResponses, setChatResponses] = useState([]);
//   const dropdownRef = useRef(null);

//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
//   const toggleMenu = () => setIsOpen(!isOpen);
//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   const handleChatSubmit = async (e) => {
//     e.preventDefault();

//     if (!chatMessage.trim()) return;

//     const response = await fetch("/chat", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ message: chatMessage }),
//     });

//     const data = await response.json();
//     setChatResponses([...chatResponses, { question: chatMessage, answer: data.response }]);
//     setChatMessage('');
//   };

//   return (
//     <div className="bg-transparent">
//       <nav className="bg-gradient-to-r from-red-400 to-blue-400 shadow-md fixed top-0 left-0 w-full z-50 border-b-1 border-black" style={{ height: '60px' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
//           <div className="flex-shrink-0">
//             <a href="/" className="text-white text-xl font-bold">
//               <img className="h-[30px] w-[110px]" src={mainlogo} alt="Logo" />
//             </a>
//           </div>

//           <div className="hidden md:flex space-x-8 mr-auto ml-10">
//             <a href="/body" className="text-white hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium">Home</a>
//             <a href="#" className="text-white hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium">Trending</a>
//             <a href="#" className="text-white hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium">Services</a>
//             <a href="#" className="text-white hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium">Blog</a>
//           </div>

//           <div className="flex items-center space-x-4">
//             {/* AI Image Button */}
//             <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center flex-shrink-0" onClick={toggleSidebar}>
//               <img src={aiimg} alt="AI GIF" className="w-full h-full object-cover cursor-pointer" />
//             </div>

//             {/* Profile Dropdown */}
//             <div className="relative" ref={dropdownRef}>
//               <button onClick={toggleDropdown} className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
//                 <img src={pic} alt="Profile" className="w-full h-full rounded-full object-cover" />
//               </button>

//               {dropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-gray-100 border border-gray-200 rounded-md shadow-lg">
//                   <ul className="py-2 text-sm text-gray-700">
//                     <Link to="/myprofile">
//                       <li className="block px-4 py-2 hover:bg-gray-500 rounded-xl">My Profile</li>
//                     </Link>
//                     <li><a href="#" className="block px-4 py-2 hover:bg-gray-500 rounded-xl">Weekly Assessment</a></li>
//                     <li><a href="#" className="block px-4 py-2 hover:bg-gray-500 rounded-xl">Customer Care</a></li>
//                     <li><a href="#" className="block px-4 py-2 hover:bg-gray-500 rounded-xl">Settings</a></li>
//                     <li><a href="#" className="block px-4 py-2 hover:bg-gray-500 rounded-xl">Logout</a></li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Chatbot Sidebar */}
//         {sidebarOpen && (
//           <div className="fixed right-0 top-0 h-full w-[300px] bg-white shadow-lg z-50 flex flex-col p-4">
//             <h2 className="text-lg font-semibold mb-4">Chatbot</h2>
//             <div className="flex-1 overflow-y-auto">
//               {chatResponses.map((res, index) => (
//                 <div key={index} className="mb-4">
//                   <p><strong>You:</strong> {res.question}</p>
//                   <p><strong>Bot:</strong> {res.answer}</p>
//                 </div>
//               ))}
//             </div>
//             <form onSubmit={handleChatSubmit} className="mt-4">
//               <input
//                 type="text"
//                 value={chatMessage}
//                 onChange={(e) => setChatMessage(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 placeholder="Type your message"
//               />
//               <button type="submit" className="mt-2 w-full bg-blue-500 text-white p-2 rounded-md">Send</button>
//             </form>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// };

// export default Navbar;



// import React, { useState, useRef } from 'react';
// import pic from './allimages/pic.jpg';
// import mainlogo from './allimages/logo2.png';
// import aiimg from './allimages/Artificial Intelligence design.gif';
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false); // State for chatbot sidebar
//   const [chatMessage, setChatMessage] = useState('');
//   const [chatResponses, setChatResponses] = useState([]);
//   const dropdownRef = useRef(null);

//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
//   const toggleMenu = () => setIsOpen(!isOpen);
//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
//   const closeSidebar = () => setSidebarOpen(false); // Close function for sidebar

//   const handleChatSubmit = async (e) => {
//     e.preventDefault();

//     if (!chatMessage.trim()) return;

//     const response = await fetch("/chat", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ message: chatMessage }),
//     });

//     const data = await response.json();
//     setChatResponses([...chatResponses, { question: chatMessage, answer: data.response }]);
//     setChatMessage('');
//   };

//   return (
//     <div className="bg-transparent">
//       <nav className="bg-gradient-to-r from-red-400 to-blue-400 shadow-md fixed top-0 left-0 w-full z-50 border-b-1 border-black" style={{ height: '60px' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
//           <div className="flex-shrink-0">
//             <a href="/" className="text-white text-xl font-bold">
//               <img className="h-[30px] w-[110px]" src={mainlogo} alt="Logo" />
//             </a>
//           </div>

//           <div className="hidden md:flex space-x-8 mr-auto ml-10">
//             <a href="/body" className="text-white hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium">Home</a>
//             <a href="#" className="text-white hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium">Trending</a>
//             <a href="#" className="text-white hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium">Services</a>
//             <a href="#" className="text-white hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium">Blog</a>
//           </div>

//           <div className="flex items-center space-x-4">
//             {/* AI Image Button */}
//             <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center flex-shrink-0" onClick={toggleSidebar}>
//               <img src={aiimg} alt="AI GIF" className="w-full h-full object-cover cursor-pointer" />
//             </div>

//             {/* Profile Dropdown */}
//             <div className="relative" ref={dropdownRef}>
//               <button onClick={toggleDropdown} className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
//                 <img src={pic} alt="Profile" className="w-full h-full rounded-full object-cover" />
//               </button>

//               {dropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-gray-100 border border-gray-200 rounded-md shadow-lg">
//                   <ul className="py-2 text-sm text-gray-700">
//                     <Link to="/myprofile">
//                       <li className="block px-4 py-2 hover:bg-gray-500 rounded-xl">My Profile</li>
//                     </Link>
//                     <li><a href="#" className="block px-4 py-2 hover:bg-gray-500 rounded-xl">Weekly Assessment</a></li>
//                     <li><a href="#" className="block px-4 py-2 hover:bg-gray-500 rounded-xl">Customer Care</a></li>
//                     <li><a href="#" className="block px-4 py-2 hover:bg-gray-500 rounded-xl">Settings</a></li>
//                     <li><a href="#" className="block px-4 py-2 hover:bg-gray-500 rounded-xl">Logout</a></li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Chatbot Sidebar */}
//         {sidebarOpen && (
//           <div className="fixed right-0 top-0 h-full w-[350px] bg-gray-100 shadow-lg z-50 flex flex-col">
//             <div className="bg-blue-500 p-4 flex justify-between items-center">
//               <h2 className="text-white text-lg font-semibold">Chatbot</h2>
//               <button onClick={closeSidebar} className="text-white font-bold text-xl">&times;</button>
//             </div>
//             <div className="flex-1 p-4 overflow-y-auto bg-white">
//               {chatResponses.map((res, index) => (
//                 <div key={index} className="mb-4 p-2 bg-gray-100 rounded-lg shadow">
//                   <p className="font-semibold">You:</p>
//                   <p className="bg-blue-100 p-2 rounded-md">{res.question}</p>
//                   <p className="font-semibold mt-2">Bot:</p>
//                   <p className="bg-green-100 p-2 rounded-md">{res.answer}</p>
//                 </div>
//               ))}
//             </div>
//             <div className="p-4 bg-gray-200">
//               <form onSubmit={handleChatSubmit} className="flex space-x-2">
//                 <input
//                   type="text"
//                   value={chatMessage}
//                   onChange={(e) => setChatMessage(e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   placeholder="Type your message"
//                 />
//                 <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Send</button>
//               </form>
//             </div>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// };

// export default Navbar;


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
      <nav className="bg-gradient-to-r from-red-400 to-blue-400 shadow-md fixed top-0 left-0 w-full z-50 border-b-1 border-black" style={{ height: '60px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="/" className="text-white text-xl font-bold">
              <img className="h-[30px] w-[110px]" src={mainlogo} alt="Logo" />
            </a>
          </div>

          <div className="hidden md:flex space-x-8 mr-auto ml-10">
            <a href="/body" className="text-white hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" className="text-white hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium">Trending</a>
            <a href="#" className="text-white hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium">Services</a>
            <a href="#" className="text-white hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium">Blog</a>
          </div>

          <div className="flex items-center space-x-4">
            {/* AI Image Button */}
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center flex-shrink-0" onClick={toggleSidebar}>
              <img src={aiimg} alt="AI GIF" className="w-full h-full object-cover cursor-pointer" />
            </div>

            {/* Profile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button onClick={toggleDropdown} className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                <img src={pic} alt="Profile" className="w-full h-full rounded-full object-cover" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-100 border border-gray-200 rounded-md shadow-lg">
                  <ul className="py-2 text-sm text-gray-700">
                    <Link to="/myprofile">
                      <li className="block px-4 py-2 hover:bg-gray-500 rounded-xl">My Profile</li>
                    </Link>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-500 rounded-xl">Weekly Assessment</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-500 rounded-xl">Customer Care</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-500 rounded-xl">Settings</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-500 rounded-xl">Logout</a></li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Chatbot Sidebar */}
        {sidebarOpen && (
          <div className="fixed right-0 top-0 h-full w-[350px] bg-gray-100 shadow-lg z-50 flex flex-col">
            <div className="bg-blue-500 p-4 flex justify-between items-center">
              <h2 className="text-white text-lg font-semibold">Chatbot</h2>
              <button onClick={closeSidebar} className="text-white font-bold text-xl">&times;</button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto bg-white">
              {chatResponses.map((res, index) => (
                <div key={index} className="mb-4 p-2 bg-gray-100 rounded-lg shadow">
                  <p className="font-semibold">You:</p>
                  <p className="bg-blue-100 p-2 rounded-md">{res.question}</p>
                  <p className="font-semibold mt-2">Bot:</p>
                  <p className="bg-green-100 p-2 rounded-md">{res.answer}</p>
                </div>
              ))}
            </div>
            <div className="p-4 bg-gray-200">
              <form onSubmit={handleChatSubmit} className="flex space-x-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Type your message"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Send</button>
              </form>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
