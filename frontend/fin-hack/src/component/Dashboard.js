import React, { useState } from "react";
import { Chart } from "react-google-charts";
import "./css/Dashboard.css";

function Dashboard() {
  const [address, setAddress] = useState(""); // State to store the input address from the user
  const [searchAddress, setSearchAddress] = useState(""); // State to store the address after search submission

  // Handles the form submission to search for an address
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchAddress(address); // Update the address to be displayed
  };

  // Hardcoded data for a specific address
  const hardcodedAddress = "123 Main St, Springfield";
  const riskSections = searchAddress === hardcodedAddress ? [
    { 
      title: "Overall Risk", 
      level: "Medium", 
      className: "overall-risk", 
      details: "Overall risk assessment for the given address based on various factors, including crime, cost of living, environmental, and sentiment risks.",
      chartData: [
        ["Category", "Value"],
        ["Low", 30],
        ["Medium", 50],
        ["High", 20],
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
      level: "Medium", 
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
      level: "Positive", 
      className: "sentiment-analysis", 
      details: "Public sentiment is mixed, with a significant portion of residents expressing positive and neutral feelings, while some have negative sentiments.",
      chartData: [
        ["Category", "Value"],
        ["Positive", 40],
        ["Neutral", 30],
        ["Negative", 30],
      ],
    },
  ] : [
    {
      title: "Overall Risk",
      level: "",
      className: "overall-risk",
      details: "Overall risk assessment for the given address based on various factors, including crime, cost of living, environmental, and sentiment risks.",
    },
    {
      title: "Cost of Living",
      level: "",
      className: "col-risk",
      details: "The cost of living in this area is moderate, with a significant portion of expenses falling into the medium category.",
    },
    {
      title: "Crime Rate",
      level: "",
      className: "crime-risk",
      details: "The crime rate in this area is moderate, with some occurrences of minor incidents. The overall safety level is acceptable.",
    },
    {
      title: "Environmental",
      level: "",
      className: "environmental-risk",
      details: "Environmental risks such as pollution and natural hazards are minimal in this area, contributing to a healthy living environment.",
    },
    {
      title: "Sentiment",
      level: "",
      className: "sentiment-analysis",
      details: "Public sentiment is mixed, with a significant portion of residents expressing positive and neutral feelings, while some have negative sentiments.",
    },
  ];

  const chartOptions = {
    pieHole: 0.4, // Creates a donut chart effect
    is3D: false, // Keeps the chart in 2D for simplicity
  };

  return (
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
        {searchAddress && <h3>Showing risk data for: {searchAddress}</h3>}

      </div>

      {/* Show risk sections regardless of address input, but with blank data until address is searched */}
      {riskSections.map((section, index) => (
        <div key={index} className={`risk-section ${section.className}`}>
          <h2>{section.title}</h2>
          <p>
            Risk Level: <span className="risk-level">{section.level}</span>
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
        </div>
      ))}
    </div>
  );
}

export default Dashboard;