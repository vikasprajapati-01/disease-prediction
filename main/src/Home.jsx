import React from 'react';
import PredictionChart from './PredictionChart'; 
import './Home.css'; 
import Image from './assets/Doctor.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-wrapper">
        <h1>Welcome to NeuralNext</h1>
        <p>We provide predictions for various health conditions based on your inputs.</p>
        <strong>Our predictions might not always be accurate. Please consult a doctor.</strong>
        <div className="chart-container">
          <PredictionChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
