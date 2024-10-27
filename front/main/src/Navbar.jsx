import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">NeuralNext</div>
      <div className="navbar-links">
        <Link className="navbar-item" to="/">Home</Link>
        <Link className="navbar-item" to="/diabetes">Diabetes</Link>
        <Link className="navbar-item" to="/heart">Heart Disease</Link>
        <Link className="navbar-item" to="/faq">FAQ</Link>
        <Link className="navbar-item" to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
