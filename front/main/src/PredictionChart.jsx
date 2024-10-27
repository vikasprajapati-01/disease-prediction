import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

// Register the necessary components from Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const PredictionChart = () => {
  // Sample data for the chart
  const data = {
    labels: ['Diabetes', 'Heart Disease', 'Cancer', 'Asthma'],
    datasets: [
      {
        label: 'Predicted Cases',
        data: [50, 30, 15, 10], // Sample data
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(54, 162, 235, 0.6)',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Predictions Overview',
      },
    },
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Predictions Overview</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default PredictionChart;
