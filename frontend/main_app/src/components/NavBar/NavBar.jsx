import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDiseasesClick = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="navbar">
            <h4 className='left-nav'>
                Neural Next
            </h4>
            <div className='right-nav'>
                <ul className='right-links'>
                    <Link to="/">Home</Link>
                    <div className="dropdown">
                        <a href="#" onClick={handleDiseasesClick}>Diseases</a>
                        {showDropdown && (
                            <ul className="dropdown-menu">
                                <li><Link to="/heart-attack">Heart Attack</Link></li>
                                <li><Link to="/diabetes">Diabetes</Link></li>
                                <li><Link to="/petersons-disease">Parkinson's Disease</Link></li>
                            </ul>
                        )}
                    </div>
                    <Link to="/faq">FAQs</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
