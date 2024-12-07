import React from 'react'
import "./whyUs.css"

export default function WhyUs() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER ;
  return (
    <div className='Why-Section container '>
      <div className=" d-flex align-items-center gap-5">
        <div className="Whyimgs-animation position-relative">
            <img src={PF+"CardPic1.png"} alt="" width="500"/>
        </div>
        <div className="desc text-center">
            <h4>Why Should You Choose Us ?</h4>
            <p className="text-black-50">Your trusted partner for all your car needs! Whether you're buying, selling, renting, or fixing, we provide unmatched quality, reliability, and affordability. With FixDrive, you're not just getting a service; you're getting peace of mind!</p>
        </div>
      </div>
    </div>
  )
}
