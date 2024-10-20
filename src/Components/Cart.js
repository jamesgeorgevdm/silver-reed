import React, { useState } from "react";
import "./Cart.css";

function Cart({ cartItems, removeFromCart }) {
  const [selectedShippingOption, setSelectedShippingOption] =
    useState("pickup");
  const [showShippingHelp, setShowShippingHelp] = useState(false);

  const getColorStyle = (color) => {
    return (
      {
        black: { color: "black" },
        gold: { color: "#FFD700" }, // Gold color
        silver: { color: "#C0C0C0" }, // Silver color
      }[color?.toLowerCase()] || { color: "black" }
    ); // Default color
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const priceWithoutCommas = item.price.replace(/,/g, "").replace("R", "");
      const itemTotal = parseFloat(priceWithoutCommas) * item.quantity;
      return total + itemTotal;
    }, 0);
  };

  const totalPrice = calculateTotalPrice();

  const handleShippingHelpToggle = () => {
    setShowShippingHelp((prev) => !prev);
  };

  return (
    <div className="cart">
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
                  <p style={getColorStyle(item.color)}>Color: {item.color}</p>
                  <h5>
                    {item.price} x {item.quantity} = R
                    {(
                      parseFloat(
                        item.price.replace(/,/g, "").replace("R", "")
                      ) * item.quantity
                    ).toLocaleString()}
                  </h5>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {cartItems.length > 0 && (
        <>
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
          <div className="cart-total-container">
            <h5 className="cart-total">
              Total Price: R{totalPrice.toLocaleString()}
            </h5>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
