import React from "react";
import "./can.css";

export default function Can({whiteMood}) {
  return (
    <div className="text-center Can">
      <div className="services-container d-flex gap-2 justify-content-center">
        <h3 className={`fs-4 pt-2 ${whiteMood ? "text-white" : ""} ` }>In Our FixDrive You Can </h3>
        <div className="services-container" >
          <div style={{width : "fit-content"}} class="services fs-3 d-flex align-items-start fw-bold position-relative">
            <div class="service s-key">Buy</div>
            <div class="service s-key">Rent</div>
            <div class="service s-key">Sell</div>
            <div class="service s-key">Fix</div>
          </div>
        </div>
      </div>
        <p className={`w-50 ${whiteMood ? "text-white-50" : "text-black-50"} mt-3 w-100`}>
        FixDrive empowers you to buy, rent, or repair your car effortlessly. Drive worry-free with our trusted services.
      </p>
      <button className={`btn btn-primary`}>Start For Free</button>
    </div>
  );
}
