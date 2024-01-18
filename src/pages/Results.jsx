import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '../components/Card';
import components from '../components/objects/Products.json';

const Results = () => {

    const { searchTerm } = useParams();

    const [ order, setOrder ] = useState(false);
    const [ orderByPrice, setOrderByPrice ] = useState(null);
    const [ filteredComponents, setFilteredComponents ] = useState([]);
    
    function handleOrder() {
      setOrder(!order)
    }

    const handleOrderByPrice = (orderType) => {
      setOrderByPrice(orderType);
      setOrder(false)
    };

    useEffect(() => {
        const filteredResults = components.filter((product) => product.item_title.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredComponents(filteredResults);
    }, [searchTerm]);

    const sortedComponents = [...filteredComponents]
  
    if (orderByPrice === "asc") {
      sortedComponents.sort((a, b) => a.price - b.price);
    } else if (orderByPrice === "desc") {
      sortedComponents.sort((a, b) => b.price - a.price);
    }

  return (
    <section id='pc-comps-products' className='px-[30px] py-[40px] font-main max-w-[1050px] m-auto'>
      <div id="pc-comps-title">
        <h1 className='text-[20px]'>RESULTADO DE TU BUSQUEDA: "{searchTerm.toUpperCase()}"</h1>
      </div>
      {sortedComponents.length === 0 ? (
        <div id='cant-find' className='h-full mt-[16px]'>
          <h3>No se ha encontrado ningún elemento relacionado con "{searchTerm.toUpperCase()}"</h3>
          <div id="keep-btn" className='mt-[40px] w-full flex items-center justify-center'>
            <Link to='/productos' className='h-[48px] text-center text-[#0F52BA]'>
              <span>SEGUIR COMPRANDO</span>
            </Link>
          </div>
        </div>
      ) : (
        <>
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
          <Card components={sortedComponents} />
        </div>
        </>
      )}
    </section>
  )
}

export default Results