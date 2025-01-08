import React from 'react';

function RegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      class: event.target.class.value,
      stream: event.target.stream.value,
      tenthMarks: event.target.tenthMarks.value,
      twelfthMarks: event.target.twelfthMarks.value,
      address: event.target.address.value,
      password: event.target.password.value,
      gender: event.target.gender.value,
    };

    fetch('http://localhost:3000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message || 'Registration successful');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error sending email');
      });
  };

  return (
    <div className='bg-gradient-to-b from-blue-200 to-white'>
      <div className="max-w-2xl w-full bg-gradient-to-b from-blue-200 to-white p-8 rounded-lg shadow-lg mx-auto">
        <div className="text-center text-2xl font-semibold text-gray-800 mb-6">
          Student Registration
        </div>
        <form id="registration-form" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Username</label>
              <input type="text" id="username" name="username" placeholder="Enter your username" required className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Class</label>
              <input type="text" id="class" name="class" placeholder="Enter your class" required className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Stream</label>
              <input type="text" id="stream" name="stream" placeholder="Enter your stream" required className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">10th Marks</label>
              <input type="number" id="tenthMarks" name="tenthMarks" placeholder="Enter your 10th marks (%)" required className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">12th Marks</label>
              <input type="number" id="twelfthMarks" name="twelfthMarks" placeholder="Enter your 12th marks (%)" required className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Address</label>
              <input type="text" id="address" name="address" placeholder="Enter your address" required className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" required className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Confirm Password</label>
              <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" required className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-gray-700 font-medium">Gender</span>
            <div className="flex items-center space-x-4 mt-2">
              <label className="flex items-center">
                <input type="radio" name="gender" value="Male" required className="mr-2" />
                <span className="text-gray-700">Male</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="gender" value="Female" className="mr-2" />
                <span className="text-gray-700">Female</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="gender" value="Prefer not to say" className="mr-2" />
                <span className="text-gray-700">Prefer not to say</span>
              </label>
            </div>
          </div>
          <div className="mt-6">
            <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-blue-300 text-white py-3 rounded-lg text-lg font-semibold hover:bg-gradient-to-l focus:outline-none">
              Register
            </button>
          </div>
        </form>
      </div>
      <div className="absolute top-1/2 right-20 transform -translate-y-1/2 w-[250px] z-10">
        
      </div>
    </div>
  );
}

export default RegistrationForm;