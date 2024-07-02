import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ActiveUsersChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.month),
    datasets: [
      {
        label: '',
        data: data.map(item => item.activeUsers),
        backgroundColor: '#641CC0',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
       display: false,
      },
      title: {
        display: true,
        text: 'Total Active Users',
        align:'start',
        padding: {
            bottom: 30, // Add padding to the bottom of the title
          },
        
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default ActiveUsersChart;
