import React from "react";
import "./footer.css";

export default function Footer() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="FooterComp">
      <div className="footer container pt-5 pb-2 text-center">
        <div className="footer-links d-flex mb-3 gap-3 justify-content-center align-items-center">
          <div className="links ">
            <h5 className="titleLink">Products</h5>
            <p className="text-white-50">Customer stories</p>
            <p className="text-white-50">Customer stories</p>
            <p className="text-white-50">Customer stories</p>
            <p className="text-white-50">Customer stories</p>
          </div>
          <div className="links ">
            <h5 className="titleLink">Products</h5>
            <p className="text-white-50">Customer stories</p>
            <p className="text-white-50">Customer stories</p>
            <p className="text-white-50">Customer stories</p>
            <p className="text-white-50">Customer stories</p>
          </div>
          <div className="links ">
            <h5 className="titleLink">Products</h5>
            <p className="text-white-50">Customer stories</p>
            <p className="text-white-50">Customer stories</p>
            <p className="text-white-50">Customer stories</p>
            <p className="text-white-50">Customer stories</p>
          </div>
          <div className="links ">
            <h5 className="titleLink">Products</h5>
            <p className="text-white-50">Customer stories</p>
            <p className="text-white-50">Customer stories</p>
            <p className="text-white-50">Customer stories</p>
            <p className="text-white-50">Customer stories</p>
          </div>
        </div>
        <hr />
        <div className="bottom-foot d-flex justify-content-between align-items-center mt-4 ">
          <div className="navbar-brand">
            <img src={PF + "logo.png"} className="" alt="" width="120" />
          </div>
          <p className="text-white-50" style={{ fontSize: "13px" }}>
            ©2023 Polio LTD. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
