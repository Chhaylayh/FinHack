import React from "react";
import { Link } from "react-router-dom";
import "./css/Sentiment.css";

function Sentiment() {
  // Hardcoded data for the sentiment table of contents
  const sentimentData = [
    { category: "Public Opinion", value: "Positive" },
    { category: "Community Satisfaction", value: "Moderate" },
    { category: "Online Reviews", value: "Mixed" },
    { category: "Local Feedback", value: "Positive" },
    { category: "Resident Sentiment", value: "Neutral" },
  ];

  return (
    <div className="sentiment-table">
      {/* Header for the Sentiment table of contents */}
      <div className="sentiment-header">
        <h1>Sentiment Table of Contents</h1>
        <p>Below is the breakdown of the sentiment factors in various categories for the given address.</p>
      </div>

      {/* Table to display the Sentiment data */}
      <table className="sentiment-table-content">
        <thead>
          <tr>
            <th>Category</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {sentimentData.map((item, index) => (
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

export default Sentiment;