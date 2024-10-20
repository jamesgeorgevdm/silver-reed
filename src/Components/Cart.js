import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Redux/cartSlice"; // Redux action to remove from cart
import "./Cart.css";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items); // Access cart items from Redux
  const totalPrice = useSelector((state) => state.cart.totalPrice); // Access total price from Redux
  const dispatch = useDispatch();

  return (
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
