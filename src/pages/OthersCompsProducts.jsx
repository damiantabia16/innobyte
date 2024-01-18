import React, { useState, useEffect } from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import components from '../components/objects/Products.json';
import Card from '../components/Card';
import ReactPaginate from 'react-paginate';
import useSorting from '../hooks/useSorting';
import usePagination from '../hooks/usePagination';

const OthersCompsProducts = () => {

  const startId = 97;
  const endId = 123;
  const filteredComponents = components.filter(item => item.id >= startId && item.id <= endId);

  const { order, orderByPrice, handleOrder, handleOrderByPrice, sortedList } = useSorting(filteredComponents);
  const { pageNumber, pageRangeDisplayed, handlePageClick, paginatedList, itemsPerPage } = usePagination(sortedList());

  return (
    <section id='pc-comps-products' className='px-[30px] py-[40px] md:px-[20px] 2xl:px-0 font-main max-w-[1050px] m-auto'>
      <div id="pc-comps-title">
        <h1 className='text-[20px] md:pl-[20px] 2xl:pl-0'>OTROS PRODUCTOS</h1>
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
        <Card components={paginatedList()} />
        <ReactPaginate 
          previousLabel={<IoChevronBackOutline />}
          nextLabel={<IoChevronForwardOutline />}
          breakLabel={'...'}
          pageCount={Math.ceil(filteredComponents.length / itemsPerPage)}
          marginPagesDisplayed={0}
          pageRangeDisplayed={pageRangeDisplayed}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    </section>
  )
}

export default OthersCompsProducts