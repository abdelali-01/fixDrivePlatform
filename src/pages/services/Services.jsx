import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./service.css"
import Can from '../../components/Can/Can';
import FilterForm from '../../components/filterForm/FilterForm';
import CarCard from '../../components/CarCard';
import Footer from '../../components/footer/Footer';
import ContactForm from '../../components/contactForm/ContactForm';


export default function Services() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER ;
    return (
    <div className=' ServicesPage z-n2'>
        <Navbar whiteMood={true}/>
        <div className="topService-section">
            <div className="imgsServiceAnimation position-absolute top-0 ">
                <img src={PF+"serviceImg1.png"}  alt="" />
            </div>
            <div className="canInService mt-5" style={{
                width:"80%",
                margin : "auto"
            }}>
                <Can whiteMood={true}/>
            </div>
            <div className="filterFormInService">
                <FilterForm/>
            </div>
        </div>
        <div className="cardSectionView pt-5  pb-5">
            <div className="rangeServiceSection  mt-5">
                <div className="topServiceSection d-flex justify-content-between">
                    <h4 >Buy with Confidence!</h4>
                    <span className='text-primary' role='button'>
                        Show more  <i class="ms-2 fa-solid fa-angle-up" style={{
                            rotate : "90deg"
                        }}></i>
                    </span>
                </div>
                <div className="cardRangeSection row mt-3 gap-3">
                    <CarCard IconsInformation={true}/>
                    <CarCard IconsInformation={true}/>
                    <CarCard IconsInformation={true}/>
                </div>
            </div>
            <div className="rangeServiceSection  mt-5">
                <div className="topServiceSection d-flex justify-content-between">
                    <h4 >Rent & Drive Away Today</h4>
                    <span className='text-primary' role='button'>
                        Show more  <i class="ms-2 fa-solid fa-angle-up" style={{
                            rotate : "90deg"
                        }}></i>
                    </span>
                </div>
                <div className="cardRangeSection row mt-3  gap-3">
                    <CarCard IconsInformation={true}/>
                    <CarCard IconsInformation={true}/>
                    <CarCard IconsInformation={true}/>
                </div>
            </div>
            <div className="rangeServiceSection mt-5">
                <div className="topServiceSection d-flex justify-content-between">
                    <h4 >Fix Your Ride , Fast Service!</h4>
                    <span className='text-primary' role='button'>
                        Show more  <i class="ms-2 fa-solid fa-angle-up" style={{
                            rotate : "90deg"
                        }}></i>
                    </span>
                </div>
                <div className="cardRangeSection row mt-3 gap-3">
                    <CarCard/>
                    <CarCard/>
                    <CarCard/>
                </div>
            </div>
        </div>

        <ContactForm/>
        <Footer/>
    </div>
  )
}
