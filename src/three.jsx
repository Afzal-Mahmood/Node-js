import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './apple.css';
import { Link } from 'react-router-dom';

const Name = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg  m-0 bg-dark text-white sticky-top px-4">
        {/* Logo Section */}
        <a href="#" className="navbar-brand">
          <img src="malik.log" className="rounded-circle" width={80} alt="Logo" />
        </a>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
          aria-controls="collapsibleNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul
            className="navbar-nav ms-auto mb-2 mb-lg-0"
            style={{
              listStyle: 'none',
              paddingLeft: 0,
              textShadow: '2px 2px 1px green',
              fontFamily: 'sans-serif',
            }}
          >
            <li className="nav-item me-4">
              <Link to="/Log" className="nav-link text-white">HOME</Link>
            </li>
            <li className="nav-item me-4">
              <Link to="/" className="nav-link text-white">ABOUT</Link>
            </li>
            <li className="nav-item me-4">
              <Link to="/Page" className="nav-link text-white">PAGE</Link>
            </li>
            <li className="nav-item dropdown me-4">
              <Link
                to="#"
                className="nav-link dropdown-toggle text-white"
                data-bs-toggle="dropdown"
              >
                MENU
              </Link>
              <ul className="dropdown-menu bg-light">
                <li><Link to="/peshawae" className="dropdown-item">Peshawae</Link></li>
                <li><Link to="/islamabad" className="dropdown-item">Islamabad</Link></li>
                <li><Link to="/quatta" className="dropdown-item">Quatta</Link></li>
                <li><Link to="/multan" className="dropdown-item">Multan</Link></li>
                <li><Link to="/karachi" className="dropdown-item">Karachi</Link></li>
              </ul>
            </li>
            <li className="nav-item me-4">
              <Link to="/form" className="nav-link text-white">TANDOORI CATERING</Link>
            </li>
            <li className="nav-item me-4">
              <Link to="/Product" className="nav-link text-white">PRODUCT</Link>
            </li>
            <li className="nav-item me-4">
              <Link to="/Localstorage" className="nav-link text-white">LOCAL STORAGE</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Name;
