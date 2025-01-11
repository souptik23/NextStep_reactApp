import React, { useState } from 'react';

function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 8;

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());

    fetch('http://localhost:3000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataObj),
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

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto backdrop-blur-lg bg-white/20 p-8 rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-4xl font-bold text-white bg-gradient-to-r from-white to-pink-200 bg-clip-text">Create Your Account</h2>
            <div className="text-white text-lg font-semibold">Step {currentStep} of {totalSteps}</div>
          </div>
          <div className="w-full bg-gray-200/30 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-400 to-purple-500 h-3 rounded-full transition-all duration-500 shadow-lg"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {currentStep === 1 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-semibold text-white mb-6">Basic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-white text-lg mb-2">First Name</label>
                  <input type="text" name="firstName" required className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300" />
                </div>
                <div>
                  <label className="block text-white text-lg mb-2">Last Name</label>
                  <input type="text" name="lastName" required className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300" />
                </div>
                <div>
                  <label className="block text-white text-lg mb-2">Email Address</label>
                  <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300" />
                </div>
                <div>
                  <label className="block text-white text-lg mb-2">Phone Number</label>
                  <input type="tel" name="phone" className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300" />
                </div>
                <div>
                  <label className="block text-white text-lg mb-2">Password</label>
                  <input type="password" name="password" required className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300" />
                </div>
                <div>
                  <label className="block text-white text-lg mb-2">Confirm Password</label>
                  <input type="password" name="confirmPassword" required className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300" />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-semibold text-white mb-6">Demographic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-white text-lg mb-2">Date of Birth</label>
                  <input type="date" name="dob" className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300" />
                </div>
                <div>
                  <label className="block text-white text-lg mb-2">Gender</label>
                  <select name="gender" className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-white text-lg mb-2">Location</label>
                  <input type="text" name="location" placeholder="City, State, Country" className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300" />
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-semibold text-white mb-6">Educational Background</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-2">
                  <label className="block text-white text-lg mb-2">Highest Education Level</label>
                  <select name="education" className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300">
                    <option value="">Select Education Level</option>
                    <option value="high-school">High School</option>
                    <option value="bachelors">Bachelor's Degree</option>
                    <option value="masters">Master's Degree</option>
                    <option value="phd">Ph.D.</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-white text-lg mb-2">Field of Study</label>
                  <input type="text" name="fieldOfStudy" className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300" />
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-semibold text-white mb-6">Professional Experience</h3>
              <div className="grid grid-cols-1 gap-8">
                <div>
                  <label className="block text-white text-lg mb-2">Current/Most Recent Job Title</label>
                  <input type="text" name="jobTitle" className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300" />
                </div>
                <div>
                  <label className="block text-white text-lg mb-2">Years of Experience</label>
                  <input type="number" name="experience" min="0" className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300" />
                </div>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-semibold text-white mb-6">Skills & Interests</h3>
              <div className="grid grid-cols-1 gap-8">
                <div>
                  <label className="block text-white text-lg mb-2">Primary Skills</label>
                  <input type="text" name="skills" placeholder="e.g., Project Management, Programming, Design" className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300" />
                </div>
                <div>
                  <label className="block text-white text-lg mb-2">Areas of Interest</label>
                  <textarea name="interests" rows="3" className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"></textarea>
                </div>
              </div>
            </div>
          )}

          {currentStep === 6 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-semibold text-white mb-6">Career Goals</h3>
              <div className="grid grid-cols-1 gap-8">
                <div>
                  <label className="block text-white text-lg mb-2">Short-term Career Goals</label>
                  <textarea name="shortTermGoals" rows="3" className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"></textarea>
                </div>
                <div>
                  <label className="block text-white text-lg mb-2">Long-term Career Goals</label>
                  <textarea name="longTermGoals" rows="3" className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"></textarea>
                </div>
              </div>
            </div>
          )}

          {currentStep === 7 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-semibold text-white mb-6">Additional Information</h3>
              <div className="grid grid-cols-1 gap-8">
                <div>
                  <label className="block text-white text-lg mb-2">LinkedIn Profile</label>
                  <input type="url" name="linkedin" placeholder="https://linkedin.com/in/yourprofile" className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300" />
                </div>
                <div>
                  <label className="block text-white text-lg mb-2">Portfolio Website</label>
                  <input type="url" name="portfolio" placeholder="https://yourportfolio.com" className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300" />
                </div>
              </div>
            </div>
          )}

          {currentStep === 8 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-semibold text-white mb-6">Review & Submit</h3>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md">
                <p className="text-white text-lg mb-4">Please review your information before submitting. By clicking "Complete Registration", you agree to our Terms of Service and Privacy Policy.</p>
                <div className="flex items-center mb-4">
                  <input type="checkbox" name="agreement" required className="mr-3 h-5 w-5" />
                  <label className="text-white">I confirm all information is correct</label>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between pt-8">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-8 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                Previous
              </button>
            )}
            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105 ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105 ml-auto"
              >
                Complete Registration
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;