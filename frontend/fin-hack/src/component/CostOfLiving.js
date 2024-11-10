import React from "react";
import { Link } from "react-router-dom";
import "./css/CostOfLiving.css";

function CostOfLiving() {
  // Hardcoded data for the Cost of Living table of contents
  const costOfLivingData = [
    { category: "Housing", value: "Expensive" },
    { category: "Utilities", value: "Moderate" },
    { category: "Transportation", value: "Affordable" },
    { category: "Groceries", value: "Moderate" },
    { category: "Healthcare", value: "Expensive" },
  ];

  return (
    <div className="cost-living-table">
      {/* Header for the Cost of Living table of contents */}
      <div className="cost-living-header">
        <h1>Cost of Living Table of Contents</h1>
        <p>Below is the breakdown of the cost of living factors in various categories for the given address.</p>
      </div>

      {/* Table to display the Cost of Living data */}
      <table className="cost-living-table-content">
        <thead>
          <tr>
            <th>Category</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {costOfLivingData.map((item, index) => (
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

export default CostOfLiving;
