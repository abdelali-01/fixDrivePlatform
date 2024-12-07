import React from "react";  
import "./reviews.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Reviews() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER ;

  const reviews = [
    {
      name: "Rouissat Aness",
      job: "UI/UX Designer",
      comment:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur perferendis alias dignissimos! Vero beatae itaque veritatis praesentium.",
      image: "Profile Image.png",
    },
    {
      name: "Sarah Smith",
      job: "Web Developer",
      comment:
        "Great experience! The service was quick and the team was professional.",
      image: "Profile Image.png",
    },
    {
      name: "John Doe",
      job: "Graphic Designer",
      comment:
        "Affordable and reliable! Highly recommend for anyone looking for quality work.",
      image: "Profile Image.png",
    },
    {
      name: "Michael Lee",
      job: "Product Manager",
      comment:
        "Amazing! Everything was smooth and exceeded my expectations.",
      image: "Profile Image.png",
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // For tablets and phones
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // For medium-sized devices
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };


  return (
    <div className="reviews  text-center p-5">
      <h4 className="fw-bold">Loved by builders</h4>
      <p className="text-black-50 ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, eligendi.
      </p>
      <Slider {...settings} className="container">
        {reviews.map((review, index) => (
          <div key={index} className="p-3">
            <div className="card-review p-4 shadow-sm rounded ">
              <div className="userProfile d-flex align-items-center gap-3 mb-3">
                <img
                  src={PF + review.image}
                  alt={review.name}
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                    overflow: "hidden",
                    aspectRatio: "1/1",
                    width: "60px",
                    height: "60px",
                  }}
                />
                <div className="username-job">
                  <h5 className="fs-6 mb-0">{review.name}</h5>
                  <p className="text-black-50 mb-0">{review.job}</p>
                </div>
              </div>
              <div className="comment-review">
                <p>{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
