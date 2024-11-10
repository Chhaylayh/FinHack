import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Papa from "papaparse";
import "./css/Environmental.css";

function Environmental() {
  const [soilData, setSoilData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const entriesPerPage = 10; // Number of entries to display per page

  const environmentalData = [
    { category: "Air Quality", value: "Good" },
    { category: "Water Quality", value: "Moderate" },
    { category: "Noise Pollution", value: "Low" },
    { category: "Green Spaces", value: "High" },
    { category: "Waste Management", value: "Moderate" },
  ];

  useEffect(() => {
    Papa.parse(`${process.env.PUBLIC_URL}/SoilTypes.csv`, {
      download: true,
      header: true,
      complete: (result) => {
        console.log(result.data); // Verify data loading
        setSoilData(result.data);
      },
      error: (error) => console.error("Error loading CSV:", error),
    });
  }, []);

  // Calculate the current set of entries to display
  const currentEntries = soilData.slice(
    currentPage * entriesPerPage,
    (currentPage + 1) * entriesPerPage
  );

  // Handle going to the next page
  const nextPage = () => {
    if ((currentPage + 1) * entriesPerPage < soilData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle going to the previous page
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="environment-page">
      <div className="environment-header">
        <h1>Environmental and Soil Information</h1>
        <p>Detailed environmental factors and soil type information for the area.</p>
      </div>

      <h2>Environmental Data</h2>
      <table className="environment-table">
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

      <h2>Soil Types</h2>
      <table className="soil-table">
        <thead>
          <tr>
            <th>Class</th>
            <th>Area (Acres)</th>
            <th>Perimeter</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {currentEntries.map((soil, index) => (
            <tr key={index}>
              <td>{soil.CLASS}</td>
              <td>{soil.AREA_ACRES}</td>
              <td>{soil.PERIMETER}</td>
              <td>{`Soil class ${soil.CLASS} with area ${soil.AREA_ACRES} acres and perimeter ${soil.PERIMETER}`}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button onClick={prevPage} disabled={currentPage === 0}>
          Previous
        </button>
        <span>Page {currentPage + 1}</span>
        <button
          onClick={nextPage}
          disabled={(currentPage + 1) * entriesPerPage >= soilData.length}
        >
          Next
        </button>
      </div>

      <div className="dashboard-link">
        <Link to="/Dashboard">
          <button className="dashboard-button">Back to Dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default Environmental;
