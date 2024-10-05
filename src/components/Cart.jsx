import React from "react";
import { useCart } from "../CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <p>{item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
    </div>
  );
};

export default Cart;
