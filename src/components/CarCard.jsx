import React from "react";

export default function CarCard({ post }) {
  console.log(post);

  return (
    <div
      className="carCard p-1 d-flex flex-column justify-content-between"
      style={{
        border: "3px solid var(--elements-color)",
        minWidth: "280px",
        maxWidth: "400px",
        margin: "10px auto",
      }}
    >
      <div className="ImgCarCard flex-grow-1">
        <img
          src={post.carInfo.images[0]}
          className="card-img img-fluid "
          alt=""
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="card-body px-1 flex-grow-1">
        <p
          className="text-primary my-2 "
          style={{
            border: "1px solid var(--btn-color)",
            borderRadius: "6px",
            width: "fit-content",
            padding: "4px 14px",
          }}
        >
          {post.carInfo.status}
        </p>
        <div className="carCardInformation">
          <h6 className="fw-semibold CarCardTitle">{post.carInfo.name}</h6>
          <p className="text-primary fw-bold">{post.carInfo.price}</p>
          <p className="AcountLocation">{post.Location}</p>
          <>
            <div
              className="carCardInfoIcons"
              style={{
                fontSize: "12px",
              }}
            >
              <div className="row">
                <p className="col">
                  <i className="fa-solid fa-calendar-days fs-6 me-2 text-primary"></i>
                  2020
                </p>
                <p className="col">
                  <i className="fa-solid fa-gear fs-6 me-2 text-primary"></i>RWD
                </p>
              </div>
              <div className="row">
                <p className="col">
                  <i className="fa-solid fa-oil-can fs-6 me-2 text-primary"></i>
                  2.0 TDI
                </p>
                <p className="col">
                  <i className="fa-solid fa-gauge fs-6 me-2 text-primary"></i>{" "}
                  12000km
                </p>
              </div>
            </div>
          </>
          <button className="btn btn-primary w-100">
            <i className="fa-solid fa-phone fs-5 me-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
