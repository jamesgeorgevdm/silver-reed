import React from "react";
import "./TotalPrice.css";

function TotalPrice({ totalPrice }) {
  return <h2 className="total-price">Total price: R{totalPrice}</h2>;
}

export default TotalPrice;
