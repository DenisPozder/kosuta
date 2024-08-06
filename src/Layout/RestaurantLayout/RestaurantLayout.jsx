import React, { useState } from 'react'
import RestaurantNavbar from '../RestaurantNavbar/RestaurantNavbar'
import RestaurantFooter from '../RestaurantFooter/RestaurantFooter'
import './restaurant-layout.css'
import { Link } from 'react-router-dom'
import { GiPartyFlags } from "react-icons/gi";
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../../Components/LanguageSwitcher/LanguageSwitcher'

const RestaurantLayout = ({ children }) => {

  const { i18n } = useTranslation('')
  const [ showLanguageSwitcher, setShowLanguageSwitcher ] = useState(false)

  const toggleLanguageSwitcher = () => {
    setShowLanguageSwitcher(!showLanguageSwitcher)
  }

  return (
    <div>
        <RestaurantNavbar />
        {children}
        <RestaurantFooter />
        <Link to='/početna' className="rl-celebrations">
          <GiPartyFlags />
          <p>{i18n.language === 'sr' ? 'Proslave' : 'Celebrations'}</p>
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

export default RestaurantLayout