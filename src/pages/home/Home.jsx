import React from 'react'
import './home.css'
import Navbar from '../../components/navbar/Navbar'
import Can from '../../components/Can/Can'
import OurServices from '../../components/OurServices/OurServices';
import WhyUs from '../../components/whyUs/WhyUs';
import Rating from '../../components/rating/Rating';
import Startfree from '../../components/Startfree';
import Reviews from '../../components/reviews/Reviews';
import Footer from '../../components/footer/Footer';

export default function Home() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER ;
  return (
    <div className='HomePage'>
      <Navbar whiteMood={"white"}/>
      <div className="home-container mt-5">
        <div className="container d-flex align-items-center">
            <Can whiteMood={"white"}/>
            <div className="imgs-animation w-50">
              <img src={PF+"CardPic.png"} alt="" className='w-100 z-3' style={{zIndex : "100"}}/>
            </div>
        </div>
        <div className="mt-5 pt-5">
          <OurServices />
          <WhyUs/>
          <Rating/>
          <Reviews/>
          <Startfree/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}
