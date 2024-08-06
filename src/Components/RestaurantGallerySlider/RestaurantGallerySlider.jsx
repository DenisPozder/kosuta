import React from 'react'
import './restaurant-gallery-slider.css'
import { Link } from 'react-router-dom'
import RGSlider from './RGSlider/RGSlider'
import { useTranslation } from 'react-i18next'

const RestaurantGallerySlider = ({ data }) => {

  const { t } = useTranslation('restaurantHome')

  const getRandomImages = (array, size) => {
    const shuffled = array.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, size)
  }

  // Get random 10 images from data
  const randomImages = getRandomImages(data, 10)

  return (
    <div className="restaurant-gallery-slider">
        <div className="rgs-content">
            <h1 className='slide-in from-top'>{t('rgsTitle')}</h1>
            <RGSlider data={randomImages} />
            <Link to={`/restoran/galerija`} className='rgs-btn slide-in from-bottom'>{t('rgsBtn')}</Link>
        </div>
    </div>
  )
}

export default RestaurantGallerySlider