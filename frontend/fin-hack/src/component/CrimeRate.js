import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from "chart.js";
import Papa from "papaparse";
import "./css/CrimeRate.css";

// Register the required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

function CrimeRate() {
  const [labels, setLabels] = useState([]);
  const [values, setValues] = useState([]);

  // Fetch and parse the crime rate CSV data
  useEffect(() => {
    Papa.parse(`${process.env.PUBLIC_URL}/CrimeRate.csv`, {
      download: true,
      header: true,
      complete: (result) => {
        const data = result.data[0]; // Assuming all values are in the first row
        const newLabels = Object.keys(data); // Get all month-year labels
        const newValues = Object.values(data).map((value) => parseInt(value, 10) || 0); // Convert values to integers
        
        setLabels(newLabels);
        setValues(newValues);
      },
      error: (error) => console.error("Error loading CSV:", error),
    });
  }, []);

  // Chart data configuration
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Crime Rate Over Time",
        data: values,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(75,192,192,1)",
        fill: true,
      },
    ],
  };

  // Options for the chart
  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Incident Count",
        },
      },
      x: {
        title: {
          display: true,
          text: "Month-Year",
        },
      },
    },
  };

  return (
    <div className="crime-rate-page">
      <div className="crime-rate-header">
        <h1>Crime Rate Analysis</h1>
        <p>Visual representation of crime rates over time.</p>
      </div>

      {/* Crime Rate Line Chart */}
      <div className="crime-rate-chart">
        <Line data={chartData} options={chartOptions} />
      </div>

      {/* Dashboard Navigation Button */}
      <div className="dashboard-link">
        <Link to="/Dashboard">
          <button className="dashboard-button">Back to Dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default CrimeRate;
