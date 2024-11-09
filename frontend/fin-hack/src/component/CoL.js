import React from "react";
import { Link } from "react-router-dom";
import "./css/CoL.css";

function Col() {
  // Hardcoded data for the cost of living table of contents
  const colData = [
    { category: "Housing", value: "Moderate" },
    { category: "Utilities", value: "Affordable" },
    { category: "Groceries", value: "Moderate" },
    { category: "Transportation", value: "Affordable" },
    { category: "Healthcare", value: "Expensive" },
  ];

  return (
    <div className="col-table">
      {/* Header for the Cost of Living table of contents */}
      <div className="col-header">
        <h1>Cost of Living Table of Contents</h1>
        <p>Below is the breakdown of the cost of living in various categories for the given address.</p>
      </div>

      {/* Table to display the Cost of Living data */}
      <table className="col-table-content">
        <thead>
          <tr>
            <th>Category</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {colData.map((item, index) => (
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

export default Col;
