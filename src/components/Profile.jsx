import { useEffect } from 'react';
// import { Chart } from 'chart.js/auto';
import Navbar from './Navbar';


const CareerCounselingProfile = () => {
//   useEffect(() => {
//     const ctx = document.getElementById('skillChart').getContext('2d');
//     new Chart(ctx, {
//       type: 'pie',
//       data: {
//         labels: ['Career Counseling Sessions', 'Internship Applications', 'Webinars Attended', 'Mentorship Meetings'],
//         datasets: [{
//           label: 'Career Counseling Activities',
//           data: [25, 20, 30, 25],
//           backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
//           borderColor: '#fff',
//           borderWidth: 1
//         }]
//       },
//       options: {
//         responsive: true,
//         plugins: {
//           legend: {
//             position: 'top',
//           },
//           tooltip: {
//             callbacks: {
//               label: function(tooltipItem) {
//                 return tooltipItem.label + ': ' + tooltipItem.raw + '%';
//               }
//             }
//           }
//         }
//       }
//     });
//   }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 min-h-screen text-gray-900">
      <Navbar/>
      <nav>
        
      </nav>

      {/* Main Content */}
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Student Profile and Career Dashboard */}
          <div>
            {/* Student Profile Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-blue-500 text-center p-6">
                <img
                  className="w-32 h-32 rounded-full mx-auto border-4 border-green-500 object-cover transition-transform transform hover:scale-110"
                  src=""
                  alt="student dp"
                />
                <h3 className="text-white text-xl font-bold mt-4">Suddhasatwa Das</h3>
              </div>
              <div className="p-6">
                <p><strong>Class:</strong> 12</p>
                <p><strong>Pass Year:</strong> 2024</p>
                <p><strong>Stream:</strong> Science</p>
                <p><strong>10th Score:</strong> 93%</p>
                <p><strong>12th Score:</strong> 92%</p>
                <p><strong>Address:</strong> Kolkata</p>
                <p><strong>Mobile Number:</strong> 8617077929</p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:suddhasattwadas2016@gmail.com" className="text-blue-500">
                    suddhasattwadas2016@gmail.com
                  </a>
                </p>
                {/* Social Media Links */}
                <div className="flex justify-center mt-4 space-x-4">
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-700">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-pink-600">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-600">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-400">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Career Dashboard */}
            <div className="bg-white shadow-lg rounded-lg mt-6 p-6">
              <h3 className="text-lg font-semibold text-blue-500 border-b-2 border-green-500 pb-2">Career Dashboard</h3>
              <div className="mt-4">
                <div className="flex justify-between items-center border-b py-2">
                  <span>Internships Completed:</span>
                  <span className="text-green-600 font-semibold">3</span>
                </div>
                <div className="flex justify-between items-center border-b py-2">
                  <span>Skill Assessments Passed:</span>
                  <span className="text-green-600 font-semibold">5</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Certifications Achieved:</span>
                  <span className="text-green-600 font-semibold">2</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pie Chart and Recent Activities */}
          <div className="md:col-span-2">
            {/* Recent Career Counseling Activities */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-500 border-b-2 border-green-500 pb-2">Recent Career Counseling Activities</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-center border-b py-2">
                  <i className="fas fa-calendar-check text-blue-500 text-2xl"></i>
                  <span className="ml-4">Career Counseling Session with a Professional</span>
                  <span className="ml-auto text-sm text-gray-500">1 hour ago</span>
                  <span className="ml-4 text-green-600 font-semibold">Completed</span>
                </div>
                <div className="flex items-center border-b py-2">
                  <i className="fas fa-briefcase text-blue-500 text-2xl"></i>
                  <span className="ml-4">Completed Internship Application</span>
                  <span className="ml-auto text-sm text-gray-500">3 hours ago</span>
                  <span className="ml-4 text-yellow-600 font-semibold">Pending</span>
                </div>
                <div className="flex items-center border-b py-2">
                  <i className="fas fa-graduation-cap text-blue-500 text-2xl"></i>
                  <span className="ml-4">Attended University Admission Webinar</span>
                  <span className="ml-auto text-sm text-gray-500">1 day ago</span>
                  <span className="ml-4 text-green-600 font-semibold">Completed</span>
                </div>
                <div className="flex items-center py-2">
                  <i className="fas fa-user-tie text-blue-500 text-2xl"></i>
                  <span className="ml-4">Met with Career Mentor</span>
                  <span className="ml-auto text-sm text-gray-500">2 days ago</span>
                  <span className="ml-4 text-green-600 font-semibold">Completed</span>
                </div>
              </div>
            </div>

            {/* Pie Chart */}
            <div className="bg-white shadow-lg rounded-lg mt-6 p-6">
              <h4 className="text-center text-lg font-semibold text-blue-500 mb-4">Skill Distribution</h4>
              <canvas id="skillChart"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCounselingProfile;


// import { useEffect } from 'react';
// // import { Chart } from 'chart.js/auto';
// import Navbar from './Navbar';

// const CareerCounselingProfile = () => {
//   useEffect(() => {
//     // Create the chart when the component mounts
//     const ctx = document.getElementById('skillChart').getContext('2d');
//     new Chart(ctx, {
//       type: 'pie',
//       data: {
//         labels: ['Career Counseling Sessions', 'Internship Applications', 'Webinars Attended', 'Mentorship Meetings'],
//         datasets: [{
//           label: 'Career Counseling Activities',
//           data: [25, 20, 30, 25],
//           backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
//           borderColor: '#fff',
//           borderWidth: 1
//         }]
//       },
//       options: {
//         responsive: true,
//         plugins: {
//           legend: {
//             position: 'top',
//           },
//           tooltip: {
//             callbacks: {
//               label: function (tooltipItem) {
//                 return tooltipItem.label + ': ' + tooltipItem.raw + '%';
//               }
//             }
//           }
//         }
//       }
//     });

//     // Add Ionicons scripts for modern and legacy browsers
//     const ioniconsModuleScript = document.createElement('script');
//     ioniconsModuleScript.src = 'https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.esm.js';
//     ioniconsModuleScript.type = 'module';
//     document.body.appendChild(ioniconsModuleScript);

//     const ioniconsNomoduleScript = document.createElement('script');
//     ioniconsNomoduleScript.src = 'https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.js';
//     ioniconsNomoduleScript.setAttribute('nomodule', '');
//     document.body.appendChild(ioniconsNomoduleScript);

//     // Cleanup scripts on component unmount
//     return () => {
//       document.body.removeChild(ioniconsModuleScript);
//       document.body.removeChild(ioniconsNomoduleScript);
//     };
//   }, []);

//   return (
//     <div className="bg-gradient-to-r from-blue-500 to-green-500 min-h-screen text-gray-900">
//       {/* Navbar */}
//       <nav>
//         <Navbar />
//       </nav>

//       {/* Main Content */}
//       <div className="container mx-auto mt-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Student Profile and Career Dashboard */}
//           <div>
//             {/* Student Profile Card */}
//             <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//               <div className="bg-blue-500 text-center p-6">
//                 <img
//                   className="w-32 h-32 rounded-full mx-auto border-4 border-green-500 object-cover transition-transform transform hover:scale-110"
//                   src=""
//                   alt="student dp"
//                 />
//                 <h3 className="text-white text-xl font-bold mt-4">Suddhasatwa Das</h3>
//               </div>
//               <div className="p-6">
//                 <p><strong>Class:</strong> 12</p>
//                 <p><strong>Pass Year:</strong> 2024</p>
//                 <p><strong>Stream:</strong> Science</p>
//                 <p><strong>10th Score:</strong> 93%</p>
//                 <p><strong>12th Score:</strong> 92%</p>
//                 <p><strong>Address:</strong> Kolkata</p>
//                 <p><strong>Mobile Number:</strong> 8617077929</p>
//                 <p>
//                   <strong>Email:</strong>{' '}
//                   <a href="mailto:suddhasattwadas2016@gmail.com" className="text-blue-500">
//                     suddhasattwadas2016@gmail.com
//                   </a>
//                 </p>
//                 {/* Social Media Links */}
//                 <div className="flex justify-center mt-4 space-x-4">
//                   <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-700">
//                     <i className="fab fa-linkedin"></i>
//                   </a>
//                   <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-pink-600">
//                     <i className="fab fa-instagram"></i>
//                   </a>
//                   <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-600">
//                     <i className="fab fa-facebook-f"></i>
//                   </a>
//                   <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-400">
//                     <i className="fab fa-twitter"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Career Dashboard */}
//             <div className="bg-white shadow-lg rounded-lg mt-6 p-6">
//               <h3 className="text-lg font-semibold text-blue-500 border-b-2 border-green-500 pb-2">Career Dashboard</h3>
//               <div className="mt-4">
//                 <div className="flex justify-between items-center border-b py-2">
//                   <span>Internships Completed:</span>
//                   <span className="text-green-600 font-semibold">3</span>
//                 </div>
//                 <div className="flex justify-between items-center border-b py-2">
//                   <span>Skill Assessments Passed:</span>
//                   <span className="text-green-600 font-semibold">5</span>
//                 </div>
//                 <div className="flex justify-between items-center py-2">
//                   <span>Certifications Achieved:</span>
//                   <span className="text-green-600 font-semibold">2</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Pie Chart and Recent Activities */}
//           <div className="md:col-span-2">
//             {/* Recent Career Counseling Activities */}
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <h3 className="text-lg font-semibold text-blue-500 border-b-2 border-green-500 pb-2">Recent Career Counseling Activities</h3>
//               <div className="mt-4 space-y-4">
//                 <div className="flex items-center border-b py-2">
//                   <i className="fas fa-calendar-check text-blue-500 text-2xl"></i>
//                   <span className="ml-4">Career Counseling Session with a Professional</span>
//                   <span className="ml-auto text-sm text-gray-500">1 hour ago</span>
//                   <span className="ml-4 text-green-600 font-semibold">Completed</span>
//                 </div>
//                 <div className="flex items-center border-b py-2">
//                   <i className="fas fa-briefcase text-blue-500 text-2xl"></i>
//                   <span className="ml-4">Completed Internship Application</span>
//                   <span className="ml-auto text-sm text-gray-500">3 hours ago</span>
//                   <span className="ml-4 text-yellow-600 font-semibold">Pending</span>
//                 </div>
//                 <div className="flex items-center border-b py-2">
//                   <i className="fas fa-graduation-cap text-blue-500 text-2xl"></i>
//                   <span className="ml-4">Attended University Admission Webinar</span>
//                   <span className="ml-auto text-sm text-gray-500">1 day ago</span>
//                   <span className="ml-4 text-green-600 font-semibold">Completed</span>
//                 </div>
//                 <div className="flex items-center py-2">
//                   <i className="fas fa-user-tie text-blue-500 text-2xl"></i>
//                   <span className="ml-4">Met with Career Mentor</span>
//                   <span className="ml-auto text-sm text-gray-500">2 days ago</span>
//                   <span className="ml-4 text-green-600 font-semibold">Completed</span>
//                 </div>
//               </div>
//             </div>

//             {/* Pie Chart */}
//             <div className="bg-white shadow-lg rounded-lg mt-6 p-6">
//               <h4 className="text-center text-lg font-semibold text-blue-500 mb-4">Skill Distribution</h4>
//               <canvas id="skillChart"></canvas>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CareerCounselingProfile;
