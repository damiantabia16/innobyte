import React from 'react';
import { Link } from 'react-router-dom';
import innobyte from '../logo/innobyte-2.png';
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer" className='pt-[40px] font-main'>
        <div id="footer-logo" className='h-[70px] flex justify-center mb-[60px]'>
            <Link to='/'>
                <img className='h-full transition duration-300 hover:scale-125' src={innobyte} alt="" />
            </Link>
        </div>
        <div id="container" className='md:w-full md:bg-[#0F52BA]'>
            <div id="all-footer-container" className='md:bg-[#0F52BA] md:text-white md:flex md:max-w-[1050px] md:m-auto md:px-[30px] 2xl:pl-0'>
                <div id='contact-us' className='px-[15px] md:py-[60px] md:w-[50%]'>
                    <div id="contact-btn" className='md:hidden text-[14px] flex items-center justify-around text-center mb-[30px]'>
                        <a href="" id='write-us-btn' className='text-[#0F52BA] px-[40px] py-[15px] rounded border-b border-r border-[#5E82BA] transiton duration-300 hover:bg-[#E0E0E0]'>
                            <span>
                                ESCRIBINOS
                            </span>
                        </a>
                        <a href="" id='call-us-btn' className='text-white bg-[#0F52BA] rounded px-[40px] py-[15px] transition duration-300 hover:bg-[#0D4499]'>
                            <span>
                                LLAMAR
                            </span>
                        </a>
                    </div>
                    <div id="contact-data" className='mb-[32px] md:w-[50%]'>
                        <div id="customer-support">
                            <h4 className='text-[16px] text-[#0F52BA] md:text-white font-bold mb-[16px]'>ATENCIÓN AL CLIENTE</h4>
                            <div id="data" className='flex flex-col text-[14px]'>
                                <label htmlFor="">
                                    <span>0800-000-000</span>
                                </label>
                                <label htmlFor="">
                                    <a href="mailto:contacto@innobyte.com">
                                        <span>contacto@innobyte.com</span>
                                    </a>
                                </label>
                                <label htmlFor="">
                                    <span className='flex items-center mb-[16px]'>
                                        <FaWhatsapp className='mr-1' />+54 9 11 0000-1111
                                    </span>
                                </label>
                                <label htmlFor="">
                                    <span>Lunes a Viernes de 8 a 18hs.</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="social-medias" className='px-[15px] pt-[32px] pb-[40px] bg-[#0F52BA] text-white md:w-[50%] md:py-[60px]'>
                    <div id="social-medias-title" className='mb-[47px]'>
                        <h4 className='text-center text-[17px] md:text-left'>SEGUINOS EN NUESTRAS REDES SOCIALES Y ENTERATE DE TODAS LAS NOVEDADES</h4>
                    </div>
                    <div id="links" className='flex justify-center md:justify-start'>
                        <div id='facebook'>
                            <a href="" className='h-[42px] w-[42px] mx-[17px] bg-white text-[#0F52BA] rounded-3xl transition duration-300 hover:scale-125 flex items-center justify-center'>
                                <FaFacebookF className='text-[21px]' />
                            </a>
                        </div>
                        <div id='twitter'>
                            <a href="" className='h-[42px] w-[42px] mx-[17px] bg-white text-[#0F52BA] rounded-3xl transition duration-300 hover:scale-125 flex items-center justify-center'>
                                <FaXTwitter className='text-[21px]' />
                            </a>
                        </div>
                        <div id='instagram'>
                            <a href="" className='h-[42px] w-[42px] mx-[17px] bg-white text-[#0F52BA] rounded-3xl transition duration-300 hover:scale-125 flex items-center justify-center'>
                                <FaInstagram className='text-[21px]' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="copyright" className='bg-[#0D4499] flex justify-center text-center'>
            <span className='text-white text-[11px] py-2'>&copy;2023 innobyte. Hecho por <a href="" >Damián Tabia</a>.<br /></span>
        </div>
    </section>
  )
}

export default Footer