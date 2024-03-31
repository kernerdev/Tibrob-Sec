import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Offer from '../components/Offer';
import Services from '../components/Services';
import Map from '../components/Map';

const slides = [
  //"./assets/Logo.svg",
  "./assets/taj1.jpg",
  "./assets/taj2.jpg",
]

function Home() {
  return (
    <>
    <Header/>
    <div className="flex justify-center">
      <div className="max-w-4xl">
    <Carousel autoSlide={true} autoSlideInterval={3000} >
          {[...slides.map((s) => (
            <img className=' object-center' src={s} />
          ))]}
        </Carousel>
        </div>
    </div>
    <Offer/>
    <Services/>
    <Map/>
    <Footer/>
    </>
  );
}

export default Home;
