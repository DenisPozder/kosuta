import React from 'react'
import './halls-hero-card.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const HallsHeroCard = ({ slide, index, current }) => {
  return (
    <div className="halls-hero-card">
        {
            index === current && (
                <div className="halls-hero-card-slide">
                    <LazyLoadImage src={slide.image} alt="Slika sale" />
                    <div className="hhcs-overlay"></div>
                    <div className="hhcs-second-overlay"></div>
                </div>
            )
        }
        <div className="hhcs-text-content">
            <div className="hhcs-text">
                <h1>{slide.title}</h1>
                <h3>{slide.desc}</h3>
            </div>
        </div>
    </div>
  )
}

export default HallsHeroCard