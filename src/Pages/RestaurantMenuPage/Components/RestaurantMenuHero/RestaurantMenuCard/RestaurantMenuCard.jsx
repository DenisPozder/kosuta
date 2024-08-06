import React from 'react'
import './restaurant-menu-card.css'
import topLeaves from '../../../../../Assets/Landing/topLeaves.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from 'react-i18next'

const RestaurantMenuCard = ({ slide, index, current }) => {

    const { i18n } = useTranslation('')

  return (
    <div className="restaurant-menu-card">
        {
            index === current && (
                <div className="rmc-slide">
                    <LazyLoadImage src={topLeaves} alt="Dekorativna slika" className='rs-top-leaves' />
                    <LazyLoadImage src={slide.fullImage} alt={`Slika ${index + 1}`} className='rs-full-image' />
                    <div className="rmcs-radial-overlay"></div>
                    <div className="rmcs-overlay"></div>
                    <div className="rmcs-overlay2"></div>
                    <div className="rmcs-content">
                        <div className="rmcs-wrap">
                            <div className="rmcs-inner">
                                <div className="rmcs-left">
                                    <div className="rmcs-items">
                                    <h1>{i18n.language === 'sr' ? slide.title : slide.engTitle}</h1>
                                    <h3>{i18n.language === 'sr' ? slide.desc : slide.engDesc}</h3>
                                    </div>
                                </div>
                                <div className="rmcs-right">
                                    <LazyLoadImage src={slide.image} alt={slide.title} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default RestaurantMenuCard