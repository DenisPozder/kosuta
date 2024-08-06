import React, { useEffect, useRef, useState } from 'react'
import './restaurant-gameroom.css'
import gameroom from '../../../../Assets/Hall/gameroom.jpg'
import tree2 from '../../../../Assets/Hall/forestTree2.png'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from 'react-i18next'
import restaurantPlayroom1 from '../../../../Assets/Restaurant/restaurantPlayroom12.jpg'
import restaurantPlayroom2 from '../../../../Assets/Restaurant/restaurantPlayroom5.jpg'
import restaurantPlayroom3 from '../../../../Assets/Restaurant/restaurantPlayroom6.jpg'
import restaurantPlayroom4 from '../../../../Assets/Restaurant/restaurantPlayroom1.jpg'
import restaurantPlayroom5 from '../../../../Assets/Restaurant/restaurantPlayroom7.jpg'

const PlayroomImages = [
  {
    id: 1,
    image: restaurantPlayroom1
  },
  {
    id: 2,
    image: restaurantPlayroom2
  },
  {
    id: 3,
    image: restaurantPlayroom3
  },
  {
    id: 4,
    image: restaurantPlayroom4
  },
  {
    id: 5,
    image: restaurantPlayroom5
  },
]

const RestaurantGameroom = () => {

  const { t } = useTranslation('restaurantHome')
  const [ currentSlide, setCurrentSlide ] = useState(0)
  const length = PlayroomImages.length
  const timeout = useRef(null)

  useEffect(() => {
      const nextSlide = () => {
          setTimeout(() => {
              setCurrentSlide(currentSlide => (currentSlide === length - 1 ? 0 : currentSlide + 1))
          })
          timeout.currentSlide = setTimeout(nextSlide, 6000)
      }

      timeout.currentSlide = setTimeout(nextSlide, 6000)

      return function() {
          if(timeout.currentSlide) {
              clearTimeout(timeout.currentSlide)
          }
      }
  },[currentSlide, length])

  if(!Array.isArray(PlayroomImages) || PlayroomImages.length <= 0) {
      return null
  }

  return (
    <div className="restaurant-gameroom">
        <div className="rg-radial-overlay"></div>
        <div className="rg-top-overlay"></div>
        <div className="rg-bottom-overlay"></div>
        <img src={tree2} alt="Dekorativna slika" className='rg-tree2 parallax fade-in' data-speedx="0.03" data-speedy="0.024" data-speedz="0.05" data-rotation="0.02" />
        <div className="rg-tree1-overlay"></div>
        <div className="rg-tree3-overlay"></div>
        <div className="rg-content">
          <div className="rg-slider">
            {
              PlayroomImages.map((image, index) => (
                <div className='rg-slider-content' key={index}>
                  {
                    index === currentSlide && (
                      <div className='rg-slider-card'>
                        <LazyLoadImage src={image.image} alt={index + 1} />
                      </div>
                    )
                  }
                </div>
              ))
            }
          </div>
            <div className="rgc-wrap">
                <div className="rgcw-content">
                    <h1 className='slide-in from-top'>{t('rgTitle')}</h1>
                    <h3 className='rgcw-h3 fade-in'>{t('rgDesc')}</h3>
                    <Link className='slide-in from-bottom' to='/restoran/igraonica'><h3>{t('rgBtn')}</h3></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RestaurantGameroom