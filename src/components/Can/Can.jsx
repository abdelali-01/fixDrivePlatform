import React from "react";
import "./can.css";

export default function Can({whiteMood}) {
  return (
    <div className="w-50 text-right ">
      <div className="services-container d-flex gap-2">
        <h3 className={`fs-4 pt-2 ${whiteMood ? "text-white" : ""}`}>In Our FixDrive You Can </h3>
        <div className="services-container">
          <div class="services fs-3 d-flex align-items-start fw-bold position-relative">
            <div class="service ">Buy</div>
            <div class="service">Rent</div>
            <div class="service">Sell</div>
            <div class="service">Fix</div>
          </div>
        </div>
      </div>
      <p className={whiteMood ? "text-white-50" : "text-black-50"}>
        here in FixDrive we provide you many serves , here you can buy or Rent
        or Sell or Fix your car
      </p>
      <div className={`btn fw-medium btn-primary`}>Start For Free</div>
    </div>
  );
}
