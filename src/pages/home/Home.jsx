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
import ThemeBtn from '../../components/ThemeBtn';

export default function Home() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER ;
  return (
    <div className='HomePage '>
      <Navbar whiteMood={"white"}/>
      <div className="home-container mt-5">
        <div className="container presentSection d-flex  flex-wrap">
            <Can whiteMood={"white"} />
            <div className="imgs-animation">
              <img src={PF+"services/service1.jpg"} alt="" className='w-100' />
              <img src={PF+"services/service2.jpg"} alt="" className='w-100' />
              <img src={PF+"services/service3.jpg"} alt="" className='w-100' />
              <img src={PF+"services/service4.jpg"} alt="" className='w-100' />
            </div>
            <div className="overidebackgound"></div>
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
      <ThemeBtn/>
    </div>
  )
}
