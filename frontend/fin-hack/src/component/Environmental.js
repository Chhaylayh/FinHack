import React from "react";
import { Link } from "react-router-dom";
import "./css/Environmental.css";

function Environmental() {
  // Hardcoded data for the environmental table of contents
  const environmentalData = [
    { category: "Air Quality", value: "Good" },
    { category: "Water Quality", value: "Moderate" },
    { category: "Noise Pollution", value: "Low" },
    { category: "Green Spaces", value: "High" },
    { category: "Waste Management", value: "Moderate" },
  ];

  return (
    <div className="environmental-table">
      {/* Header for the Environmental table of contents */}
      <div className="environmental-header">
        <h1>Environmental Table of Contents</h1>
        <p>Below is the breakdown of the environmental factors in various categories for the given address.</p>
      </div>

      {/* Table to display the Environmental data */}
      <table className="environmental-table-content">
        <thead>
          <tr>
            <th>Category</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {environmentalData.map((item, index) => (
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

export default Environmental;