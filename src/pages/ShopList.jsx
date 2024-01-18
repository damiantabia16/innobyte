import React from 'react';
import { Link } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";
import { useCart } from '../hooks/useCart';

function CartItem ({ id, item_title, image, accPrice, addToCart, removeFromCart, clearItem, quantity, amount }) {

  const isMaxQuantityReached = quantity >= amount;

  return (
    <div id="items" className='relative border border-gray-400 rounded-lg p-[10px] min-h-[100px] mt-[40px] md:flex md:items-center'>
      <div id="item-img-container" className='w-full h-[100px] text-center md:w-[250px]'>
        <Link to={`/producto/${id}`}>
          <img className='object-cover h-full m-auto' src={image} alt={item_title} />
        </Link>
      </div>
      <div id="item-title-container" className='w-full md:relative'>
        <h3 className='text-center mt-[1.5em] mb-[5px] md:text-left md:self-center md:mt-0'>
          <Link to={`/producto/${id}`}>
            {item_title}
          </Link>
        </h3>
      </div>
      <div id="item-amount-counter-container" className='w-full flex items-center justify-center md:w-[165px] md:h-full'>
        <div id="controls-container" className='relative w-[165px] m-auto text-center p-[3px] inline-block text-[#7a7a7a]'>
          <div id='controls'>
            <button onClick={removeFromCart} className='cursor-pointer w-auto text-[25px] select-none'>-</button>
            <span className='cursor-default'>{quantity}</span>
            <button onClick={addToCart} disabled={isMaxQuantityReached} className={`cursor-pointer w-auto text-[25px] select-none ${isMaxQuantityReached ? 'opacity-50' : ''}`}>+</button>
          </div>
        </div>
      </div>
      <div id="item-price-container" className='my-[10px] w-full md:w-[270px]'>
        <span className='flex items-center justify-center text-[#0F52BA] text-center text-[24px] md:text-[18px] cursor-default'>$ {accPrice.toLocaleString('es-AR', { useGrouping: true })}</span>
      </div>
      <div id="delete" className='absolute top-[3px] right-0'>
        <button onClick={clearItem}>
          <MdDeleteForever className='cursor-pointer text-[#7a7a7a] text-[25px] mt-[5px] mr-[5px] transition duration-300 hover:text-[#4a4a4a]' />
        </button>
      </div>
    </div>
  )
}

const ShopList = () => {

  const { cart, clearCart, addToCart, removeFromCart, clearItem } = useCart();

  const handleTotal = (cart) => {
    const total = cart.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
    
    return total.toLocaleString('es-AR', {  useGrouping: true });
  };

  return (
    <div id='shoplist' className='py-[40px] font-main max-w-[1050px] md:m-auto px-[30px]'>
      <div id="shoplist-title">
        <h1 className='text-[18px] font-bold text-[#0F52BA] cursor-default'>CARRITO DE COMPRAS</h1>
      </div>
      {cart.length === 0 ? (
        <div id="no-items" className='h-full mt-[16px]'>
          <h3>Tu carrito de compras está vacío</h3>
          <div id="keep-btn" className='mt-[40px] w-full flex items-center justify-center'>
            <Link to='/productos' className='h-[48px] text-center text-[#0F52BA]'>
              <span>SEGUIR COMPRANDO</span>
            </Link>
          </div>
        </div>
      ) : (
        <>
          {cart.map(product => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              removeFromCart={() => removeFromCart(product)}
              clearItem={() => clearItem(product)}
              {...product}
            />
          ))}
          <div id="total-price" className='mt-[40px] text-[#0F52BA] flex md:justify-end text-[25px]'>
            <h3>TOTAL:</h3>
            <span className='ml-[1rem]'>$ {handleTotal(cart)}</span>
          </div>
          <div id="delete-btn" className='mt-[40px] h-[48px]'>
            <button onClick={clearCart} className='flex items-center justify-center rounded inline-block text-center px-[24px] bg-[#DD0000] text-white w-full transition duration-300 hover:bg-[#C20000] h-full'>
              LIMPIAR CARRITO
            </button>
          </div>
          <div id="purchase-btn" className='mt-[10px]'>
            <Link onClick={clearCart} to='/comprado' className='flex items-center justify-center rounded inline-block h-[48px] px-[24px] text-center bg-[#0F52BA] text-white w-full transition duration-300 hover:bg-[#0D4499]'>
              <button className='h-full'>COMPRAR AHORA</button>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default ShopList