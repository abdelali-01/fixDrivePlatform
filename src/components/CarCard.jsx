import React from "react";

export default function CarCard({ post }) {
  console.log(post);

  return (
    <div
      className="carCard p-1 d-flex flex-column justify-content-between flex-grow-1"
      style={{
        border: "3px solid var(--elements-color)",
        minWidth: "300px",
        margin: "10px auto",
      }}
    >
      <div className="ImgCarCard flex-grow-1">
        <img
          src={post.postInfo.images[0]}
          alt=""
          style={{
            width: "100%",
            height: "180px",
            objectFit: "contain",
          }}
        />
      </div>
      <div className="card-body px-1 flex-grow-1 mt-2">
        {post.role === "showroom" && (
          <p
            className="text-primary mb-2 "
            style={{
              border: "1px solid var(--btn-color)",
              borderRadius: "6px",
              width: "fit-content",
              padding: "4px 14px",
            }}
          >
            {post.postInfo.status}
          </p>
        )}
        <div className="carCardInformation">
          <h6 className="fw-semibold CarCardTitle">{post.postInfo.name}</h6>
          <p className="text-primary fw-bold">{post.postInfo.Price}</p>
          <p className="AcountLocation">{post.Location}</p>
          {post.role !== "fixer" && (
            <div
              className="carCardInfoIcons"
              style={{
                fontSize: "12px",
              }}
            >
              <div className="row">
                <p className="col">
                  <i className="fa-solid fa-calendar-days fs-6 me-2 text-primary"></i>
                  {post.postInfo.year}
                </p>
                <p className="col" style={{textTransform : "uppercase"}}>
                  <i className="fa-solid fa-gear fs-6 me-2 text-primary"></i>{post.postInfo.system}
                </p>
              </div>
              <div className="row">
                <p className="col">
                  <i className="fa-solid fa-oil-can fs-6 me-2 text-primary"></i>
                  {post.postInfo.engine}
                </p>
                <p className="col">
                  <i className="fa-solid fa-gauge fs-6 me-2 text-primary"></i>{" "}
                  {post.postInfo.km}
                </p>
              </div>
            </div>
          )}
          <button className="btn btn-primary w-100">
            <i className="fa-solid fa-phone fs-5 me-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
