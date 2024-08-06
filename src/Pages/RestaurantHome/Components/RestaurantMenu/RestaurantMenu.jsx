import React, { useEffect, useRef, useState } from 'react'
import './restaurant-menu.css'
import { Link } from 'react-router-dom'
import leavesLeft from '../../../../Assets/Restaurant/leavesImg.png'
import TreeRight from '../../../../Assets/Restaurant/TreeRight.png'
import RMSlider from './RMSlider/RMSlider'
import crackInTheWall from '../../../../Assets/crackInTheWall.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from 'react-i18next'

const RestaurantMenu = () => {

  const { t } = useTranslation('restaurantHome')

  return (
    <div className="restaurant-menu">
      <img src={leavesLeft} alt="Dekorativna slika" className='rm-leaves-img fade-in' />
      <img src={TreeRight} alt="Dekorativna slika" className='rm-tree-right parallax fade-in' data-speedx="0.009" data-speedy="0.01" data-speedz="0" data-rotation="0" />
        <div className="rm-content">
            <div className="rmc-column slide-in from-left">
              <RMSlider />
            </div>
            <div className="rmc-column">
                <h1 className='slide-in from-top'>{t('rmTitle')}</h1>
                <h3 className='rmc-h3 slide-in from-right'>{t('rmDesc')}</h3>
                <Link className='slide-in from-bottom' to='/restoran/jelovnik'><h3>{t('rmBtn')}</h3></Link>
            </div>
        </div>
    </div>
  )
}

export default RestaurantMenu