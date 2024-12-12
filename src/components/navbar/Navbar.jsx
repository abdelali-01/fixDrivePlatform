import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({ whiteMood }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <nav
      className={`container-fluid  sticky-top   ${
        whiteMood ? "text-white" : "text-dark"
      }`}
    >
      <div className="navbar navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          <img src={PF + "logo.png"} alt="Logo" width="140" className="navbar-brand" />
        </Link>
        <div className="navOpenMenuIcon">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars fs-1 text-white"></i>
          </button>
        </div>
        <div className="collapse navbar-collapse p-3" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            {/* Services Dropdown */}
            <li className="nav-item dropdown">
              <Link
                to="/services"
                className="nav-link d-flex align-items-center"
                role="button"
                aria-expanded="false"
              >
                <span className="me-2">Services</span>
                <i className="fa-solid fa-angle-down"></i>
              </Link>
              <ul className="dropdown-menu">
                <li className="dropdown-item">Buy with Confidence!</li>
                <li className="dropdown-item">Sell Your Car Fast</li>
                <li className="dropdown-item">Drive Away Today</li>
                <li className="dropdown-item">Fix Your Ride, Fast Service!</li>
              </ul>
            </li>

            {/* Partners Dropdown */}
            <li className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link d-flex align-items-center"
                role="button"
                aria-expanded="false"
              >
                <span className="me-2">Partners</span>
                <i className="fa-solid fa-angle-down"></i>
              </Link>
              <ul className="dropdown-menu">
                <li className="dropdown-item">Showrooms</li>
                <li className="dropdown-item">Car Rentals</li>
                <li className="dropdown-item">Fixers</li>
              </ul>
            </li>

            {/* About Us Dropdown */}
            <li className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link d-flex align-items-center"
                role="button"
                aria-expanded="false"
              >
                <span className="me-2">About Us</span>
                <i className="fa-solid fa-angle-down"></i>
              </Link>
              <ul className="dropdown-menu">
                <li className="dropdown-item">About Us</li>
                <li className="dropdown-item">FAQ</li>
              </ul>
            </li>

            {/* Careers (Not a Dropdown) */}
            <li className="nav-item ">
              <Link to="#" className="nav-link d-flex align-items-center">
                <span className="me-2">Careers</span>
              </Link>
            </li>
          </ul>

          {/* Buttons */}
          <div className="d-flex flex-wrap">
            <button className="btn btn-outline-primary me-3 fw-medium">
              Sign in
            </button>
            <button className="btn btn-primary fw-medium flex-grow-1">
              Start For Free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
