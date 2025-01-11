import React, { useEffect } from 'react';
import './bodystyle.css';
import ai from './allimages/artificial-intelligence-icon-sign-logo-vector-49693366.jpg';
import arrow from './allimages/reshot-icon-right-arrow-UCA8NGYZDJ.svg';
import mentor from './allimages/mmm.png';
import livementor from './allimages/connect.jpg';
import Navbar from './Navbar';
import Slider from './Slider';
import Inpage from './Inpage';
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
          className="py-8 text-white font-sans mr-7 mt-20 flex justify-center items-center bg-cover bg-center bg-fixed relative min-h-screen"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            backgroundAttachment: 'fixed'
          }}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50"></div>
          <div className="px-2 mx-auto max-w-full w-full relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-5 text-center animate-fade-in-down">
              Explore Our Categories
            </h1>
            <p className="text-white mb-12 text-center font-serif text-lg md:text-xl lg:text-2xl italic">
              Discover your passion and shape your future
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
              <div className="bg-slate-100 p-4 rounded-lg transition-transform hover:bg-gradient-to-r from-blue-400 via-pink-400 to-red-400 hover:translate-y-[-9px] border-2">
                <img src={ai} alt="img" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4 rounded-full object-cover mx-auto border-2" />
                <h2 className="text-xl md:text-2xl lg:text-3xl mb-2 text-gray-700 text-center font-bold">AI Powered Career</h2>
                <p className="mb-4 text-black text-center text-sm md:text-base lg:text-lg">Enhance your career with our trained AI</p>
                <button className="text-xs md:text-sm lg:text-base text-black font-serif block mx-auto">Know More</button>
                <img src={arrow} className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 mx-auto mt-2" />
              </div>

              <div className="bg-slate-100 p-4 rounded-lg transition-transform hover:bg-gradient-to-r from-blue-400 via-pink-400 to-red-400 hover:translate-y-[-9px] border-2">
                <img src={livementor} alt="img" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4 rounded-full object-cover mx-auto border-2" />
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-gray-700 text-center">Live Career</h2>
                <p className="mb-4 text-black text-center text-sm md:text-base lg:text-lg">Recent job market Trend Analysis.......</p>
                <button className="text-xs md:text-sm lg:text-base text-black font-serif block mx-auto">Know More</button>
                <img src={arrow} className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 mx-auto mt-2" />
              </div>

              <div className="bg-slate-100 p-4 rounded-lg transition-transform hover:bg-gradient-to-r from-blue-400 via-pink-400 to-red-400 hover:translate-y-[-9px] border-2">
                <img src={vr} alt="img" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4 rounded-full object-cover mx-auto border-2" />
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-gray-700 text-center">VR</h2>
                <p className="mb-4 text-black text-center text-sm md:text-base lg:text-lg">Services description to be written.............</p>
                <button className="text-xs md:text-sm lg:text-base text-black font-serif block mx-auto">Know More</button>
                <img src={arrow} className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 mx-auto mt-2" />
              </div>

              <div className="bg-slate-100 p-4 rounded-lg transition-transform hover:bg-gradient-to-r from-blue-400 via-pink-400 to-red-400 hover:translate-y-[-9px] border-2">
                <img src={cafe} alt="img" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4 rounded-full object-cover mx-auto border-2" />
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-gray-700 text-center">Career Cafe</h2>
                <p className="mb-4 text-black text-center text-sm md:text-base lg:text-lg">Chill and connect with your Friends.......</p>
                <a href="https://chatapp-rhyv.onrender.com/" target="_blank" rel="noopener noreferrer">
                  <button className="text-xs md:text-sm lg:text-base text-black font-serif block mx-auto">Know More</button>
                </a>
                <img src={arrow} className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 mx-auto mt-2" />
              </div>

              <div className="bg-slate-100 p-4 rounded-lg transition-transform hover:bg-gradient-to-r from-blue-400 via-pink-400 to-red-400 hover:translate-y-[-9px] border-2 col-start-1 sm:col-start-2">
                <img src={mentor} alt="img" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4 rounded-full object-cover mx-auto border-2" />
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-gray-700 text-center">Mentor Connect</h2>
                <p className="mb-4 text-black text-center text-sm md:text-base lg:text-lg">Connect with our experienced Mentor</p>
                <button className="text-xs md:text-sm lg:text-base text-black font-serif block mx-auto">Know More</button>
                <img src={arrow} className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 mx-auto mt-2" />
              </div>

              <div className="bg-slate-100 p-4 rounded-lg transition-transform hover:bg-gradient-to-r from-blue-400 via-pink-400 to-red-400 hover:translate-y-[-9px] border-2">
                <img src={dream} alt="img" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4 rounded-full object-cover mx-auto border-2" />
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-gray-700 text-center">Entrepreneurship</h2>
                <p className="mb-4 text-black text-center text-sm md:text-base lg:text-lg">Learn how to start your own business</p>
                <button className="text-xs md:text-sm lg:text-base text-black font-serif block mx-auto">Know More</button>
                <img src={arrow} className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 mx-auto mt-2" />
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
