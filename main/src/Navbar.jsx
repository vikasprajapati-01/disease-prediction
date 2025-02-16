import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navbar">
            <h4 className="left-nav">Neural Next</h4>
            
            <button className="hamburger" onClick={toggleMenu}>☰</button>

            <div className={`right-nav ${menuOpen ? "open" : ""}`}>
                <ul className="right-links">
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <div className="dropdown">
                        <a href="#" onClick={toggleDropdown}>Diseases</a>
                        {showDropdown && (
                            <ul className="dropdown-menu">
                                <li><Link to="/heart" onClick={() => setMenuOpen(false)}>Heart Attack</Link></li>
                                <li><Link to="/diabetes" onClick={() => setMenuOpen(false)}>Diabetes</Link></li>
                            </ul>
                        )}
                    </div>
                    <Link to="/faq" onClick={() => setMenuOpen(false)}>FAQs</Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
