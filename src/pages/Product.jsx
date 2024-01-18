import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../components/objects/Products.json';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { useCart } from '../hooks/useCart';
import { characteristicsMapping } from '../components/objects/characteristics';
import { characUnits } from '../components/objects/characUnits';

const Product = () => {

    const { addToCart } = useCart();

    const [ iconCaract, setIconCaract ] = useState(<IoIosArrowDown />);
    
    const [ showCaract, setShowCaract ] = useState(false);

    function handleCaractDisplay() {
        setShowCaract(!showCaract);
        setIconCaract(showCaract ? <IoIosArrowDown /> : <IoIosArrowUp />)
    }

    const [ productInfo, setProductInfo ] = useState();
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        console.log("data:", data);
        console.log("id:", id);
        const product = data.find((product) => product.id === parseInt(id, 10));
    
        console.log("Product found:", product);

        if (product) {
          setProductInfo(product);
        }
      }, [id]);

      console.log(productInfo);

    const renderCharacteristics = () => {
        if (productInfo && productInfo.characteristics) {
            return Object.entries(productInfo.characteristics).map(([key, value]) => (
                <div key={key} className='flex justify-between'>
                    <span className='font-bold md:text-[15px] xl:text-[17px]'>{characteristicsMapping[key] || key}</span>
                    <span className='md:text-[15px] xl:text-[17px]'>{`${value}${characUnits[key] || ''}`}</span>
                </div>
            ));
        }
        return null;
    };

  return (
    <>
    <div id="product-details" className='pt-[40px] font-main max-w-[1050px] md:m-auto md:px-[30px] 2xl:px-0'>
        <div id="product-details-product-title-dsk" className='hidden lg:inline-block px-[30px] py-[15px] max-w-[88%] mb-[20px]'>
            <h1 className='text-[25px]'>{productInfo ? productInfo.item_title : ""}</h1>
        </div>
        <div id="product-details-container" className='lg:flex'>
            <div id="img-container" className='w-full lg:w-[63%] h-[285px] lg:h-[500px] xl:h-[600px] p-[20px] flex justify-center'>
                {productInfo && (
                    <img className='h-full transition duration-300 hover:scale-110' src={`${process.env.PUBLIC_URL}/${productInfo.image}`} alt="" />
                )}
            </div>
            <div id="details-container" className='px-[30px] py-[15px] lg:w-[37%] lg:float-right'>
                <h1 className='text-[18px] max-w-[88%] mb-[20px] lg:hidden'>{productInfo ? productInfo.item_title : ""}</h1>
                <div id="payment">
                    <div id="price">
                        <h2 className='text-[32px] xl:text-[35px]'>$ {productInfo ? productInfo.price.toLocaleString('es-AR', { useGrouping: true }) : ""}</h2>
                    </div>
                    <div id="cuotes">
                        <span>en 12x $ {productInfo && productInfo.price ? (productInfo.price / 12).toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true }) : ""}</span>
                    </div>
                </div>
                <div id="product-guarantee-stock-shipping-container" className='text-[#4CAF50] flex flex-col justify-between my-[15px] py-[15px] border-t border-b border-[#D0D0D0] text-[14px]'>
                    {productInfo && productInfo.guarantee && (
                        <div id="product-guarantee-container">
                            <div id="guarantee" className='flex items-center'>
                                <MdOutlineSecurity className='text-[20px]' />
                                <p className='ml-[3px]'>Garantía de - {productInfo.guarantee} meses</p>
                            </div>
                        </div>
                    )}
                    {productInfo && productInfo.guarantee ? (
                        <div id='product-stock-container' className='mt-[15px]'>
                            <div id='stock' className='flex items-center'>
                                <FaCheckCircle className='text-[20px]' />
                                <p className='ml-[3px]'>Stock disponible</p>
                            </div>
                        </div>
                    ) : (
                        <div id='product-stock-container'>
                            <div id='stock' className='flex items-center'>
                                <FaCheckCircle className='text-[20px]' />
                                <p className='ml-[3px]'>Stock disponible</p>
                            </div>
                        </div>
                    )}
                    <div id='product-shipping-container' className='mt-[15px]'>
                        <div id='shipping' className='flex items-center'>
                            <FaTruck className='text-[20px]' />
                            <p className='ml-[3px]'>Envíos a todo el país</p>
                        </div>
                    </div>
                </div>
                {productInfo && productInfo.color && (
                    <div id="product-color-container" className='my-[15px] text-[15px]'>
                        <div id="color-container" className='flex'>
                            <span>Color: {productInfo.color}</span>
                            <span className='ml-[10px] w-[20px] h-[20px] rounded-full' style={{backgroundColor: productInfo.color_code}}></span>
                        </div>
                    </div>
                )}
                <div id="btn-container" className='flex mt-[8px] items-center w-full text-[15px] h-[48px]'>
                    <button onClick={() => addToCart(productInfo)} className='w-full flex items-center justify-center h-full m-auto rounded inline-block text-center text-white px-[24px] bg-[#0F52BA] transition duration-300 hover:bg-[#0D4499]'>AGREGAR AL CARRITO</button>
                </div>
            </div>
        </div>
    </div>
    {productInfo && productInfo.item_description ? (
        <div id="description" className='pt-[20px] pb-[40px] px-[30px] md:px-[60px] font-main max-w-[1050px] md:m-auto'>
            <h2 className='text-[23px] md:text-[27px] xl:text-[32px] mb-[10px] cursor-default'>Descripción</h2>
            <span className='text-[13px] md:text-[15px] xl:text-[17px]'>{productInfo ? productInfo.item_description : ""}</span>
        </div>
    ) : (
        ("")
    )};
    {productInfo && productInfo.characteristics ? (
    <div id="caracteristics" className='px-[30px] font-main max-w-[1050px] md:m-auto'>
        <div id="caracteristics-title" className='flex items-center justify-between md:px-[30px]'>
            <h2 className='text-[23px] mb-[10px] cursor-default md:text-[27px] xl:text-[32px]'>Características</h2>
            <span className='cursor-pointer text-[20px]' onClick={handleCaractDisplay}>
                {iconCaract}
            </span>
        </div>
            <div id="caracteristics-content" className={`w-full h-full text-[13px] md:px-[30px] ${showCaract ? 'visible' : 'hidden'}`}>
                {renderCharacteristics()}
            </div>
    </div>
    ) : ("")}
    </>
  )
}

export default Product;