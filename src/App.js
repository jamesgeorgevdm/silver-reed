import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Products from "./Components/Products";
import About from "./Components/About";
import Cart from "./Components/Cart"; // Import the Cart component
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [username, setUsername] = useState(""); // State for username
  const [cartItems, setCartItems] = useState([]); // State to manage cart items

  const updateTotalPrice = (price) => {
    setTotalPrice((prevPrice) => prevPrice + price);
  };

  const handleLogin = (username) => {
    setUsername(username);
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    updateTotalPrice(parseFloat(product.price.replace(/R|,/g, ""))); // Update total price
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const itemToRemove = prevItems.find((item) => item.id === productId);
      if (itemToRemove) {
        // Decrease quantity or remove if quantity is 1
        if (itemToRemove.quantity > 1) {
          const updatedItems = prevItems.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
          // Update total price
          setTotalPrice(
            (prevPrice) =>
              prevPrice - parseFloat(itemToRemove.price.replace(/R|,/g, ""))
          );
          return updatedItems;
        } else {
          // Remove item if quantity is 1
          setTotalPrice(
            (prevPrice) =>
              prevPrice - parseFloat(itemToRemove.price.replace(/R|,/g, ""))
          );
          return prevItems.filter((item) => item.id !== productId);
        }
      }
      return prevItems;
    });
  };

  return (
    <Router>
      <div>
        <Navigation totalPrice={totalPrice} username={username} />
        <Routes>
          <Route path="/" element={<Home handleLogin={handleLogin} />} />
          <Route
            path="/products"
            element={<Products addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                totalPrice={cartItems.length > 0 ? totalPrice : 0} // Show total price only if items are present
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
