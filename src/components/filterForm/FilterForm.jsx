import React, { useState } from "react";
import "./filterform.css";
import { useNavigate } from "react-router-dom";

export default function FilterForm() {
  const navigate = useNavigate();

  // this to manage the range price 
  const [max , setMax] = useState(1);
  const [min , setMin] = useState(1);
  function handleMin(e){
    setMin(e.target.value)
  }
  function handleMax(e){
    setMax(e.target.value)
  }
  // ------------------------------


  // Generate years dynamically
  const startYear = 1980; // Starting year
  const endYear = new Date().getFullYear(); // Current year

  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, i) => startYear + i
  ).reverse(); // Reverse to show the latest year first


  const handleSearch = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const queryParams = new URLSearchParams();

    for (let [key, value] of formData.entries()) {
      if (value) {
        queryParams.append(key, value);
      }
    }    
    navigate(`/search?${queryParams.toString()}`);
  };


  return (
    <div
      className=" mt-5 p-4 container"
      style={{
        backgroundColor: "#071620",
      }}
    >
      <form action="" onSubmit={handleSearch}>
        <div className="topFormPart d-flex flex-wrap w-100 gap-3">
          <div className="searchInput flex-grow-1">
            <input type="text" placeholder="Search" name="search" required/>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <select name="model" id="" role="button" className="flex-grow-1">
            <option value="" selected hidden disabled>
              Model
            </option>
            {years.map(year => {
              return <option key={year} value={year}>{year}</option>
            })}
          </select>
          <select name="brand" id="" role="button" className="flex-grow-1">
            <option value="" selected hidden disabled>
              Brand
            </option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
            <option value="bmw">BMW</option>
            <option value="porshe">Porshe</option>
            <option value="cupra">Cupra</option>
          </select>
        </div>
        <div className="bottomFormPart mt-4 d-flex flex-wrap w-100 gap-3">
          <div className="locationInput position-relative  flex-grow-1">
            <input type="text" placeholder="Location" name="location"/>
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
              <input className="slider" type="range" min="1"  max="999" step="10" value={min} onChange={handleMin} name="minprice"/>
              <input className="slider" type="range" dir="rtl" min="1" max="10" step="1" value={max} onChange={handleMax} name="maxprice"/>
            </div>
          </div>
          <button className="btn btn-outline-primary flex-grow-1">Search</button>
        </div>
      </form>
    </div>
  );
}
