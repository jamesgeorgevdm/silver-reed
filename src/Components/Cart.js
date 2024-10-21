import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Redux/cartSlice"; // Redux action to remove from cart
import "./Cart.css";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items); // Access cart items from Redux
  const totalPrice = useSelector((state) => state.cart.totalPrice); // Access total price from Redux
  const dispatch = useDispatch();

  // Local state for shipping option and shipping help
  const [selectedShippingOption, setSelectedShippingOption] =
    useState("pickup");
  const [showShippingHelp, setShowShippingHelp] = useState(false);

  const handleShippingHelpToggle = () => {
    setShowShippingHelp(!showShippingHelp);
  };

  return (
    /* Cart (or no cart) and item mapping drawn from Products.js */
    <div className="cart-background">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items-container">
          <ul>
            {cartItems.map((item, index) => (
              <li className="cart-item" key={index}>
                <img src={item.image} alt={item.title} width="100" />
                <div className="cart-item-details">
                  <h4>{item.title}</h4>
                  <h5>
                    {item.price} x {item.quantity}
                  </h5>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Shipping options and Shipping Help */}
          <div className="shipping-options-container">
            <h4>Shipping Options:</h4>
            <select
              value={selectedShippingOption}
              onChange={(e) => setSelectedShippingOption(e.target.value)}
            >
              <option value="pickup">Pickup</option>
              <option value="courier">Courier</option>
              <option value="48-hour">48-Hour Delivery</option>
            </select>
            <button
              className="shipping-help-button"
              onClick={handleShippingHelpToggle}
            >
              Shipping Help
            </button>
          </div>

          {/* Popup for shipping help */}
          {showShippingHelp && (
            <div className="shipping-help-popup">
              <p>
                <strong>Pickup:</strong> Pick up your order at our shop located
                at 123 Main St, Cape Town.
              </p>
              <p>
                <strong>Courier:</strong> Your order will be delivered to your
                door by our delivery partner within 14 working days.
              </p>
              <p>
                <strong>48-Hour Delivery:</strong> Prioritise your order for an
                additional cost and receive it within 48 hours.
              </p>
              <button onClick={handleShippingHelpToggle}>Close</button>
            </div>
          )}

          {/* Total price section */}
          <div className="cart-total-container">
            <h5 className="cart-total">
              Total Price: R{totalPrice.toLocaleString()}
            </h5>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
