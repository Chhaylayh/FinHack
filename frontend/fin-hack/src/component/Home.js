import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./css/Home.css";

function Home() {
    const navigate = useNavigate(); // Initialize navigate function for route navigation
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        // Hardcoded credentials
        const hardcodedUsername = "admin";
        const hardcodedPassword = "pass123";

        if (username === hardcodedUsername && password === hardcodedPassword) {
            // Navigate to dashboard or home page after successful login
            navigate("/Search");
        } else {
            alert("Invalid username or password");
        }
    };

    return (

        // Main content container for the Home page
        <div className="home">

            {/* Container for the login form and other content */}
            <div className="home-login-container">

                {/* Left side container  */}
                <div className="home-img-container">
                    <div className="home-content">
                        <h1>
                            America's most admired homebuilder
                        </h1>
                        <p>
                            We build beautiful communities in desirable markets nationwide. Start your journey and discover why Lennar is recognized as America's leading homebuilder.
                        </p>
                    </div>
                </div>

                {/* Right side container for the login form */}
                <div className="home-right-container">

                    {/* Header for the login form */}
                    <h1 className="home-header">
                        Welcome to RiskCalculator!
                    </h1>

                    {/* Instructional text prompting the user to log in */}
                    <p className="home-body-container">
                        Please Log in to access the data.
                    </p>

                    {/* Form container for the email and password fields */}
                    <div className="home-form-container">
                        <form onSubmit={handleLogin}>
                            {/* Input field for username */}
                            <input
                                className="home-form-input"
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />

                            {/* Input field for password */}
                            <input
                                className="home-form-input"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            {/* Login button container */}
                            <div className="home-button-container">
                                <button className="home-button" type="submit">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Links for Forgot Username and Forgot Password */}
                    <div className="home-forgot-link">
                        {/* Link to the Forgot Email page */}
                        <Link to="/*">Forgot Email</Link>
                        {/* Separator between the links */}
                        <span> | </span>
                        {/* Link to the Forgot Password page */}
                        <Link to="/*">Forgot Password</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;