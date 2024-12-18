import React from 'react' ;
import "./rating.css" ;

export default function Rating() {
  return (
    <div className='rating d-flex justify-content-center align-items-center'>
      <div className="row  text-center gap-5">
        <div className="col-sm-12  m-auto rate ">
            <h3 className="value fw-bold">+30k</h3>
            <p className="descOfvalue text-white-50">People are alredy sign up with us and profit </p>
        </div>
        <div className="col-sm-12 m-auto rate">
            <h3 className="value fw-bold">96%</h3>
            <p className="descOfvalue text-white-50">Satisfique rate come frome our client  </p>
        </div>
        <div className="col-sm-12 m-auto rate">
            <h3 className="value fw-bold">4.0/5.0</h3>
            <p className="descOfvalue text-white-50">Avrege costumer rating form FixDrive users </p>
        </div>
      </div>
    </div>
  )
}
