import React, { useEffect } from 'react';
import './bodystyle.css';
import ai from './allimages/artificial-intelligence-icon-sign-logo-vector-49693366.jpg';
import arrow from './allimages/reshot-icon-right-arrow-UCA8NGYZDJ.svg';
import mentor from './allimages/mmm.png';
import livementor from './allimages/connect.jpg';
import Navbar from './Navbar';
import Slider from './Slider';
import Inpage from './Inpage';
import slider from './Slider';
import Inpage2 from './Inpage2';
import Inpage3 from './Inpage3';
import Fotter from './Fotter';
import vr from './allimages/vr.jpg';
import cafe from './allimages/cafe.jpg';
import dream from './allimages/dream.webp';

function Body() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/ionicons@5.1.2/dist/ionicons.js";
    script.async = true;
    document.body.appendChild(script);

    const showMenu = (toggleId, navbarId, bodyId) => {
      const toggle = document.getElementById(toggleId),
        navbar = document.getElementById(navbarId),
        bodyPadding = document.getElementById(bodyId);

      if (toggle && navbar) {
        toggle.addEventListener('click', () => {
          navbar.classList.toggle('expander');
          if (bodyPadding) {
            bodyPadding.classList.toggle('body-pd');
          }
        });
      }
    };
    showMenu('nav-toggle', 'navbar', 'body-pd');

    const linkColor = document.querySelectorAll('.nav__link');
    function colorLink() {
      linkColor.forEach((l) => l.classList.remove('active'));
      this.classList.add('active');
    }
    linkColor.forEach((l) => l.addEventListener('click', colorLink));

    const linkCollapse = document.getElementsByClassName('collapse__link');
    for (let i = 0; i < linkCollapse.length; i++) {
      linkCollapse[i].addEventListener('click', function () {
        const collapseMenu = this.nextElementSibling;
        collapseMenu.classList.toggle('showCollapse');

        const rotate = collapseMenu.previousElementSibling;
        rotate.classList.toggle('rotate');
      });
    }

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full">
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="assets/css/styles.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
        <nav>{<Navbar />}</nav>
        <div>{<Slider />}</div>
        <div id="services" 
          className="py-8 text-white font-sans mr-7 mt-20 flex justify-center items-center bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')`
          }}>
          <div className="px-2 mx-auto max-w-full w-full">
            <h1 className="text-5xl text-white font-bold mb-5 text-center">Explore Our Categories</h1>
            <p className="text-white mb-8 text-center font-serif">Discover your passion</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
              <div className="bg-slate-100 p-4 rounded-lg transition-transform hover:bg-gradient-to-r from-blue-400 via-pink-400 to-red-400 hover:translate-y-[-9px] border-2">
                <img src={ai} alt="img" className="w-24 h-24 mb-4 rounded-full object-cover mx-auto border-2" />
                <h2 className="text-2xl mb-2 text-gray-700 text-center font-bold">AI Powered Career</h2>
                <p className="mb-4 text-black text-center">Enhance your carrer with our trained AI</p>
                <button className="text-sm text-black font-serif block mx-auto">Know More</button>
                <img src={arrow} className="w-4 h-4 mx-auto mt-2" />
              </div>

              <div className="bg-slate-100 p-4 rounded-lg transition-transform hover:bg-gradient-to-r from-blue-400 via-pink-400 to-red-400 hover:translate-y-[-9px] border-2">
                <img src={livementor} alt="img" className="w-24 h-24 mb-4 rounded-full object-cover mx-auto border-2" />
                <h2 className="text-2xl font-bold mb-2 text-gray-700 text-center">Live Career</h2>
                <p className="mb-4 text-black text-center">Recent job market Trend Analysis.......</p>
                <button className="text-sm text-black font-serif block mx-auto">Know More</button>
                <img src={arrow} className="w-4 h-4 mx-auto mt-2" />
              </div>

              <div className="bg-slate-100 p-4 rounded-lg transition-transform hover:bg-gradient-to-r from-blue-400 via-pink-400 to-red-400 hover:translate-y-[-9px] border-2">
                <img src={vr} alt="img" className="w-24 h-24 mb-4 rounded-full object-cover mx-auto border-2" />
                <h2 className="text-2xl font-bold mb-2 text-gray-700 text-center">VR</h2>
                <p className="mb-4 text-black text-center">Services description to be written.............</p>
                <button className="text-sm text-black font-serif block mx-auto">Know More</button>
                <img src={arrow} className="w-4 h-4 mx-auto mt-2" />
              </div>

              <div className="bg-slate-100 p-4 rounded-lg transition-transform hover:bg-gradient-to-r from-blue-400 via-pink-400 to-red-400 hover:translate-y-[-9px] border-2">
                <img src={cafe} alt="img" className="w-24 h-24 mb-4 rounded-full object-cover mx-auto border-2" />
                <h2 className="text-2xl font-bold mb-2 text-gray-700 text-center">Carrer Cafe</h2>
                <p className="mb-4 text-black text-center">Chill and connect with your Friends.......</p>
                <a href="https://chatapp-rhyv.onrender.com/" target="_blank" rel="noopener noreferrer">
                  <button className="text-sm text-black font-serif block mx-auto">Know More</button>
                </a>
                <img src={arrow} className="w-4 h-4 mx-auto mt-2" />
              </div>

              <div className="bg-slate-100 p-4 rounded-lg transition-transform hover:bg-gradient-to-r from-blue-400 via-pink-400 to-red-400 hover:translate-y-[-9px] border-2 col-start-2">
                <img src={mentor} alt="img" className="w-24 h-24 mb-4 rounded-full object-cover mx-auto border-2" />
                <h2 className="text-2xl font-bold mb-2 text-gray-700 text-center">Mentor Connect</h2>
                <p className="mb-4 text-black text-center">Connect with our experienced Mentor</p>
                <button className="text-sm text-black font-serif block mx-auto">Know More</button>
                <img src={arrow} className="w-4 h-4 mx-auto mt-2" />
              </div>

              <div className="bg-slate-100 p-4 rounded-lg transition-transform hover:bg-gradient-to-r from-blue-400 via-pink-400 to-red-400 hover:translate-y-[-9px] border-2">
                <img src={dream} alt="img" className="w-24 h-24 mb-4 rounded-full object-cover mx-auto border-2" />
                <h2 className="text-2xl font-bold mb-2 text-gray-700 text-center">Entrepreneurship</h2>
                <p className="mb-4 text-black text-center">Learn how to startyour own business</p>
                <button className="text-sm text-black font-serif block mx-auto">Know More</button>
                <img src={arrow} className="w-4 h-4 mx-auto mt-2" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Inpage />
        </div>
        <div>
          <Inpage3/>
        </div>
        <div>
          <Inpage2/>
        </div>
        <div>
          <Fotter/>
        </div>
      </>
    </div>
  );
}

export default Body;
