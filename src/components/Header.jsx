import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Le Zie - Vêtements vintage</div>

        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#">Events</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        <div className="search-bar">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button">lense</button>
        </div>

        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#">Login / Register</a></li>
            <li><a href="#">Cart</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;