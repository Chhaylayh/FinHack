import React, { useState } from "react";
import { Chart } from "react-google-charts";
import { Link } from "react-router-dom";
import "./css/Dashboard.css";

function Dashboard() {
  const [address, setAddress] = useState(""); // State to store the input address from the user
  const [searchAddress, setSearchAddress] = useState(""); // State to store the address after search submission
  const [notFound, setNotFound] = useState(false); // State to track if the address was not found

  const getRiskLevelColor = (level) => {
    switch (level) {
      case "Low":
        return "green";
      case "Moderate":
        return "orange";
      case "High":
        return "red";
      default:
        return "black";
    }
  };

  // Handles the form submission to search for an address
  const handleSearch = (e) => {
    e.preventDefault();
    if (address === "") {
      setSearchAddress("");
      setNotFound(true);
    } else {
      setSearchAddress(address); // Update the address to be displayed
      setNotFound(address !== hardcodedAddress); // Set notFound to true if the address is not the hardcoded one
    }
  };

  // Hardcoded data for a specific address
  const hardcodedAddress = "Los Angeles";
  const riskSections = searchAddress === hardcodedAddress ? [
    {
      title: "Overall Risk",
      level: "Moderate",
      className: "overall-risk",
      details: "Overall risk assessment for the given address based on various factors, including crime, cost of living, environmental, and sentiment risks.",
      chartData: [
        ["Category", "Value"],
        ["Cost of Living", 30],
        ["Crime Rate", 50],
        ["Environmental", 20],
        ["Sentiment", 20],
      ],
    },
    {
      title: "Cost of Living",
      level: "Moderate",
      className: "col-risk",
      details: "The cost of living in this area is moderate, with a significant portion of expenses falling into the medium category.",
      chartData: [
        ["Category", "Value"],
        ["Affordable", 40],
        ["Moderate", 45],
        ["Expensive", 15],
      ],
    },
    {
      title: "Crime Rate",
      level: "Moderate",
      className: "crime-risk",
      details: "The crime rate in this area is moderate, with some occurrences of minor incidents. The overall safety level is acceptable.",
      chartData: [
        ["Category", "Value"],
        ["Low", 50],
        ["Medium", 40],
        ["High", 10],
      ],
    },
    {
      title: "Environmental",
      level: "Low",
      className: "environmental-risk",
      details: "Environmental risks such as pollution and natural hazards are minimal in this area, contributing to a healthy living environment.",
      chartData: [
        ["Category", "Value"],
        ["Low", 75],
        ["Moderate", 20],
        ["High", 5],
      ],
    },
    {
      title: "Sentiment",
      level: "High",
      className: "sentiment-analysis",
      details: "Public sentiment is mixed, with a significant portion of residents expressing positive and neutral feelings, while some have negative sentiments.",
      chartData: [
        ["Category", "Value"],
        ["Positive", 40],
        ["Neutral", 30],
        ["Negative", 30],
      ],
    },
  ] : [];

  const chartOptions = {
    // pieHole: 0.4, // Creates a donut chart effect
    is3D: false, // Keeps the chart in 2D for simplicity
  };

  return (
    <div className="background">
      <div className="risk-dashboard">
        {/* Header for the search and user information */}
        <div className="header">
          <h1>Welcome to Risk Assessment Dashboard</h1>
          <p>Enter an address to view risk assessments and detailed information.</p>
        </div>

        {/* Search header to enter and search for an address */}
        <div className="search-header">
          <form onSubmit={handleSearch} className="form-container">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)} // Update address state on input change
              placeholder="Enter address..."
              className="address-input"
              onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(e); }} // Handle press enter
            />
          </form>

          {/* Display the searched address if available */}
          {searchAddress && !notFound && <h3>Showing risk data for: {searchAddress}</h3>}
          {/* Display a not found message if the address is not recognized */}
          {notFound && <h3 className="not-found">Address not found. Please try another address.</h3>}
        </div>

        {/* Show risk sections if the address is found */}
        {riskSections.map((section, index) => (
          <div key={index} className={`risk-section ${section.className}`}>
            <h2>{section.title}</h2>
            <p>
              Risk Level: <span className="risk-level" style={{ color: getRiskLevelColor(section.level) }}>{section.level}</span>
            </p>

            {/* Render the chart for each risk section if data is available */}
            {section.chartData && (
              <Chart
                chartType="PieChart"
                data={section.chartData}
                options={chartOptions}
                width={"100%"}
                height={"200px"}
              />
            )}

            {/* Display additional details if available */}
            {section.details && (
              <div className="risk-details">
                <p>{section.details}</p>
              </div>
            )}

            {/* Show more details button only after an address is input */}
            {searchAddress && section.title === "Cost of Living" && (
              <Link to="/CoL">
                <button className="more-details-button">
                  More Cost of Living Details
                </button>
              </Link>
            )}

            {searchAddress && section.title === "Crime Rate" && (
              <Link to="/CrimeRate">
                <button className="more-details-button">
                  More Crime Rate Details
                </button>
              </Link>
            )}

            {searchAddress && section.title === "Environmental" && (
              <Link to="/Environmental">
                <button className="more-details-button">
                  More Environmental Details
                </button>
              </Link>
            )}

            {searchAddress && section.title === "Sentiment" && (
              <Link to="/Sentiment">
                <button className="more-details-button">
                  More Sentiment Details
                </button>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;