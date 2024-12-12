import React, { useContext } from "react";
import "./whyUs.css";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function WhyUs() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {theme} = useContext(ThemeContext)
  return (
    <div className="Why-Section container ">
      <div className=" gap-5 d-flex align-items-center flex-wrap-reverse">
        <div className="Whyimgs-animation position-relative w-50">
          <div
            className="image-wrapper"
            data-service="Affordable rentals for your next adventure!"
          >
            <img src={PF + "services/service1.jpg"} alt="" className="w-100" />
          </div>
          <div
            className="image-wrapper"
            data-service="Quick, reliable repairs to get you back on the road fast!"
          >
            <img src={PF + "services/service2.jpg"} alt="" className="w-100" />
          </div>
          <div className="image-wrapper" data-service="Find your car parts!">
            <img src={PF + "services/service3.jpg"} alt="" className="w-100" />
          </div>
          <div
            className="image-wrapper"
            data-service="Find your perfect car, backed by trust and quality!"
          >
            <img src={PF + "services/service4.jpg"} alt="" className="w-100" />
          </div>
        </div>
        <div className="desc w-50 flex-grow-1">
          <h4 className="mb-4 fw-bold">Why should you shoose us ?</h4>
          <p className={`${theme === "dark" ? "text-white-50 " : "text-black-50"}`}>
            Your trusted partner for all your car needs! Whether you're buying,
            selling, renting, or fixing, we provide unmatched quality,
            reliability, and affordability. With FixDrive, you're not just
            getting a service; you're getting peace of mind!
          </p>
        </div>
      </div>
    </div>
  );
}
