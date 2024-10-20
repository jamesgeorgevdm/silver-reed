import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector to access Redux state
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";

function Navigation() {
  const username = useSelector((state) => state.user.username); // Access the username from Redux

  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/">
        Silver Reed Saxophones
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
        <div className="navbar-text">
          {/* Display welcome message if the user is logged in */}
          {username && (
            <span>
              Welcome, <b>{username}</b>!
            </span>
          )}
        </div>
        <Link to="/cart" className="nav-link cart-link">
          🛒 Cart
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
