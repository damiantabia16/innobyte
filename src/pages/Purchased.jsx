import React from 'react';
import { Link } from 'react-router-dom';

const Purchased = () => {
  return (
    <div id="success" className='font-main text-center w-full h-full flex flex-col items-center justify-center m-auto max-w-[1050px] px-[30px] py-[30px]'>
        <h1 className='cursor-default text-[#0F52BA] font-bold text-[46px] md:text-[7.5vw] mt-[20px]'>Felicitaciones!</h1>
        <span className='cursor-default md:text-[2vw] mt-[20px]'>La compra ha sido un éxito.</span>
        <div id="success-btns" className='flex flex-col w-full md:w-[70%] md:flex-row my-[16px]'>
            <Link to='/productos' className='w-full mt-[20px] rounded inline-block h-[48px] px-[30px] md:mx-[30px] text-center bg-[#0F52BA] text-white w-full transition duration-300 hover:bg-[#0D4499]'>
                <span className='flex items-center justify-center h-full'>SEGUIR COMPRANDO</span>
            </Link>
            <Link to='/' className='w-full mt-[20px] rounded inline-block h-[48px] px-[30px] md:mx-[30px] text-center text-[#0F52BA] w-full'>
                <span className='flex items-center justify-center h-full'>VOLVER AL INICIO</span>
            </Link>
        </div>
    </div>
  )
}

export default Purchased