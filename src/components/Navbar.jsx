import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cartItems }) {
  return (
    <header>
      <h1>My Web App</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </nav>
      <div className="cart">
        <Link to="/cart">
          🛒 Cart ({cartItems})
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
