import React from "react";

export default function CarCard({ IconsInformation }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div
      className="carCard p-2 col    "
      style={{
        border: "3px solid var(--elements-color)",
        minWidth: "240px",
        maxWidth : "400px",
        margin : "10px auto"
      }}
    >
      <div className="ImgCarCard">
        <img
          src={PF + "cars/Tesla.png"}
          className="card-img img-fluid "
          alt=""
        />
      </div>
      <p
        className="text-primary mt-2 mb-2 "
        style={{
          border: "1px solid var(--btn-color)",
          borderRadius: "6px",
          width: "fit-content",
          padding: "4px 14px",
        }}
      >
        New
      </p>
      <div className="carCardInformation">
        <h5 className="fw-semibold CarCardTitle">
          Tesla Model 3 Standard Range Plus
        </h5>
        <p className="text-primary fw-bold">900M</p>
        <p className="AcountLocation">Algeria , Algiers</p>
        {IconsInformation ? (
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
        ) : null}
        <button className="btn btn-primary w-100">
          <i className="fa-solid fa-phone fs-5 me-2"></i>
        </button>
      </div>
    </div>
  );
}
