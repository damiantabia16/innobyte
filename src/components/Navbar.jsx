import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HiBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import sections from './objects/Products.json';

const Navbar = () => {

    const [ defaultIcon, setDefaultIcon ] = useState(<IoIosArrowDown />)

    const [iconPC, setIconPC] = useState(defaultIcon);
    const [iconPeripherals, setIconPeripherals] = useState(defaultIcon);
    const [ iconOthers, setIconOthers ] = useState(defaultIcon);

    const [ ulDisplay, setUlDisplay ] = useState(false);
    function handleDisplay() {
        setUlDisplay(!ulDisplay);
        setUlClose(false);
    }

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setUlDisplay(false);
            }
        }

        document.addEventListener("mousedown", handler);

        return() => {
            document.removeEventListener("mousedown", handler);
        }

    })

    const [ ulClose, setUlClose ] = useState(false);
    function handleClose() {
        setUlClose(!ulClose);
        setUlDisplay(false);
    }

    const [showPCComponents, setShowPCComponents] = useState(false);
    const handlePCComponentsDisplay = () => {
        setShowPCComponents(!showPCComponents);
        setShowPeripherals(false);
        setShowOthers(false);
        setIconPC(showPCComponents ? <IoIosArrowDown /> : <IoIosArrowUp />);
        setIconPeripherals(<IoIosArrowDown />);
        setIconOthers(<IoIosArrowDown />);
    };

    const [showPeripherals, setShowPeripherals] = useState(false);
    const handlePeripheralsDisplay = () => {
        setShowPeripherals(!showPeripherals);
        setShowPCComponents(false);
        setShowOthers(false);
        setIconPeripherals(showPeripherals ? <IoIosArrowDown /> : <IoIosArrowUp />);
        setIconPC(<IoIosArrowDown />);
        setIconOthers(<IoIosArrowDown />);
    };

    const [ showOthers, setShowOthers ] = useState(false);
    const handleShowOthers = () => {
        setShowOthers(!showOthers);
        setShowPCComponents(false);
        setShowPeripherals(false);
        setIconOthers(showOthers ? <IoIosArrowDown /> : <IoIosArrowUp />);
        setIconPC(<IoIosArrowDown />);
        setIconPeripherals(<IoIosArrowDown />);
    }

    const handleLinkClick = () => {
        setUlClose(true);
        setUlDisplay(false);
        setShowPCComponents(false);
        setShowPeripherals(false);
        setShowOthers(false);
        setIconPC(defaultIcon);
        setIconPeripherals(defaultIcon);
        setIconOthers(defaultIcon);
    }

    const handleDskLinkClick = () => {
        setMenu(false);
    }

    const [ menu, setMenu ] = useState(false);
    const handleMenu = () => {
        setMenu(!menu);
    }

    const handleCloseMenu = () => {
        setMenu(false);
    }

    const allCategoriesFilteredSections = sections.filter(item => item.id >= 1 && item.id <= 48);
    
    const allCategories = [...new Set(allCategoriesFilteredSections.map(item => item.category.replace(/-/g, ' ')))];
    
    const allPpCategoriesFilteredSections = sections.filter(item => item.id >= 61 && item.id <= 96);

    const allPpCategories = [...new Set(allPpCategoriesFilteredSections.map(item => item.category.replace(/-/g, ' ')))];

    const allOtCategoriesFilteredSections = sections.filter(item => item.id >= 97 && item.id <= 123);

    const allOtCategories = [...new Set(allOtCategoriesFilteredSections.map(item => item.category.replace(/-/g, ' ')))];

  return (
    <nav id='site-nav' className='w-full h-full px-[30px] pt-[35px] pb-[20px] md:py-[20px] md:bg-[#0F52BA]'>
        <div id="mobile-nav" className='text-white md:hidden'>
            <div id='bar'>
                <div id="btn">
                    <HiBars3 onClick={handleDisplay} className='cursor-pointer text-[27px] text-[#0F52BA]' />
                </div>
            </div>
            <div ref={menuRef} id="mobile-overlay" className={`fixed bg-[#0F52BA] top-0 left-0 px-[30px] w-full h-screen overflow-hidden z-50 transition-transform duration-300 ${
                        ulDisplay ? 'translate-x-0' : '-translate-x-full'}`}>
                <div id="close-bar" className='bg-[#0F52BA] h-[100px] w-full flex items-center justify-between'>
                    <div id='close-btn'>
                        <IoMdClose onClick={handleClose} className='cursor-pointer w-[30px] h-[30px] transition duration-500' />
                    </div>
                </div>
                <div id="menu-wrapper">
                    <ul>
                        <li id='pc-components' className='mbl-item'>
                            <div className='flex items-center justify-between'>
                                <Link to='/componentes-de-pc' onClick={handleLinkClick}>
                                    <span>COMPONENTES DE PC</span>
                                </Link>
                                <span className='text-[20px]' onClick={handlePCComponentsDisplay} >
                                    {iconPC}
                                </span>
                            </div>
                            <div id='pc-components-list' className={`px-[30px] ${showPCComponents ? 'visible' : 'hidden'}`}>
                                <ul>
                                    {allCategories && allCategories.map(category => (
                                        <li key={category}>
                                            <Link to={`/componentes-de-pc/${category}`} onClick={handleLinkClick}>
                                                <span className='uppercase'>{category}</span>
                                            </Link>
                                        </li> 
                                    ))}
                                </ul>
                            </div>
                        </li>
                        <li className='mbl-item'>
                            <Link to='/pc-armadas' onClick={handleLinkClick}>
                                <span>PC ARMADAS</span>
                            </Link>
                        </li>
                        <li className='mbl-item'>
                            <Link to='/notebooks' onClick={handleLinkClick}>
                                <span>NOTEBOOKS</span>
                            </Link>
                        </li>
                        <li id='peripherals' className='mbl-item'>
                            <div className='flex items-center justify-between'>
                                <Link to='/perifericos' onClick={handleLinkClick}>
                                    <span>PERIFÉRICOS</span>
                                </Link>
                                <span className='text-[20px]' onClick={handlePeripheralsDisplay} >
                                    {iconPeripherals}
                                </span>
                            </div>
                            <div id='peripherals-components-list' className={`px-[30px] ${showPeripherals ? 'visible' : 'hidden'}`}>
                                <ul>
                                    {allPpCategories && allPpCategories.map(category => (
                                        <li key={category}>
                                            <Link to={`/perifericos/${category}`} onClick={handleLinkClick}>
                                                <span className='uppercase'>{category}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                        <li className='mbl-item'>
                            <div className='flex items-center justify-between'>
                                <Link to='/otros' onClick={handleLinkClick}>
                                    <span>OTROS</span>
                                </Link>
                                <span className='text-[20px]' onClick={handleShowOthers} >
                                    {iconOthers}
                                </span>
                            </div>
                            <div id='others-components-list' className={`px-[30px] ${showOthers ? 'visible' : 'hidden'}`}>
                                <ul>
                                    {allOtCategories && allOtCategories.map(category => (
                                        <li key={category}>
                                            <Link to={`/otros/${category}`} onClick={handleLinkClick}>
                                                <span className='uppercase'>{category}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="desktop-nav" className='hidden md:flex text-white w-full h-full flex items-center px-[20px]' onMouseLeave={handleCloseMenu}>
            <div id="inner-nav" className='w-full'>
                <ul id='full-nav' className='flex justify-between xl:justify-center'>
                    <li className='dsk-item'>
                        <Link to='/componentes-de-pc' onClick={handleDskLinkClick}>
                            <span className='hover:font-bold md:text-[15px] xl:px-[12px] lg:text-[16px]' onMouseOver={handleMenu}>COMPONENTES DE PC</span>
                        </Link>
                        <div className={`absolute w-screen h-[310px] left-0 z-30 bg-[#0F52BA] ${menu ? 'visible' : 'hidden'}`} onMouseLeave={handleMenu}></div>
                        <div id="pc-components-dropwdown-menu" className={`pt-3 text-[14px] xl:px-[12px] absolute z-50 bg-[#0F52BA] w-full ${menu ? 'visible' : 'hidden'}`}>
                            <ul>
                                {allCategories && allCategories.map(category => (
                                    <li key={category}>
                                        <Link to={`/componentes-de-pc/${category}`} onClick={handleDskLinkClick}>
                                            <span className='uppercase hover:font-bold'>{category}</span>
                                        </Link>
                                    </li> 
                                ))}
                            </ul>
                        </div>
                    </li>
                    <li className='dsk-item'>
                        <Link to='/pc-armadas' onClick={handleDskLinkClick}>
                            <span className='hover:font-bold md:text-[15px] xl:px-[12px] lg:text-[16px]'>PC ARMADAS</span>
                        </Link>
                    </li>
                    <li className='dsk-item'>
                        <Link to='/notebooks' onClick={handleDskLinkClick}>
                            <span className='hover:font-bold md:text-[15px] xl:px-[12px] lg:text-[16px]'>NOTEBOOKS</span>
                        </Link>
                    </li>
                    <li className='dsk-item'>
                        <Link to='/perifericos' onClick={handleDskLinkClick}>
                            <span className='hover:font-bold md:text-[15px] xl:px-[12px] lg:text-[16px]' onMouseOver={handleMenu}>PERIFÉRICOS</span>
                        </Link>
                        <div id='peripherals-dropdown-menu' className={`pt-3 text-[14px] xl:px-[12px] absolute z-50 bg-[#0F52BA] w-full ${menu ? 'visible' : 'hidden'}`}>
                            <ul>
                                {allPpCategories && allPpCategories.map(category => (
                                    <li key={category}>
                                        <Link to={`/perifericos/${category}`} onClick={handleDskLinkClick}>
                                            <span className='uppercase hover:font-bold'>{category}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                    <li className='dsk-item'>
                        <Link to='/otros' onClick={handleDskLinkClick}>
                            <span className='hover:font-bold md:text-[15px] xl:px-[12px] lg:text-[16px]' onMouseOver={handleMenu}>OTROS</span>
                        </Link>
                        <div id="others-dropdown-menu" className={`pt-3 text-[14px] xl:px-[12px] absolute z-50 bg-[#0F52BA] w-full ${menu ? 'visible' : 'hidden'}`}>
                            <ul>
                                {allOtCategories && allOtCategories.map(category => (
                                    <li key={category}>
                                        <Link to={`/otros/${category}`} onClick={handleDskLinkClick}>
                                            <span className='uppercase hover:font-bold'>{category}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;