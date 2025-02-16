import React from 'react';
import './About.css'; // Import CSS for About page

const About = () => {
  return (
    <div className="about-container">
      <h2>About NeuralNext</h2>
      <p>
        NeuralNext is dedicated to providing cutting-edge health predictions using advanced machine learning algorithms.
        Our platform offers insights into potential health issues, enabling users to take proactive steps towards a healthier lifestyle.
      </p>
      <p>
        We specialize in predicting:
      </p>
      <ul>
        <li>Diabetes Risk Assessment</li>
        <li>Heart Disease Prediction</li>
      </ul>
      <p>
        Our team of experts continuously works to refine our models, ensuring accurate and reliable predictions based on the latest research and data.
      </p>
      <p>
        Join us on the journey towards better health and well-being!
      </p>
    </div>
  );
};

export default About;
