//React...
import React, { useState } from 'react';

//React router...
import {Link} from 'react-router-dom'

//React icons...
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

//styles...
import '../styles/MobileNav.scss'


const MobileNav = ({mobileNav, setMobileNav}) => {

    const [active, setActive] = useState(false)


    const handleNavClick = () => {
        setMobileNav(prev => !prev)
    }


    return (
        <div    
            className={`black-overlay-mobile ${mobileNav ? "active" : ""}`} 
            onClick={() => {
                setMobileNav(prev => !prev) 
                console.log('black overlay')
            }}
        >
            <div onClick={(e) => e.stopPropagation()}>
                <ul className='mobile-nav'>
                    <Link to={'/'} onClick={handleNavClick}>Home</Link>
                    <Link className='mobile-drop' onClick={() => setActive(prev => !prev)}>
                        About 
                        {!active && 
                            <IoIosArrowDown/>    
                        }
                        {active &&
                            <IoIosArrowUp/>
                        }
                        <div className={`${active ? 'active' : ""}`}>
                            <Link to={'/about-us'} onClick={handleNavClick}>
                                <MdOutlineKeyboardArrowRight/>
                                About Us
                            </Link>
                            <Link to={'/our-team'} onClick={handleNavClick}>
                                <MdOutlineKeyboardArrowRight/>
                                Our Team
                            </Link>
                            <Link to={'/FAQ'} onClick={handleNavClick}>
                                <MdOutlineKeyboardArrowRight/>
                                FAQ
                            </Link>
                        </div>
                    </Link>
                    <Link to={'/services'} onClick={handleNavClick}>Services</Link>
                    <Link to={'/contact'} onClick={handleNavClick}>Contact</Link>
                </ul>
            </div>
        </div>
    );
};

export default MobileNav;