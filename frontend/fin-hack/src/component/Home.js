import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./css/Home.css";

function Home() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const hardcodedUsername = "admin";
        const hardcodedPassword = "pass123";

        if (username === hardcodedUsername && password === hardcodedPassword) {
            navigate("/Search");
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <div className="home">
            <div className="home-login-container">

                {/* Left side container for the login form */}
                <div className="home-left-container">
                    <h1 className="home-header">
                        Welcome to RiskCalculator!
                    </h1>
                    <p className="home-body-container">
                        Please Log in to access the data.
                    </p>
                    <div className="home-form-container">
                        <form onSubmit={handleLogin}>
                            <input
                                className="home-form-input"
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <input
                                className="home-form-input"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <div className="home-button-container">
                                <button className="home-button" type="submit">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* 
                    <div className="home-forgot-link">
                        <Link to="/*">Forgot Email</Link>
                        <span> | </span>
                        <Link to="/*">Forgot Password</Link>
                    </div>
                    */}
                    
                </div>

                {/* Right side container for the image */}
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
            </div>
        </div>
    );
}

export default Home;