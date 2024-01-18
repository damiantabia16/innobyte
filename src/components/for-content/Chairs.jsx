import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import chairs from '../objects/Products.json';
import { useCart } from '../../hooks/useCart';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function SamplePrevArrow({onClick}) {
  return (
    <button onClick={onClick} id='prev' className='hidden xl:flex justify-center items-center z-30 rounded bg-[#E0E0E0] w-[45px] h-[100px] top-[50%] left-0 text-4xl absolute outline-none text-[#0F52BA] transition duration-300 hover:bg-[#D0D0D0]'>
      <IoIosArrowBack />
    </button>
  );
}

function SampleNextArrow({onClick}) {
  return (
    <button onClick={onClick} id='next' className='hidden xl:flex justify-center items-center z-30 rounded bg-[#E0E0E0] w-[45px] h-[100px] top-[50%] right-0 text-4xl absolute outline-none text-[#0F52BA] transition duration-300 hover:bg-[#D0D0D0]'>
      <IoIosArrowForward />
    </button>
  );
}
const Chairs = () => {

  const { addToCart } = useCart();

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  }

  const startId = 118;
  const endId = 123;
  const filteredComponents = chairs.filter(item => item.id >= startId && item.id <= endId); 

  return (
    <div id="chairs" className='pt-[60px]'>
      <div id="chairs-container" className='max-w-[1050px] m-auto'>
        <div id="chairs-title" className='flex items-center'>
          <h2 className='italic font-bold text-[23px] md:pl-[20px] 2xl:pl-0'>MAXIMIZÁ TU COMODIDAD CON NUESTRAS SILLAS</h2>
          <a href="" className='ml-[30px]'>
            <span className='hidden md:inline-block text-[#0F52BA] font-bold'>VER SILLAS</span>
          </a>
        </div>
        <div id="chairs-column">
          <Slider {...settings} className='w-full h-auto xl:px-[20px]'>
            {filteredComponents && filteredComponents.map((product) => (
              <div key={product.id} className='card-container'>
                <div className="card flex flex-col w-full text-center items-center border-b border-[#b9b9b9] mt-8">
                  <div className="img-container h-[200px]">
                    <Link to={`/producto/${product.id}`} className='outline-none'>
                      <img className='max-h-[180px] p-[10px]' src={product.image} alt="" />
                    </Link>
                  </div>
                  <div className="info px-[16px]">
                    <div className='description h-[160px] flex flex-col justify-center'>
                      <div className='resume'>
                        <h3 className='text-[15px]'>{product.title}</h3>
                      </div>
                      <div className="complete">
                        <span className='text-center text-[10px]'>
                        {product.description}
                        </span>
                      </div>
                    </div>
                    <div className='footer h-[120px] flex flex-col justify-center'>
                      <div className='price font-bold text-[17px]'>$ {product.price.toLocaleString('es-AR', { useGrouping: true })}</div>
                      <div className='add-to-cart cursor-pointer py-4'>
                        <button onClick={() => addToCart(product)} className='rounded bg-[#0F52BA] text-white font-bold py-2 px-4 text-[12px] transition duration-300 hover:bg-[#0D4499]'>AGREGAR AL CARRITO</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Chairs