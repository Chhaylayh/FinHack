import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { Link } from "react-router-dom";
import "./css/Dashboard.css";

function Dashboard() {
  const [riskData, setRiskData] = useState(null);

  useEffect(() => {
    // Fetch data for Los Angeles, CA on initial load
    const fetchRiskData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/calculate_risk", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ address: "Los Angeles, CA" }),
        });
        const data = await response.json();
        setRiskData(data.risk_score);
      } catch (error) {
        setRiskData(null);
      }
    };
    fetchRiskData();
  }, []);

  // Function to determine the risk level
  const getRiskLevel = (value) => {
    if (value <= 33) {
      return "Low";
    } else if (value <= 66) {
      return "Moderate";
    } else {
      return "High";
    }
  };

  const riskSections = riskData
    ? [
        {
          title: "Overall Risk",
          value: riskData.overall_risk,
          chartData: [
            ["Category", "Value"],
            ["Cost of Living", riskData.cost_of_living_risk],
            ["Crime Rate", riskData.crime_risk],
            ["Environmental", riskData.environmental_risk],
            ["Sentiment", riskData.sentiment_risk],
          ],
          className: "overall-risk",
        },
        {
          title: "Cost of Living",
          value: riskData.cost_of_living_risk,
          description:
            "The cost of living in this area is assessed to be moderate. Housing is relatively expensive compared to national averages, while utilities and groceries remain affordable.",
          additionalInfo: [
            { category: "Housing", value: "Expensive" },
            { category: "Utilities", value: "Moderate" },
            { category: "Transportation", value: "Affordable" },
            { category: "Groceries", value: "Moderate" },
          ],
          className: "col-risk",
          linkTo: "/CostOfLiving",
        },
        {
          title: "Crime Rate",
          value: riskData.crime_risk,
          description:
            "The crime rate in this area is moderate. Property crimes are more common, while violent crime rates are below the national average.",
          additionalInfo: [
            { category: "Property Crimes", value: "Moderate" },
            { category: "Violent Crimes", value: "Low" },
            { category: "Public Safety", value: "Moderate" },
          ],
          className: "crime-risk",
          linkTo: "/CrimeRate",
        },
        {
          title: "Environmental",
          value: riskData.environmental_risk,
          description:
            "The environmental risk in this area is low. Pollution levels are within safe limits, and there is good air quality year-round.",
          additionalInfo: [
            { category: "Air Quality", value: "Good" },
            { category: "Water Quality", value: "Moderate" },
            { category: "Natural Disaster Risk", value: "Low" },
          ],
          className: "environmental-risk",
          linkTo: "/Environmental",
        },
        {
          title: "Sentiment",
          value: riskData.sentiment_risk,
          description:
            "The sentiment analysis indicates a generally positive outlook from residents. Public sentiment is mixed but leans toward positive, with many residents satisfied with their quality of life.",
          additionalInfo: [
            { category: "Public Opinion", value: "Positive" },
            { category: "Community Satisfaction", value: "Moderate" },
            { category: "Online Reviews", value: "Mixed" },
            { category: "Local Feedback", value: "Positive" },
          ],
          className: "sentiment-analysis",
          linkTo: "/Sentiment",
        },
      ]
    : [];

  return (
    <div className="background">
      <div className="risk-dashboard">
        <div className="header">
          <h1>Risk Assessment Dashboard</h1>
          <p>Viewing risk assessments for Los Angeles, CA.</p>
        </div>

        {riskSections.map((section, index) => (
          <div key={index} className={`risk-section ${section.className}`}>
            <h2>{section.title}</h2>
            <p className="risk-value">Risk Value: {section.value}</p>
            <p className="risk-level">
              Risk Level:{" "}
              <span className={getRiskLevel(section.value).toLowerCase()}>
                {getRiskLevel(section.value)}
              </span>
            </p>
            <p className="risk-description">{section.description}</p>
            {section.additionalInfo && (
              <div className="additional-info">
                <h3>Details:</h3>
                <ul>
                  {section.additionalInfo.map((info, idx) => (
                    <li key={idx}>
                      <strong>{info.category}:</strong> {info.value}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Render the chart and table for the "Overall Risk" section */}
            {section.title === "Overall Risk" && section.chartData && (
              <>
                <Chart
                  chartType="PieChart"
                  data={section.chartData}
                  width={"100%"}
                  height={"200px"}
                />
                <div className="overall-table">
                  <h3>Risk Breakdown:</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Category</th>
                        <th>Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.chartData.slice(1).map((row, idx) => (
                        <tr key={idx}>
                          <td>{row[0]}</td>
                          <td>{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
            {/* Add button to navigate to details page */}
            {section.linkTo && (
              <Link to={section.linkTo}>
                <button className="more-details-button">
                  More {section.title} Details
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