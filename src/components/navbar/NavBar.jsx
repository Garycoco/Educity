import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from "../../assets/logo.png";

const NavBar = () => {

  const [sticky, setSticky] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, [])

  const navRef = useRef();
  const toggleMenu = () => {
      setShowMobileNav(!showMobileNav);
      // navRef.current.style.transform = 'translateX(0)';
  }

  return (
    <header className={sticky ? 'scrolled' : ''}>
      <img src={logo} alt='logo' className='logo' />
      <button className='mobile-nav-toggle' onClick={toggleMenu}></button>
      <nav>
        <ul ref={navRef} className={showMobileNav ? 'nav-clicked' : ''}>
          <li>Home</li>
          <li>Programs</li>
          <li>About us</li>
          <li>Campus</li>
          <li>Testimonials</li>
          <li><button className='btn'>Contact us</button></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
