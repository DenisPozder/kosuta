import React from 'react'
import './hall-image-slider-card.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const HallImageSliderCard = ({ slide, index, current }) => {
  return (
    <div className="hall-image-slider-card">
        {
            index === current && (
                <div className="hisc-slide">
                    <LazyLoadImage src={slide.image} alt="Slika u slajderu" />
                    <div className="hisc-text">
                        <h3>{slide.desc}</h3>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default HallImageSliderCard