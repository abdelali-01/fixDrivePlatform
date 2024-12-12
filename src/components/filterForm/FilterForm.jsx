import React, { useState } from "react";
import "./filterform.css";

export default function FilterForm() {
  const [max , setMax] = useState(1);
  const [min , setMin] = useState(1);

  function handleMin(e){
    setMin(e.target.value)
  }
  function handleMax(e){
    setMax(e.target.value)
  }
  return (
    <div
      className=" mt-5 p-4"
      style={{
        backgroundColor: "#071620",
        width : "80%" ,
        margin : "auto" 
      }}
    >
      <form action="">
        <div className="topFormPart d-flex flex-wrap w-100 gap-3">
          <div className="searchInput flex-grow-1">
            <input type="text" placeholder="Search" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <select name="" id="" role="button" className="flex-grow-1">
            <option value="" selected hidden disabled>
              Model
            </option>
            <option value="">2024</option>
            <option value="">2024</option>
            <option value="">2024</option>
            <option value="">2024</option>
            <option value="">2024</option>
            <option value="">2024</option>
            <option value="">2024</option>
          </select>
          <select name="" id="" role="button" className="flex-grow-1">
            <option value="" selected hidden disabled>
              Brand
            </option>
            <option value="">Mercedes</option>
            <option value="">Audi</option>
            <option value="">BMW</option>
            <option value="">Porshe</option>
            <option value="">Cupra</option>
          </select>
        </div>
        <div className="bottomFormPart mt-4 d-flex flex-wrap w-100 gap-3">
          <div className="locationInput position-relative  flex-grow-1">
            <input type="text" placeholder="Location" />
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="range-container d-flex flex-wrap gap-3 align-items-center flex-grow-1">
            <label className="text-white flex-grow-1">
              <p className="mb-0">Price Range</p>
              <p className="mb-0 mt-0 text-white-50 ">
                <span id="minFilterPrice">{min}</span>M -{" "}
                <span id="maxFilterPrice">{11 - max}</span>B
              </p>
            </label>
            <div className="range-Input d-flex flex-grow-1 mb-3">
              <input className="slider" type="range" min="1"  max="999" step="10" value={min} onChange={handleMin}/>
              <input className="slider" type="range" dir="rtl" min="1" max="10" step="1" value={max} onChange={handleMax}/>
            </div>
          </div>
          <button className="btn btn-outline-primary flex-grow-1">Search</button>
        </div>
      </form>
    </div>
  );
}
