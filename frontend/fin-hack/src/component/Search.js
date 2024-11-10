import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Search.css";

function Search() {
  const [address, setAddress] = useState(() => {
    return localStorage.getItem("searchAddress") || "Los Angeles, CA";
  });
  const navigate = useNavigate();

  // Handles the form submission to search for an address
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/calculate_risk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address }),
      });
      const data = await response.json();
      localStorage.setItem("searchAddress", address);
      navigate("/dashboard", {
        state: { riskData: data.risk_score, searchAddress: address, notFound: false },
      });
    } catch (error) {
      localStorage.setItem("searchAddress", address);
      navigate("/dashboard", {
        state: { riskData: null, searchAddress: address, notFound: true },
      });
      console.log(address)
    }
  };

  return (
    <div className="search-background">
      <div className="search-container">
        <div className="header">
          <h1>Welcome to Risk Assessment Dashboard</h1>
          <p>Enter an address to view risk assessments and detailed information.</p>
        </div>
        <form onSubmit={handleSearch} className="form-container">
          <input
            type="text"
            value={address}
            placeholder="Enter address..."
            className="address-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;