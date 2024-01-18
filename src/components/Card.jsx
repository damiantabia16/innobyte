import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart.js';

const Card = ({ components }) => {

    const { addToCart } = useCart();

  return (
    <div className='products w-full h-full table'>
        {components && components.map((product) => (
        <div key={product.id} className='card-container md:w-[50%] md:float-left lg:w-[33.33333%] relative'>
            <div className="card flex flex-col w-full text-center items-center border-b border-[#b9b9b9] mt-8">
                <div className="img-container h-[200px]">
                    <Link to={`/producto/${product.id}`} className='outline-none'>
                        <img className='max-h-[180px] p-[10px]' src={`${process.env.PUBLIC_URL}/${product.image}`} alt={product.title} />
                    </Link>
                </div>
                <div className="info px-[16px]">
                    <div className='description h-[160px] flex flex-col justify-center items-center'>
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
                        <div className='add-to-cart py-4'>
                            <button onClick={() => addToCart(product)} className='rounded bg-[#0F52BA] text-white font-bold py-2 px-4 text-[12px] transition duration-300 hover:bg-[#0D4499]'>AGREGAR AL CARRITO</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ))}
    </div>
  )
}

export default Card