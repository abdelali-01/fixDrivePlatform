import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar({ whiteMood }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className={`ps-5 pe-5 sticky-top ${whiteMood ? "text-white" : "text-dark"}`}>
      <div className="navbar">
        <Link to={"/"}>
          <div className="navbar-brand">
          <img src={PF + "logo.png"} className="" alt="" width="160" />
        </div>
        </Link>
        <div className="navbar-links d-flex gap-4 fw-medium">
          <div className="navLink dropdown dropdow-toggle" role="button">
          <Link to={"/services"} className="no-decoration">
            <span className="me-2">Services</span>
          </Link>
            <i className="fa-solid fa-angle-down"></i>

            <ul className="dropdown-menu">
              <li className="dropdown-item">Buy with Confidence!</li>
              <li className="dropdown-item">Sell Your Car Fast</li>
              <li className="dropdown-item">Drive Away Today</li>
              <li className="dropdown-item">Fix Your Ride , Fast Service!</li>
            </ul>
          </div>
          <div className="navLink dropdown dropdow-toggle" role="button">
            <span className="me-2">Partners</span>
            <i className="fa-solid fa-angle-down"></i>

            <ul className="dropdown-menu">
              <li className="dropdown-item">Showrooms</li>
              <li className="dropdown-item">Car rentals</li>
              <li className="dropdown-item">Fixers</li>
            </ul>
          </div>
          <div className="navLink dropdown dropdow-toggle" role="button">
            <span className="me-2">About Us</span>
            <i className="fa-solid fa-angle-down"></i>

            <ul className="dropdown-menu">
              <li className="dropdown-item">About Us</li>
              <li className="dropdown-item">FAQ</li>
            </ul>
          </div>
          <div className="navLink dropdown dropdow-toggle" role="button">
            <span className="me-2">Careers</span>
          </div>
        </div>
        <div className="btn-actions">
          <div className={`btn btn-outline-primary me-3  fw-medium  `}>Sign in</div>
          <div className={`btn btn-primary  fw-medium `}>Start For Free</div>
        </div>
      </div>
    </div>
  );
}
