import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqData = [
    {
      question: "What is NeuralNext?",
      answer: "NeuralNext is a platform that provides health predictions using machine learning."
    },
    {
      question: "How accurate are the predictions?",
      answer: "Our predictions are based on extensive data and algorithms to ensure accuracy."
    },
    {
      question: "What types of diseases can I check?",
      answer: "You can check for diabetes and heart disease predictions."
    },
    {
      question: "Is there a fee for using the service?",
      answer: "Currently, the service is free for users."
    },
    {
      question: "How do I interpret the results?",
      answer: "The results will provide insights into your risk factors and recommended actions."
    },
    // Add more FAQs as needed
  ];

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <h3 onClick={() => toggleQuestion(index)} className="faq-question">
            {item.question}
          </h3>
          {activeQuestion === index && <p className="faq-answer">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
