import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";
import TotalPrice from "./TotalPrice";

function Navigation({ totalPrice, username }) {
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
        {/* Display total price and username if logged in */}
        {totalPrice > 0 && <TotalPrice totalPrice={totalPrice} />}
        {username && (
          <span className="navbar-text ml-auto">Welcome, {username}!</span>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
