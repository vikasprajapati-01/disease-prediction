import React from 'react';
import PredictionChart from './PredictionChart'; // Import the chart component
import './Home.css'; // Optional: Import your CSS styles

const Home = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to NeuralNext</h1>
      <p>We provide predictions for various health conditions based on your inputs.</p>
      <PredictionChart />
    </div>
  );
};

export default Home;
