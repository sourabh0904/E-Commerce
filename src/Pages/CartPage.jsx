import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { cart } = useContext(CartContext);

  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x {item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
