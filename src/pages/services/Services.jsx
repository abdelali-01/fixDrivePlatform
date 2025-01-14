import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./service.css";
import Can from "../../components/Can/Can";
import FilterForm from "../../components/filterForm/FilterForm";
import CarCard from "../../components/CarCard";
import Footer from "../../components/footer/Footer";
import ContactForm from "../../components/contactForm/ContactForm";
import { posts } from "../../assets/data";

export default function Services() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  //for this page we need to bring the stores posts only
  // => filter the posts with the role
  const showroomPosts = posts.filter((post) => {
    return post.role === "showroom";
  });

  const rentPosts = posts.filter((post) => {
    return post.role === "car rental";
  });

  const fixPosts = posts.filter((post) => {
    return post.role === "fixer";
  });

  return (
    <div className=" ServicesPage z-n2">
      <Navbar whiteMood={true} />
      <div className="topService-section">
        <div className="imgsServiceAnimation position-absolute top-0 ">
          <img src={PF + "serviceImg1.png"} alt="" />
        </div>
        <div className="canInService container mt-5">
          <div style={{maxWidth : "340px"}}>
            <h3>Find your dream car</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur animi quaerat perferendis,
              fugit provident architecto maxime?
            </p>
          </div>
        </div>
        <div className="filterFormInService">
          <FilterForm />
        </div>
      </div>
      <div className="cardSectionView py-5 container">
        <div className="rangeServiceSection  mt-5">
          <div className="topServiceSection d-flex justify-content-between">
            <h4>Buy with Confidence!</h4>
            <span className="text-primary" role="button">
              Show more{" "}
              <i
                class="ms-2 fa-solid fa-angle-up"
                style={{
                  rotate: "90deg",
                }}
              ></i>
            </span>
          </div>
          <div className="cardRangeSection  rounded-3 px-2 mt-3 d-flex gap-3">
            {showroomPosts.map((post) => {
              return <CarCard key={post._id} post={post} />;
            })}
          </div>
        </div>
        <div className="rangeServiceSection  mt-5">
          <div className="topServiceSection d-flex justify-content-between">
            <h4>Rent & Drive Away Today</h4>
            <span className="text-primary" role="button">
              Show more{" "}
              <i
                class="ms-2 fa-solid fa-angle-up"
                style={{
                  rotate: "90deg",
                }}
              ></i>
            </span>
          </div>
          <div className="cardRangeSection  rounded-3 px-2 mt-3 d-flex gap-3">
            {rentPosts.map((post) => {
              return <CarCard post={post} />;
            })}
          </div>
        </div>
        <div className="rangeServiceSection mt-5">
          <div className="topServiceSection d-flex justify-content-between">
            <h4>Fix Your Ride , Fast Service!</h4>
            <span className="text-primary" role="button">
              Show more{" "}
              <i
                class="ms-2 fa-solid fa-angle-up"
                style={{
                  rotate: "90deg",
                }}
              ></i>
            </span>
          </div>
          <div className="cardRangeSection  rounded-3 px-2 mt-3 d-flex gap-3">
            {fixPosts.map((post) => {
              return <CarCard post={post} />;
            })}
          </div>
        </div>
      </div>

      <ContactForm />
      <Footer />
    </div>
  );
}
