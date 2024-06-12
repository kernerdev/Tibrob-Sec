import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Offer from '../components/Offer';
import Services from '../components/Services';
import Map from '../components/Map';

const slides = [
  //"./assets/Logo.svg",
  "./assets/kep0.jpg",
  "./assets/kep1.jpg",
  "./assets/kep2.jpg",
  "./assets/kep3.jpg",
  "./assets/kep4.jpg",
  "./assets/kep5.jpg",
  "./assets/kep6.jpg",
  "./assets/kep7.jpg",
  "./assets/kep8.jpg",
]

function Home() {
  return (
    <>
    <Header/>
    <div className="flex justify-center">
      <div className="max-w-4xl">
        <Carousel autoSlide={true} autoSlideInterval={30000} >
          {[...slides.map((s) => (
            <img className=' object-center' src={s} />
          ))]}
        </Carousel>
      </div>
    </div>
    <Offer/>
    <div className=" text-center bg-white py-10">
      <video controls src='./assets/Tibrob-sec_narr.mp4' className='mx-auto' ></video>
    </div>
    <Footer/>
    </>
  );
}

export default Home;
