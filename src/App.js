
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Layout/Home';
import Cart from './components/Cart/Cart';
import { CartProvider } from './components/Layout/CartContext';

function App() {
  const [cart, setCart] = useState([]);
  const [isPaymentSuccessful, setPaymentSuccessful] = useState(false); // Step 1
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 20,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 30,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 40,
    },
    {
      id: 4,
      name: 'Product 4',
      price: 20,
    },
    {
      id: 5,
      name: 'Product 5',
      price: 30,
    },
    {
      id: 6,
      name: 'Product 6',
      price: 40,
    }, {
      id: 7,
      name: 'Product 7',
      price: 20,
    },
    {
      id: 8,
      name: 'Product 8',
      price: 30,
    },
    {
      id: 9,
      name: 'Product 9',
      price: 40,
    }
  ];

  const addToCart = (cart) => {
    setCart(cart);
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== product.id);
      return updatedCart;
    });
  };

  const emptyCart = () => {
    setCart([]);
  };

  const handleCheckout = () => {
  
    setTimeout(() => {
      setPaymentSuccessful(true); 
    }, 2000);
  };

  return (
    <Router>
      <div className="app">
      <Navbar cartItemCount={cart.length} />
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home products={products} cart={cart} addToCart={addToCart} />} />
            <Route
              path="/cart"
              element={<Cart cart={cart} removeFromCart={removeFromCart} emptyCart={emptyCart} handleCheckout={handleCheckout} isPaymentSuccessful={isPaymentSuccessful} />}
            />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </CartProvider>
      </div>
    </Router>
  );
}

export default App;