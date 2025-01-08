import React from 'react';

const MentorsSection = () => {
    return (
        <div className='mr-20 w-screen'>
            {/* <div className="mentors-section text-center py-12 border-2 border-yellow-200 rounded-3xl bg-yellow-50 mx-4 max-w-screen-xl my-8 mt-40 ml-2"> */}
            <div className="mentors-section text-center py-12  rounded-3xl bg-gradient-to-b from-yellow-50 to-white mx-5 max-w-screen-xl my-8 mt-40 ml-2">

                <h2 className="text-3xl mb-4 font-bold text-gray-700 mt-5">Get Mentored By The Star Mentors</h2>
                <div className='mt-6'><p className="text-gray-600 mb-8">Connect with our star mentors, distinguished leaders in their fields, to receive personalized mentorship.</p></div>
                <div className='mt-4'>
                <div className="mentors-grid flex flex-wrap justify-center gap-6"> 
                    {/* Mentor Card 1 */}
                    <div className="mentor-card bg-white rounded-xl shadow-lg p-3 text-center relative hover:shadow-2xl hover:scale-105 transform transition-transform duration-300 ease-in-out w-64 h-80">
                        <div className="mentor-image mb-4">
                            <img src="https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp" alt="Mentor" className="w-14 h-14 rounded-full mx-auto object-cover" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Vikas Bharti</h3>
                        <p className="text-gray-600 mb-4 text-sm">Senior Software Engineer<br />15 Years of Experience</p>
                        <p className="flex justify-center items-center text-gray-500 mb-4 text-sm">
                            <img src="https://www.preplaced.in/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fcomapny-logos%252FWalmart%2520Global%2520Tech%2520India%3Falt%3Dmedia%26token%3D19f0339a-a937-4d4b-8fc8-216ddd1be5f4&w=64&q=75" alt="Company Logo" className="w-4 h-4 mr-2" /> Walmart Global Tech India
                        </p>
                        <button className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition mt-12 w-full font-serif">Book Free Trial</button>
                        <div className="mentor-rating absolute top-4 right-4 text-yellow-400 font-bold">★ 5.0</div>
                    </div>

                    {/* Repeat similar cards for other mentors with adjusted sizes */}
               
                   
               
                
                    <div className="mentor-card bg-white rounded-xl shadow-lg p-3 text-center relative hover:shadow-2xl hover:scale-105 transform transition-transform duration-300 ease-in-out w-64 h-80">
                        <div className="mentor-image mb-4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs10cupyp3Wf-pZvdPjGQuKne14ngVZbYdDQ&s" alt="Mentor" className="w-14 h-14 rounded-full mx-auto object-cover" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Shishir Chandra</h3>
                        <p className="text-gray-600 mb-4 text-sm">Director of Technology - Distributed Systems<br />16 Years of Experience</p>
                        <p className="flex justify-center items-center text-gray-500 mb-4 text-sm">
                            <img src="https://www.preplaced.in/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fcomapny-logos%252FTarget%3Falt%3Dmedia%26token%3D272e87c3-d761-461c-a86a-458fabad58cc&w=64&q=75" alt="Company Logo" className="w-4 h-4 mr-2" /> Target
                        </p>
                        <button className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition mt-7 w-full font-serif">Book Free Trial</button>
                        <div className="mentor-rating absolute top-4 right-4 text-yellow-400 font-bold">★ 5.0</div>
                    </div>
                    <div className="mentor-card bg-white rounded-xl shadow-lg p-3 text-center relative hover:shadow-2xl hover:scale-105 transform transition-transform duration-300 ease-in-out w-64 h-80">
                        <div className="mentor-image mb-4">
                            <img src="https://www.profilebakery.com/wp-content/uploads/2023/05/headshot-ai-71-113.jpg" alt="Mentor" className="w-14 h-14 rounded-full mx-auto object-cover" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Laura Marano</h3>
                        <p className="text-gray-600 mb-4 text-sm">Director of Technology - Distributed Systems<br />16 Years of Experience</p>
                        <p className="flex justify-center items-center text-gray-500 mb-4 text-sm">
                            <img src="https://www.preplaced.in/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fcomapny-logos%252FMeta%3Falt%3Dmedia%26token%3Dc91a76cb-d7bc-441d-84f8-81cacaddfeb5&w=128&q=75" alt="Company Logo" className="w-4 h-4 mr-2" /> Meta
                        </p>
                        <button className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition mt-7 w-full font-serif">Book Free Trial</button>
                        <div className="mentor-rating absolute top-4 right-4 text-yellow-400 font-bold">★ 5.0</div>
                    </div>
              

                    {/* Add more mentor cards in similar fashion */}
                </div>
                </div>

                <div className="explore-button mt-8">
                    <button className="bg-white border-2 border-yellow-200 py-2 px-6 rounded-lg hover:bg-yellow-100 hover:scale-105 transform transition-transform duration-300 ease-in-out flex items-center justify-center mx-auto">
                        Explore All Mentors
                        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                            <path d="M6 12L10 8L6 4" stroke="#161616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MentorsSection;
