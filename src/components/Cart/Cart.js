
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './cart.css';

function Cart({
  cart,
  removeFromCart,
  emptyCart,
  handleCheckout,
  isPaymentSuccessful,
}) {
  const navigate = useNavigate();

  const totalItems = cart.reduce((total, product) => total + product.quantity, 0);
  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  const handleEmptyCart = () => {
    emptyCart();
    navigate('/'); 
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul className="cart-list">
        {cart.map((product) => (
          <li key={product.id}>
            <div>
              <h4>{product.name}</h4>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <button onClick={() => removeFromCart(product)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      
      {cart.length > 0 && (
        <div>
          <p>Total Items: {totalItems}</p>
          <p>Total Price: ${totalPrice}</p>
          <button onClick={handleEmptyCart}>Clear Cart</button>
        </div>
      )}

      {isPaymentSuccessful ? (
        <div className="payment-success">
          <p>Payment successful! Order confirmation will be sent to your email.</p>
        </div>
      ) : (
        <div className="checkout-form">
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;


