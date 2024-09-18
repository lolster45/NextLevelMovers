import React, { useState } from 'react'
import './App.scss'

//React router...
import {HashRouter, Routes, Route, Link} from "react-router-dom"


//React icons...
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";



//Components...
import Home from './pages/Home'
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import OurTeam from './pages/OurTeam';
import Services from './components/Services';
import ServicesPage from './pages/ServicesPage';
import MobileNav from './components/MobileNav';
import FAQ from './pages/FAQpage';
import ScrollToTop from './components/ScrollToTop';



function App() {

  const [mobileNav, setMobileNav] = useState(false);
  


  return (
    <div className="app poppins-regular">
      <HashRouter>
        <ScrollToTop/>
        <nav>
            <h1>Next Level Movers</h1>
            <ul>
              <Link to={'/'}>Home</Link>
              <li className='about-link'>
                About
                <IoIosArrowDown/>
                <div>
                  <Link to={'/about-us'}>
                    <MdOutlineKeyboardArrowRight/>
                    About Us
                  </Link>
                  <Link to={'/our-team'}>
                    <MdOutlineKeyboardArrowRight/>
                    Our Team
                  </Link>
                  <Link to={'/FAQ'}>
                    <MdOutlineKeyboardArrowRight/>
                    FAQ
                  </Link>
                </div>
              </li>
              <Link to={'/services'}>Services</Link>
              <Link to={'/contact'}>Contact</Link>
            </ul>
            <button>Free Quote</button>
            <div className='hamburger-menu'>
                <Link to={'/'}>
                  <h2>Next Level Movers</h2>
                </Link>
                <svg 
                    class={`ham hamRotate ${mobileNav ? "active" : ""} ham7 `}
                    viewBox="0 0 100 100" 
                    width="80" 
                    onClick={() => setMobileNav(prev => !prev)}
                  >
                    <path
                      class="line top"
                      d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013" 
                    />
                    <path
                      class="line middle"
                      d="m 70,50 h -40" 
                    />
                    <path
                      class="line bottom"
                      d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40" 
                    />
                </svg>
            </div>
        </nav>
        <MobileNav mobileNav={mobileNav} setMobileNav={setMobileNav}/>
        <Routes>
          <Route path="/" element={<Home/>}/>  
          <Route path="/about-us" element={<AboutUs/>}/>  
          <Route path="/our-team" element={<OurTeam/>}/>  
          <Route path="/services" element={<ServicesPage/>}/>  
          <Route path="/contact" element={<Contact/>}/>  
          <Route path="/FAQ" element={<FAQ/>}/>  

        </Routes>
        <footer>
          <div className='title-footer'>
            Next Level Movers
          </div>
          <div className='contact-footer'>
            <h2>Contact</h2>
            <div>
              <span>Phone: 512-731-3636</span>
              <span>Email: randomemail#gmail.com</span>
            </div>
          </div>
          <div className='footer-working'>
            <h2>Working Hours</h2>
            <div>Mon-Fri: 8am - 8pm</div>
            <div>Saturday: 9am - 7pm</div>
            <div>Sunday: 8am - 8pm</div>
          </div>
          <div className='footer-resources'>
            <h2>Resources</h2>
            <ul>
              <li>Locations</li>
              <li>FAQ's</li>
              <li>
                <span>Face</span>
                <span>Insta</span>
                <span>Youtube</span>
              </li>
              
            </ul>
          </div>
        </footer>
      </HashRouter>
    </div>
  )
}

export default App
