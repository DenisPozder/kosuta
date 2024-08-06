import React, { useEffect, useState } from 'react'
import './hall-navbar.css'
import { Link, NavLink, useLocation } from 'react-router-dom'
import kosutaLogo from '../../Assets/logo.svg'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { useTranslation } from 'react-i18next';

const HallNavbarLinks = [
    {
        title: 'rezervacije',
        engTitle: 'reservations',
        link: "/početna"
    },
    {
        title: 'sve sale',
        engTitle: 'all halls',
        link: "/sale"
    },
    {
        title: 'meni',
        engTitle: 'menu',
        link: "/meni"
    },
    {
        title: 'kontakt',
        engTitle: 'contact',
        link: "/kontakt"
    },
    {
        title: 'o nama',
        engTitle: 'about us',
        link: "/o-nama"
    },
    {
        title: 'galerija',
        engTitle: 'gallery',
        link: "/galerija"
    },
]

const HallNavbar = () => {

    const { i18n } = useTranslation('')

    const location = useLocation()
    const isRelativePage = [
      "/galerija",
    ].includes(location.pathname)

      // Toggle Navbar
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
  }

  const closeMenu = () => {
    setMenuVisible(false)
  }

  /*----- Change background on scroll -----*/
  const [back, setBack] = useState(false)
  const backgroundColor = () => {
      if(window.scrollY > 0) {
          setBack(true)
      }else {
          setBack(false)
      }
  }
      
  useEffect(() => {
      window.addEventListener('scroll', backgroundColor)
      
      return () => {
          window.removeEventListener('scroll', backgroundColor)
      }
  },[])

  return (
    <div className={`hall-navbar ${back ? "background" : ""} ${isRelativePage ? "hall-navbar-relative" : ""}`}>
        <div className="hall-navbar-content">
            <Link to={'/početna'} className='hnc-logo'>
                <img src={kosutaLogo} alt="Košuta logo" />
            </Link>
            <div className={`hnc-links ${menuVisible ? "toggle" : ""}`}>
                <button className="hnc-close" onClick={closeMenu}>
                    <IoIosCloseCircleOutline />
                </button>
                {
                    HallNavbarLinks.map((link, index) => (
                        <NavLink to={link.link} key={index}>{i18n.language === 'sr' ? link.title : link.engTitle}</NavLink>
                    ))
                }
            </div>
            <button className='hnc-menu-toggle' onClick={toggleMenu}>
                <CiMenuBurger />
            </button>
        </div>
    </div>
  )
}

export default HallNavbar