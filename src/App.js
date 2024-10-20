import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux"; // Import Redux Provider
import store from "./Redux/store"; // Import the Redux store
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Products from "./Components/Products";
import About from "./Components/About";
import Cart from "./Components/Cart";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
