import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import CarCard from "../../components/CarCard";
import { posts } from "../../assets/data";
import { useSearchParams } from "react-router-dom";

export default function Search() {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);

  console.log(Object.fromEntries(searchParams.entries()));

  // hook to do the search and set it in the result
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
  });

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
          <div className="conditions d-flex align-items-center gap-3">
            <div className="radio">
              <input
                type="radio"
                name="condition"
                id="all-condition"
                className="me-2"
              />
              <label htmlFor="all-condition">All</label>
            </div>
            <div className="radio">
              <input
                type="radio"
                name="condition"
                id="all-condition"
                className="me-2"
              />
              <label htmlFor="all-condition">All</label>
            </div>
            <div className="radio">
              <input
                type="radio"
                name="condition"
                id="all-condition"
                className="me-2"
              />
              <label htmlFor="all-condition">All</label>
            </div>
          </div>
        </div>
        <div className="searching flex-grow-1">
          <div className="searchInput w-100">
            <input type="text" placeholder="Search" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="my-3">
            <h4 className="result-count">12 result</h4>
          </div>
          <div className="car-items d-flex gap-2 flex-wrap">
            {results.map((post) => {
              return <CarCard post={post} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
