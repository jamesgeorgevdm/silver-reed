import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Products from "./Components/Products";
import About from "./Components/About";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [username, setUsername] = useState(""); // New state for username

  const updateTotalPrice = (price) => {
    setTotalPrice((prevPrice) => prevPrice + price);
  };

  // Function to update username
  const handleLogin = (username) => {
    setUsername(username);
  };

  return (
    <Router>
      <div>
        <Navigation totalPrice={totalPrice} username={username} />{" "}
        {/* Pass username to Navigation */}
        <Routes>
          <Route path="/" element={<Home handleLogin={handleLogin} />} />{" "}
          {/* Pass handleLogin to Home */}
          <Route
            path="/products"
            element={<Products updateTotalPrice={updateTotalPrice} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
