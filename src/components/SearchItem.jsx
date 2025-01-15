import React from "react";

export default function SearchItem({ post }) {
  return (
    <div
      className="search-item d-flex gap-4 p-1 w-100 align-items-center"
      style={{
        border: "3px solid var(--elements-color)",
        minWidth: "300px",
        margin: "10px auto",
      }}
    >
      <div className="img">
        <img
          src={post.postInfo.images[0]}
          alt=""
          style={{
            height : "160px",
            objectFit: "contain",
          }}
        />
      </div>
      <div className="item-info py-2 flex-grow-1">
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
        <h5 className="fw-semibold CarCardTitle">{post.postInfo.name}</h5>
        <p className="text-primary fw-bold">{post.postInfo.Price}</p>
        <p className="AcountLocation">{post.Location}</p>
        <hr />
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
              <p className="col" style={{ textTransform: "uppercase" }}>
                <i className="fa-solid fa-gear fs-6 me-2 text-primary"></i>
                {post.postInfo.system}
              </p>
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
      </div>
    </div>
  );
}
