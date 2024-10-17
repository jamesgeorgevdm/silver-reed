import React from "react";
import Login from "./Login";
import Registration from "./Registration";
import "./Home.css";

const Home = ({ handleLogin }) => {
  return (
    <div>
      <h1 className="header-title">
        Welcome to the{" "}
        <span className="silver-reed">Silver Reed Saxophone</span> Store
      </h1>
      <div className="home-container">
        <div className="input-forms">
          <div className="form-container">
            <Login handleLogin={handleLogin} />{" "}
            {/* Pass handleLogin to Login */}
          </div>
          <div className="form-container">
            <Registration />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
