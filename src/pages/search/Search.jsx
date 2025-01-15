import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import CarCard from "../../components/CarCard";
import { posts } from "../../assets/data";
import { useSearchParams } from "react-router-dom";
import SearchItem from "../../components/SearchItem";
import "./search.css";

export default function Search() {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [filtredResult, setFiltredResult] = useState([]);

  // state managment for the inputs
  const [searchInput, setSearchInput] = useState("");

  const [filterForm, setFilterForm] = useState({
    condition: "all",
    model: "",
    brand: "",
    location: "",
    minprice: 0,
    maxprice: 10,
  });

  const filterHandler = (e) => {
    setFilterForm({ ...filterForm, [e.target.name]: e.target.value });
  };

  // hook to do the search from the query params and set it in the result
  useEffect(() => {
    const filtring = Object.fromEntries(searchParams.entries());

    // filter the data from the post page
    const filtredPosts = posts.filter((post) => {
      // Filter based on query parameters
      const matchedSerch = filtring.search
        ? post.postInfo.name
            .toLowerCase()
            .includes(filtring.search.toLowerCase())
        : true;

      const matchedLocation = filtring.location
        ? post.Location.toLowerCase().includes(filtring.location.toLowerCase())
        : true;

      const matchesPrice =
        filtring.minPrice > 1 && filtring.maxPrice < 1
          ? (!filtring.minPrice ||
              post.postInfo.Price >= parseInt(filtring.minPrice)) &&
            (!filtring.maxPrice ||
              post.postInfo.Price <= parseInt(filtring.maxPrice))
          : true;

      return matchedSerch && matchedLocation && matchesPrice;
    });

    setResults(filtredPosts);
  }, [searchParams]);

  // search from the current page
  useEffect(() => {
    const filtredResult = posts.filter((post) => {
      const matchedSearch =
        post.postInfo.name?.toLowerCase()
          .includes(searchInput.toLowerCase().trim()) ||
        post.Location?.toLowerCase().includes(
          searchInput.toLowerCase().trim()
        ) ||
        post.postInfo.brand?.toLowerCase()
          .includes(searchInput.toLowerCase().trim());

      return matchedSearch;
    });

    if (searchInput === "") {
      setFiltredResult(results);
    } else {
      setFiltredResult(filtredResult);
    }
  }, [searchInput, results , posts]);

  // Generate years dynamically
  const startYear = 1980; // Starting year
  const endYear = new Date().getFullYear(); // Current year

  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, i) => startYear + i
  ).reverse(); // Reverse to show the latest year first

  // this to manage the range price
  const [max, setMax] = useState(1);
  const [min, setMin] = useState(1);
  function handleMin(e) {
    setMin(e.target.value);
  }
  function handleMax(e) {
    setMax(e.target.value);
  }
  // ------------------------------

  // function to reset the filter form
  const resetHandel = () => {
    setFilterForm({
      condition: "all",
      model: "",
      brand: "",
      location: "",
      minprice: 0,
      maxprice: 10,
    });
  };

  return (
    <>
      <div
        className="pb-5"
        style={{ backgroundColor: "var(--elements-color)" }}
      >
        <Navbar whiteMood />
        <h3 className="my-5 container">Search result</h3>
      </div>
      <div className="search-page my-5 container d-flex gap-5">
        <div
          className="filtring p-2"
          style={{
            backgroundColor: "var(--elements-color)",
            minWidth: "260px",
          }}
        >
          <h6>Filter</h6>
          <hr />
          <p>Conditions</p>
          <div className="conditions d-flex align-items-center gap-3">
            <div className="radio">
              <input
                type="radio"
                name="condition"
                id="all-condition"
                className="me-2 form-check-input"
                value={"all"}
                checked={filterForm.condition === "all"}
                onChange={filterHandler}
              />
              <label htmlFor="all-condition" className="form-check-label">
                All
              </label>
            </div>
            <div className="radio">
              <input
                type="radio"
                name="condition"
                id="all-condition"
                className="me-2 form-check-input"
                value={"buy"}
                checked={filterForm.condition === "buy"}
                onChange={filterHandler}
              />
              <label htmlFor="buy-condition" className="form-check-label">
                Buy
              </label>
            </div>
            <div className="radio">
              <input
                type="radio"
                name="condition"
                id="all-condition"
                className="me-2 form-check-input"
                value={"rent"}
                checked={filterForm.condition === "rent"}
                onChange={filterHandler}
              />
              <label htmlFor="rent-condition" className="form-check-label">
                Rent
              </label>
            </div>
            <div className="radio">
              <input
                type="radio"
                name="condition"
                id="all-condition"
                className="me-2 form-check-input"
                value={"fix"}
                checked={filterForm.condition === "fix"}
                onChange={filterHandler}
              />
              <label htmlFor="fix-condition" className="form-check-label">
                Fix
              </label>
            </div>
          </div>
          <div className="years my-4">
            <select
              name="model"
              value={filterForm.model}
              onChange={filterHandler}
              role="button"
              className="w-100 py-2"
            >
              <option value={""} selected hidden disabled>
                Model
              </option>
              {years.map((year) => {
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="brand">
            <select
              name="brand"
              value={filterForm.brand}
              onChange={filterHandler}
              role="button"
              className="w-100 py-2"
            >
              <option value={""} selected hidden disabled>
                Brand
              </option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
              <option value="bmw">BMW</option>
              <option value="porshe">Porshe</option>
              <option value="cupra">Cupra</option>
            </select>
          </div>
          <div className="locationInput position-relative  w-100 my-4">
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={filterForm.location}
              onChange={filterHandler}
            />
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="range-container">
            <label className="text-white mb-3">
              <p className="mb-0">Price Range</p>
              <p className="mb-0 mt-0 text-white-50 ">
                <span id="minFilterPrice">{min}</span>M -{" "}
                <span id="maxFilterPrice">{11 - max}</span>B
              </p>
            </label>
            <div className="range-Input d-flex mb-3">
              <input
                className="slider"
                type="range"
                min="1"
                max="999"
                step="10"
                value={min}
                onChange={handleMin}
                name="minprice"
              />
              <input
                className="slider"
                type="range"
                dir="rtl"
                min="1"
                max="10"
                step="1"
                value={max}
                onChange={handleMax}
                name="maxprice"
              />
            </div>
          </div>
          <button
            className="btn btn-outline-primary w-100 mt-4"
            onClick={resetHandel}
          >
            Reset Filter
          </button>
        </div>
        <div className="searching flex-grow-1">
          <div className="searchInput w-100">
            <input
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="my-3">
            <h4 className="result-count">{filtredResult.length} result</h4>
          </div>
          <div className="car-items d-flex gap-2 flex-wrap">
            {filtredResult.length > 0 ? (
              filtredResult.map((post) => {
                return <SearchItem post={post} />;
              })
            ) : (
              <p className="text-center w-100">not result found !</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
