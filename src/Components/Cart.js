import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Cart.css";

const Cart = ({ cartItems, totalPrice, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <Card style={{ width: "18rem", margin: "10px" }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    Price: R{item.price} x {item.quantity} = R
                    {item.price * item.quantity}
                  </Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && <h3>Total Price: R{totalPrice}</h3>}{" "}
      {/* Show total price only if cart has items */}
    </div>
  );
};

export default Cart;
