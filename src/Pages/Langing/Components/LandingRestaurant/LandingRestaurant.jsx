import React, { useEffect } from 'react'
import './landing-restaurant.css'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from 'react-i18next'
import restaurantImg from '../../../../Assets/Restaurant/restaurantImg.jpg'

const LandingRestaurant = () => {

    const { i18n } = useTranslation('')

  return (
    <Link to='/restoran/početna' className="landing-restaurant">
        <div className="vignette"></div>
        <div className="lp-top-overlay"></div>
        <div className="lp-bottom-overlay"></div>
        <div className="lr-main-overlay"></div>
        <LazyLoadImage className='lr-main-img' src={restaurantImg} alt="Slika restorana" />
        <h1 className='lr-text parallax'>Košuta <span>{i18n.language === 'sr' ? 'Restoran' : "Restaurant"}</span></h1>
        <div className='lr-button-content'>
            <Link className='lr-button' to={'/restoran/početna'}><h3>{i18n.language === 'sr' ? 'Posetite restoran' : 'Visit restaurant'}</h3></Link>
        </div>
    </Link>
  )
}

export default LandingRestaurant