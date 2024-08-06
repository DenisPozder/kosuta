import React, { useState } from 'react'
import HallNavbar from '../HallNavbar/HallNavbar'
import HallFooter from '../HallFooter/HallFooter'
import { IoFastFood } from "react-icons/io5";
import './hall-layout.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../Components/LanguageSwitcher/LanguageSwitcher';

const HallLayout = ({children}) => {

  const { i18n } = useTranslation('')
  const [ showLanguageSwitcher, setShowLanguageSwitcher ] = useState(false)

  const toggleLanguageSwitcher = () => {
    setShowLanguageSwitcher(!showLanguageSwitcher)
  }

  return (
    <div>
        <HallNavbar />
        {children}
        <HallFooter />
        <Link to='/restoran/početna' className="hl-restaurant">
          <IoFastFood />
          <p>Restoran</p>
        </Link>
        <button className='toggle-language' onClick={toggleLanguageSwitcher}>{i18n.language === 'sr' ? 'SR' : 'EN'}</button>
        {
          showLanguageSwitcher && (
            <LanguageSwitcher isLandingPage={false} />
          )
        }
    </div>
  )
}

export default HallLayout