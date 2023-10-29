import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Layout/Home';
import Products from './Products/Products';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
