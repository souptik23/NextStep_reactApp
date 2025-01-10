import React from "react";
import Fotter from "./Fotter";
import { Link } from "react-router-dom";



// the landing page
const NextStep = () => {
  return (
    <div>
     
      <header className="fixed top-0 left-0 w-full text-white bg-white body-font shadow-md z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl text-gray-700 font-bold">
              NextStep
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 text-gray-800 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Features
            </a>
            <a className="mr-5 text-gray-800 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Partners
            </a>
            <a className="mr-5 text-gray-800 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              About Us
            </a>
            <a className="mr-5 text-gray-800 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Contact Us
            </a>
          </nav>
          <Link to="/Login"><button
            className="inline-flex items-center text-black bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
            Login
          </button></Link>

          {/* <button onclick="window.location.href='newPage.html'">Login</button> */}
          <button>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
      <hr />
      <section className="text-gray-400 body-font bg-[#AEDDF2]">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center">
          <div className="lg:flex-grow md:w-1/2 flex flex-col items-center text-center">
            <div className="mt-6">
              <h1 className="title-font text-5xl mb-4 text-gray-700 font-bold ">
                Boost Your Career With Us
              </h1>
            </div>
            <p className="mb-8 leading-relaxed text-gray-700">
              Empower your career journey with expert guidance. Unlock your full
              potential and achieve career success.
            </p>
            <div className="flex justify-center">
              {/* <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded">
                Get Started
              </button> */}
                        <Link to="/signup"><button
            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded">
            Get Started
          </button></Link>
            </div>
          </div>
        </div>
        <img
          className="m-auto"
          src="https://www.survivedivorce.com/wp-content/uploads/3-What-Professions-Have-the-Highest-Rate-of-Divorce.jpg"
          alt="Career"
        />
        <div
          className="bg-blue-100 py-10 text-center relative"
          style={{ marginTop: "-100px" }}
        >
          <div className="flex flex-wrap justify-center items-center gap-16">
            <div className="flex items-center text-blue-700 text-left">
              <img
                src="https://mindlerimages.imgix.net/tinyimg/Group%201310.svg"
                alt="Students Impacted"
                className="w-12 h-12 mr-4"
              />
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold">1 Million</h3>
                <p className="text-lg text-blue-600 mt-1">Students Impacted</p>
              </div>
            </div>
            <div className="flex items-center text-blue-700 text-left">
              <img
                src="https://mindlerimages.imgix.net/tinyimg/Group%201311.svg"
                alt="Educators Certified"
                className="w-12 h-12 mr-4"
              />
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold">10,000</h3>
                <p className="text-lg text-blue-600 mt-1">
                  Educators Certified
                </p>
              </div>
            </div>
            <div className="flex items-center text-blue-700 text-left">
              <img
                src="https://mindlerimages.imgix.net/tinyimg/Group%201312.svg"
                alt="Partner Schools"
                className="w-12 h-12 mr-4"
              />
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold">100+</h3>
                <p className="text-lg text-blue-600 mt-1">Partner Colleges</p>
              </div>
            </div>
            <div className="flex items-center text-blue-700 text-left">
              <img
                src="https://mindlerimages.imgix.net/tinyimg/Group%201313.svg"
                alt="University Partners"
                className="w-12 h-12 mr-4"
              />
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold">25+</h3>
                <p className="text-lg text-blue-600 mt-1">
                  University Partners
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-400 body-font  bg-gradient-to-b from-[#DBEAFE] to-white mt-1">
        <div className="container mx-auto max-w-7xl p-10 text-center">
          <h1 className="text-4xl font-bold text-gray-700">
            Shaping the Career Guidance Landscape
          </h1>
          <h2 className="text-md text-gray-600 mb-10">
            Comprehensive career guidance solutions for students, parents,
            educators, and schools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="grid-item ">
              <img
                src="https://mindlerimages.imgix.net/tinyimg/005-creative.svg"
             
                alt="Career Assessment"
                className="w-20 h-20 mb-5 mx-auto"
              />
              <p className="text-base text-gray-600">
                Enable students to identify their best-fit career with our
                world-class career assessment and personalized guidance.
              </p>
            </div>
            <div className="grid-item">
              <img
                // src="https://mindlerimages.imgix.net/tinyimg/002-devices.svg"
                src="https://cdn-icons-png.flaticon.com/512/2641/2641362.png"
                alt="Virtual Career Simulations"
                className="w-20 h-20 mb-5 mx-auto"
              />
              <p className="text-base text-gray-600">
                Empower students to learn all about the professional world with
                virtual career simulations, exhaustive career library, career
                blogs and vlogs.
              </p>
            </div>
            <div className="grid-item">
              <img
                src="https://mindlerimages.imgix.net/tinyimg/003-certificate.svg"
                alt="College Application Guidance"
                className="w-20 h-20 mb-5 mx-auto"
              />
              <p className="text-base text-gray-600">
                Pave student’s way to their dream college with our end-to-end
                college application guidance, scholarship drive, and corporate
                internship program.
              </p>
            </div>
            <div className="grid-item">
              <img
                // src="https://mindlerimages.imgix.net/tinyimg/004-career.svg"
                   src="https://cdn-icons-png.flaticon.com/256/422/422191.png"
                alt="Career Guidance Ecosystem"
                className="w-20 h-20 mb-5 mx-auto"
              />
              <p className="text-base text-gray-600">
                Enable schools in creating a career guidance ecosystem in sync
                with the vision of New Education Policy.
              </p>
            </div>
            <div className="grid-item">
              <img
                // src="https://mindlerimages.imgix.net/tinyimg/010-team.svg"
                src="https://cdn-icons-png.flaticon.com/256/1503/1503138.png"
                alt="Certified Career Coaches"
                className="w-20 h-20 mb-5 mx-auto"
              />
              <p className="text-base text-gray-600">
                Empower educators to become International Certified Career
                Coaches and build a career in career guidance & counselling.
              </p>
            </div>
            <div className="grid-item">
              <img
                src="https://mindlerimages.imgix.net/tinyimg/007-startup.svg"
                alt="Technology-Driven Guidance"
                className="w-20 h-20 mb-5 mx-auto"
              />
              <p className="text-base text-gray-600">
                Revolutionary assessment platform and technology-driven career
                guidance solutions for educators to boost their career guidance
                endeavours.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-white bg-gray-900 body-font mt-40"></section>

      <section className="testimonials my-12 mt-3">
        <div className="container mx-auto mb-40">
          <h1 className="text-center text-3xl font-bold text-orange-500 uppercase pb-2 mt-3">
            Testimonials
          </h1>
          <div className="h-1 bg-orange-500 w-40 mx-auto my-5"></div>
          <p className="text-center font-serif text-gray-700">
            Some motivations for your Bright Future
          </p>
          <div className="mt-20">
            <div className="flex flex-wrap justify-center mt-8">
              {[
                {
                  name: "JOHN SNOW",
                  title: "Co-founder at XYZ",
                  img: "https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg",
                  text: '"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work."',
                },
                {
                  name: "ANDREW CENA",
                  title: "MANAGER at XYZ",
                  img: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
                  text: '"A career is not just about earning a living; it’s about exploring your soul. Find out what you like doing best, and get someone to pay you for it."',
                },
                {
                  name: "PRAVAKAR DAS",
                  title: "CEO OF XYZ",
                  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-TP7ojNev8ouI_nlFWLxxwlwi7YLVCIUaWQ&s",
                  text: '"Success doesn’t come from what you do occasionally, it comes from what you do consistently."',
                },
              ].map((testimonial, index) => (
                <div key={index} className="w-full md:w-1/3 p-6 text-center">
                  <div className="relative bg-gray-200 p-6 rounded-lg shadow-lg">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="user absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-4 border-white"
                    />
                    <blockquote className="mt-20 text-sm leading-relaxed text-gray-600">
                      {testimonial.text}
                    </blockquote>
                    <h3 className="text-lg mt-4 font-bold text-orange-500">
                      {testimonial.name}{" "}
                      <span className="block text-gray-600 text-sm">
                        {testimonial.title}
                      </span>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="text-white bg-gray-900 body-font h-70">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-serif font-bold title-font mb-1 bg-gray-900 text-white">Why Choose Us?</h1>
    </div>
    <div className="flex flex-wrap -m-4 text-center">
      {[
        { title: 'Trendy', iconPath: 'M8 17l4 4 4-4m-4-5v9 M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29' },
        { title: 'Mentors Connected', iconPath: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 7a4 4 0 110 8a4 4 0 010-8z' },
        { title: 'AI-Assistant', iconPath: 'M3 18v-6a9 9 0 0118 0v6 M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z' },
        { title: 'Best-Fit Career', iconPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
      ].map((reason, index) => (
        <div key={index} className="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div className="border-2 border-gray-900 px-4 py-6 rounded-lg">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
              <path d={reason.iconPath}></path>
            </svg>
            <h2 className="title-font font-medium text-3xl text-white">{reason.title}</h2>
          </div>
        </div>
      ))}
    </div>
  </div>
</section> */}
      <section className="text-white bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-serif font-bold title-font mb-1 bg-gray-900 text-white">
              Why Choose Us?
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            {[
              {
                title: "Trendy",
                iconPath:
                  "M8 17l4 4 4-4m-4-5v9 M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29",
              },
              {
                title: "Mentors Connected",
                iconPath:
                  "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 7a4 4 0 110 8a4 4 0 010-8z",
              },
              {
                title: "AI-Assistant",
                iconPath:
                  "M3 18v-6a9 9 0 0118 0v6 M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z",
              },
              {
                title: "Best-Fit Career",
                iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
              },
            ].map((reason, index) => (
              <div key={index} className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-900 px-4 py-6 rounded-lg">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-indigo-500 w-12 h-12 mb-3 inline-block transition-transform duration-300 hover:scale-110 hover:text-indigo-300 hover:shadow-lg hover:shadow-indigo-500/50"
                    viewBox="0 0 24 24"
                  >
                    <path d={reason.iconPath}></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-white">
                    {reason.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-bold title-font mb-4 text-gray-700">
              OUR PARTNERS
            </h1>
            {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base"> SOME OF OUR PARTNERS.....ADD TEXT IF NEEDED</p> */}
          </div>
          <div className="flex flex-wrap -m-4 text-gray-700">
            {[
              {
                name: "KIIT-DU",
                title: "",
                img: "data:image/png;base64,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",
              }
            ].map((partner, index) => (
              <div key={index} className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt={partner.name}
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src={partner.img}
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      {partner.name}
                    </h2>
                    <h3 className="text-gray-500 mb-3">{partner.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div>
        <Fotter />
      </div>
    </div>
  );
};

export default NextStep;
