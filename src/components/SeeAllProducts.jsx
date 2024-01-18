import React from 'react';
import { Link } from 'react-router-dom';

const SeeAllProducts = () => {
  return (
    <div id='view-all-products' className='flex items-center justify-center max-w-[1050px] m-auto font-main'>
        <Link to='/productos' className='mx-[15px] my-[40px] w-full'>
            <button className='rounded bg-[#E0E0E0] text-[#0F52BA] py-[15px] w-full transition duration-300 hover:bg-[#0F52BA] hover:text-white'>VER TODOS LOS PRODUCTOS</button>
        </Link>
    </div>
  )
}

export default SeeAllProducts