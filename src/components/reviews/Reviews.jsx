import React from "react";
import "./reviews.css";
import { feedbacks } from "../../assets/data";
export default function Reviews() {
  return (
    <div className="reviews p-5 container">
      <div className="text-center">
        <h4 className="fw-bold">Loved by builders</h4>
        <p className="text-white-50 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,
          eligendi.
        </p>
      </div>
      <div className="feedbacks py-2 px-2 d-flex gap-3 my-5 flex-wrap">
        {feedbacks.map((feedback) => (
          <div
            key={feedback._id}
            className="card-review p-4 shadow-sm rounded flex-grow-1"
            style={{
              minWidth: "220px",
              width: "300px",
              height: "200px",
            }}
          >
            <div className="userProfile d-flex align-items-center gap-3 mb-3">
              <img
                src={feedback.image}
                alt={""}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  overflow: "hidden",
                  aspectRatio: "1/1",
                  width: "40px",
                  height: "40px",
                }}
              />
              <div className="username-job">
                <h5 className="fs-6 mb-0">{feedback.username}</h5>
                <p className="text-white-50 mb-0">{feedback.role}</p>
              </div>
            </div>
            <div className="comment-review ">
              <p>{feedback.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
