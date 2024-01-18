import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import pageLogo from '../logo/innobyte-2.png';
import { FaShoppingCart } from "react-icons/fa";
import Navbar from './Navbar';
import { useCart } from '../hooks/useCart';

const Header = () => {

  const { cart } = useCart();
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  const [ searchTerm, setSearchTerm ] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`resultado/${searchTerm}`)
    console.log(searchTerm);
    setSearchTerm('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <header className='font-main'>
      <div id="header-wrapper" className='min-h-[10vh] h-auto'>
        <div id="inner-wrapper" className='h-full flex flex-col md:flex-col-reverse'>
          <div id="top-elements" className='flex w-full h-full'>
            <Navbar />
          </div>
          <div id="bottom-elements" className='w-full px-[30px] md:px-[40px] md:my-[20px] max-w-[1200px] lg:mx-auto'>
            <div className='md:flex md:items-center md:justify-around md:flex-wrap'>
              <div id="logo" className='h-[90px] w-full flex justify-center md:inline-block md:w-auto my-[10px]'>
                <Link to='/'>
                  <img className='h-full' src={pageLogo} alt="innobyte" />
                </Link>
              </div>
              <div id="searcher" className='my-[10px] md:min-w-[50vw] 2xl:min-w-[40vw]'>
                <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleKeyPress} className='w-full rounded border border-gray-300 transition duration-300 hover:border-black focus:border-[#0F52BA] outline-none px-[10px] py-[15px]' type="search" placeholder='Buscar...' />
              </div> 
                <div className='flex items-center justify-center py-[10px]'>
                  <Link to='/carrito'>
                    <div id="shop-cart" className='relative'>
                        <span className='text-[25px]'>
                          <FaShoppingCart />
                        </span>
                      <p className='flex justify-center items-center absolute bg-[#f44336] rounded-full w-[20px] h-[20px] bottom-[15px] left-[15px]'>                   
                        <span className='text-[12px] text-white'>{totalQuantity}</span>
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header