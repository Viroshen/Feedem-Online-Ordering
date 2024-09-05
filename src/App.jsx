import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import AdminPage from './pages/AdminPage'; // Import AdminPage

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeItemFromCart = (itemToRemove) => {
    setCartItems((prevItems) => prevItems.filter((item, index) => index !== itemToRemove));
  };

  return (
    <Router>
      <div>
        <Navbar cartItems={cartItems.length} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage addItemToCart={addItemToCart} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} removeItemFromCart={removeItemFromCart} />} />
          <Route path="/admin" element={<AdminPage cartItems={cartItems} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
