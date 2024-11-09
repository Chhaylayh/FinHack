import React from "react";
import { Link } from "react-router-dom";
import "./css/CrimeRate.css";

function CrimeRate() {
  // Hardcoded data for the crime rate table of contents
  const crimeData = [
    { category: "Violent Crime", value: "Moderate" },
    { category: "Property Crime", value: "High" },
    { category: "Drug-Related Crime", value: "Low" },
    { category: "Cyber Crime", value: "Moderate" },
    { category: "Theft", value: "High" },
  ];

  return (
    <div className="crime-rate-table">
      {/* Header for the Crime Rate table of contents */}
      <div className="crime-rate-header">
        <h1>Crime Rate Table of Contents</h1>
        <p>Below is the breakdown of the crime rate in various categories for the given address.</p>
      </div>

      {/* Table to display the Crime Rate data */}
      <table className="crime-rate-table-content">
        <thead>
          <tr>
            <th>Category</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {crimeData.map((item, index) => (
            <tr key={index}>
              <td>{item.category}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Button to navigate back to the Dashboard */}
      <div className="dashboard-link">
        <Link to="/Dashboard">
          <button className="dashboard-button">Back to Dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default CrimeRate;
