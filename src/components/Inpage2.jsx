import React, { useState } from 'react';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    "Does Long-term mentorship really produce outcomes?",
    "What should be the duration of my long-term mentorship?",
    "How many sessions can I have with the mentor?",
    "When is the right time to take long-term mentorship?",
    "Do you provide any student discount on the long-term mentorship plan?",
    "What are 100% money-back guarantee & mentor-change policies?"
  ];
return (
  <div className='wl-45 rounded-lg'>
  <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white p-6 mt-16 rounded-2xl ">
    <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg p-8">
      <h2 className="text-center text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
      <p className="text-center text-gray-400 mb-8">Find answers to commonly asked questions about Long Term Mentorship</p>
      
      {faqs.map((question, index) => (
        <div key={index} className="bg-gray-700 rounded-lg mb-4 p-4 cursor-pointer" onClick={() => toggleFaq(index)}>
          <div className="flex justify-between items-center">
            <span className="text-lg">{question}</span>
            <span className="text-2xl text-gray-400">{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className="mt-4 text-gray-400">
              <p>This is where the answer to the question will go.</p>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</div>
)}

export default FaqSection;
