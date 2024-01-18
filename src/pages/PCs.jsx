import React from 'react';
import pc from '../components/objects/Products.json';
import Card from '../components/Card';
import useSorting from '../hooks/useSorting';

const PCs = () => {

  const startId = 49;
  const endId = 54;
  const filteredComponents = pc.filter(item => item.id >= startId && item.id <= endId);

  const { order, orderByPrice, handleOrder, handleOrderByPrice, sortedList } = useSorting(filteredComponents);

  return (
    <section id='pcs-products' className='px-[30px] py-[40px] md:px-[20px] 2xl:px-0 font-main max-w-[1050px] m-auto'>
      <div id="pcs-title">
        <h1 className='text-[20px] md:pl-[20px] 2xl:pl-0'>PC ARMADAS</h1>
      </div>
      <div id="products-container">
        <div id='filters' className='text-[15px]'>
          <div id="options" className='flex mt-[15px] justify-end items-center text-[#343636]'>
            <div id="sort-by" className='relative'>
              <button onClick={handleOrder}>
                <span>Ordenar por:</span>
              </button>
              <ul className={`bg-[#0F52BA] text-white absolute z-30 py-[5px] left-unset right-0 rounded-md ${order ? 'visible' : 'hidden'}`}>
                <li className='py-[3px]'>
                  <button onClick={() => handleOrderByPrice("asc")} className='px-[20px] whitespace-nowrap hover:font-bold'>
                    Menor precio
                  </button>
                </li>
                <li className='py-[3px]'>
                  <button onClick={() => handleOrderByPrice("desc")} className='px-[20px] whitespace-nowrap hover:font-bold'>
                    Mayor precio
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Card components={sortedList()} />
      </div>
    </section>
  )
}

export default PCs