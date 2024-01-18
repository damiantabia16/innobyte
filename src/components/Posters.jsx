import React from 'react';
import Slider from 'react-slick';
import mblImages from './objects/MblPosters.json'
import dskImages from './objects/BgPosters.json';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow({onClick}) {
  return (
    <button onClick={onClick} id='next' className='hidden'></button>
  );
}

function SamplePrevArrow({onClick}) {
  return (
    <button onClick={onClick} id='prev' className='hidden'></button>
  );
}

const Posters = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }

  return (
    <section id='posters' className='w-full'>
      <div id='mlb-poster' className='md:hidden w-full h-full'>
        <Slider {...settings} className='w-full h-auto md:hidden'>
          {mblImages.map(item => (
            <div key={item.id}>
              <div id="unique" className='h-[270px] w-full'>
                <img className='w-full h-full object-cover cursor-pointer max-h-auto' src={item.image} alt="" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div id="dsk-poster" className='hidden md:inline-block w-full h-full'>
        <Slider {...settings} className='w-full h-auto'>
          {dskImages.map(item => (
            <div key={item.id}>
              <img src={item.image} alt={item.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Posters