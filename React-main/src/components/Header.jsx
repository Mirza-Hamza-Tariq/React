// Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.jpg";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => setMenuActive(!menuActive);
  const closeMenu = () => setMenuActive(false);

  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logoImg} alt="Legacy Hands of Hope" className="logo-icon" />
          <span className="logo-text">Legacy Hands of Hope</span>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`nav-links ${menuActive ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>

          <li>
            <a href="#events" onClick={closeMenu}>
              Events
            </a>
          </li>

          {/* ✅ GIVE PAGE ROUTE */}
          <li>
            <Link to="/give" onClick={closeMenu} className="give-btn">
              Give
            </Link>
          </li>

          <li>
            <a href="#team" onClick={closeMenu}>
              Team
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
