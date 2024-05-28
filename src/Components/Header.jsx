import menu from '../Img/menu.svg';
import closeMenu from '../Img/close.png';
import logo from '../img/logo.png';
import React, { useState } from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
      setIsMenuOpen(!isMenuOpen);
      console.log("Toggle menu:", isMenuOpen);
      
  }

    return (
      <section className="tela-toda">
<header>
  <nav className='nav-bar'>
    <div className='logo-div'>
        {/* <img className='logo' src={logo} alt="" /> */}
       
    </div>

    <div className="nav-list">
        <ul className={isMenuOpen ? 'nav-list-open' : 'nav-list-closed'}>
                <li className='nav-item'><a className='nav-link' href='#home'>Home</a></li> 
                <li className='nav-item'><a className='nav-link' href="#service">Serviços</a></li>
                {/* <li className='nav-item'><a className='nav-link' href="#sobre">Sobre</a></li> */}
                <li className='nav-item'><a className='nav-link' href="#contato">Contato</a></li>
                <div className='icons-mobile'>
                  <a href="https://www.instagram.com/redemaquinas/">
                  <FaInstagram />
                  </a>
                  <a href="https://wa.me/5585991856914">
                  <FaWhatsapp />
                  </a>
                 
              </div>
        </ul>
    </div>

    <div className="mobile-menu-icon">
        <button onClick={toggleMenu}>
            <img className='icon-menu' src={isMenuOpen ? closeMenu : menu} alt="" />
        </button>
    </div>
  </nav>
</header>
      </section>
      
    )
  }