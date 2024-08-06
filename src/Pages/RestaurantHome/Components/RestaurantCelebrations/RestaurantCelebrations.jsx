import React, { useEffect, useRef, useState } from 'react'
import './restaurant-celebrations.css'
import LeavesLeft from '../../../../Assets/Restaurant/leavesImg.png'
import TreeLeft from '../../../../Assets/Restaurant/TreeLeft.png'
import restaurantImg1 from '../../../../Assets/Restaurant/restaurantImg2.jpg'
import restaurantImg2 from '../../../../Assets/Restaurant/restaurantImg3.jpg'
import restaurantImg3 from '../../../../Assets/Restaurant/restaurantImg4.jpg'
import restaurantImg4 from '../../../../Assets/Restaurant/restaurantImg5.jpg'
import restaurantImg5 from '../../../../Assets/Restaurant/restaurantImg6.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from 'react-i18next'

const ResCelebrationsImg = [
    {
        id: 1,
        image: restaurantImg1
    },
    {
        id: 2,
        image: restaurantImg2
    },
    {
        id: 3,
        image: restaurantImg3
    },
    {
        id: 4,
        image: restaurantImg4
    },
    {
        id: 5,
        image: restaurantImg5
    },
]

const RestaurantCelebrations = () => {

    const { t } = useTranslation('restaurantHome')
    const [ currentSlide, setCurrentSlide ] = useState(0)
    const lengthCel = ResCelebrationsImg.length
    const timeoutCel = useRef(null)
  
    useEffect(() => {
        const nextSlide = () => {
            setTimeout(() => {
                setCurrentSlide(currentSlide => (currentSlide === lengthCel - 1 ? 0 : currentSlide + 1))
            })
            timeoutCel.currentSlide = setTimeout(nextSlide, 6000)
        }
  
        timeoutCel.currentSlide = setTimeout(nextSlide, 6000)
  
        return function() {
            if(timeoutCel.currentSlide) {
                clearTimeout(timeoutCel.currentSlide)
            }
        }
    },[currentSlide, lengthCel])
  
    if(!Array.isArray(ResCelebrationsImg) || ResCelebrationsImg.length <= 0) {
        return null
    }

  return (
    <div className="restaurant-celebrations">
        <img src={TreeLeft} alt="Dekorativna slika" className='rc-tree-left parallax fade-in' data-speedx="0.009" data-speedy="0.01" data-speedz="0" data-rotation="0" />
        <img src={LeavesLeft} alt="Dekorativna slika" className='rc-leaves-img' />
        <div className="restaurant-celebrations-content">
            <div className="rcc-column">
                <h1 className='slide-in from-left'>{t('rcTitle')}</h1>
                <h3 className='slide-in from-left'>{t('rcDesc')}</h3>
            </div>
            <div className="rcc-column">
                <div className="rcc-slider slide-in from-right">
                    {
                        ResCelebrationsImg.map((celebrations, index) => (
                            <div className="rcc-slider-content" key={index}>
                                {
                                    index === currentSlide && (
                                        <div className="rcc-slider-card">
                                            <LazyLoadImage src={celebrations.image} alt="" />
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default RestaurantCelebrations