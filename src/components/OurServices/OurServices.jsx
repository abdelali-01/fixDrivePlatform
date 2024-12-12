import React from 'react'
import "./ourservices.css"

export default function OurServices() {
  return (
    <div className='OurServices pt-4 pb-4 ps-lg-4 ps-md-2 pe-lg-4 pe-md-2 text-center '>
      <h4 className='fw-medium'>Our Services</h4>
      <div className="services-cards d-flex mt-3 p-3 row text-white">
        <div className="service-card p-4 m-4 col" role='button'>
            <i className="fa-solid fa-car-on  mb-4"></i>
            <h6>Fix Your Ride , Fast Service!</h6>
            <p className="text-white-50 mt-2">Quick, reliable repairs to get you back on the road fast!</p>
        </div>
        <div className="service-card p-4 m-4 col" role='button'>
            <i className="fa-solid fa-truck-fast mb-4"></i>
            <h6>Sell Your Car Fast</h6>
            <p className="text-white-50 mt-2">Hassle-free car selling with the best deals!</p>
        </div>
        <div className="service-card p-4 m-4 col" role='button'>
            <i class="fa-solid fa-money-check-dollar mb-4"></i>
            <h6>Buy with Confidence!</h6>
            <p className="text-white-50 mt-2">Find your perfect car, backed by trust and quality!</p>
        </div>
        <div className="service-card p-4 m-4 col" role='button'>
            <i class="fa-solid fa-car mb-4"></i>
            <h6>Rent & Drive Away Today</h6>
            <p className="text-white-50 mt-2">Affordable rentals for your next adventure!</p>
        </div>
      </div>
    </div>
  )
}
