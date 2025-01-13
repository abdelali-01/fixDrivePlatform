import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({ whiteMood }) {
  // some state to manage the navbar position
  const [scroll, setScroll] = useState(0);
  const prevScroll = useRef(0);
  const [NavStatus , setNavStatus] = useState(false);
  
  useEffect(() => {
    // Define the scroll event handler
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    // Add the event listener
    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // this hook will put the navbar with sticky top position if we scroll up
  useEffect(()=>{
    if(scroll < prevScroll.current ){
      setNavStatus(true);
    }else{
      setNavStatus(false);
    }

    prevScroll.current = scroll ;
  },[scroll])

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <nav
      className={`container-fluid ${NavStatus && "sticky-top"} ${whiteMood ? "text-white" : "text-dark"}`}
    >
      <div className="navbar navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          <img
            src={PF + "logo.png"}
            alt="Logo"
            width="140"
            className="navbar-brand"
          />
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
        <div
          className="collapse navbar-collapse p-3"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            {/* Services Dropdown */}
            <div className="d-flex align-items-center">
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-link d-flex align-items-center"
                >
                  <span className="">Services</span>
                </Link>
              </li>
            </div>

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
