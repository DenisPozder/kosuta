import React, { useEffect } from 'react'
import './landing-hall.css'
import { Link } from 'react-router-dom'
import hallTable from '../../../../Assets/Landing/hallTable.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from 'react-i18next'
import hallImg from '../../../../Assets/Hall/kamin13.jpg'

const LandingHall = () => {

  const { i18n } = useTranslation('')

  return (
    <Link to="/početna" className="landing-hall">
      <img className='lh-main-img' src={hallImg} alt="Slika sala" />
      <div className="lh-main-overlay"></div>
      <h1 className='lh-text parallax-hall'>Košuta <span>{i18n.language === 'sr' ? 'Proslave' : 'Celebrations'}</span></h1>
      <div className='lh-button-content'>
        <Link className='lh-button' to={'/početna'}><h3>{i18n.language === 'sr' ? 'posetite sale' : 'visit halls'}</h3></Link>
      </div>
      <div className="vignette"></div>
      <div className="lp-top-overlay"></div>
      <div className="lp-bottom-overlay"></div>
    </Link>
  )
}

export default LandingHall