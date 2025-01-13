import React, { useContext } from "react";
import "./whyUs.css";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function WhyUs() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {theme} = useContext(ThemeContext)
  return (
    <div className="Why-Section container ">
      <div className=" gap-5 d-flex align-items-center flex-wrap">
        <div className="Whyimgs-img position-relative flex-grow-1">
          <img src={PF+"CardPic.png"} alt="" width={"100%"}/>
        </div>
        <div className="desc text-center w-50">
          <h4 className="mb-4 fw-bold" style={{textTransform :"uppercase"}}>Why should you shoose us ?</h4>
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
