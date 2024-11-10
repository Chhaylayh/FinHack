import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/CoL.css";

function Col() {
  const [colData, setColData] = useState([]);

  // Fetch the cost of living data from the API
  useEffect(() => {
    const fetchColData = async () => {
      try {
        const response = await fetch("https://zylalabs.com/api/3425/united+states+cost+of+living+api/3725/get+cities", { 
          method: 'GET'
        });
        if (!response.ok) {
          throw new Error("Failed to fetch cost of living data");
        }
        const data = await response.json();
        setColData(data);
      } catch (error) {
        console.error("Error fetching cost of living data:", error);
      }
    };

    fetchColData();
  }, []);

  return (
    <div className="col-table">
      {/* Header for the Cost of Living table of contents */}
      <div className="col-header">
        <h1>Cost of Living Table of Contents</h1>
        <p>Below is the breakdown of the cost of living in various categories for the given address.</p>
      </div>

      {/* Table to display the Cost of Living data */}
      {colData.length > 0 ? (
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
      ) : (
        <p>Loading cost of living data...</p>
      )}

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
