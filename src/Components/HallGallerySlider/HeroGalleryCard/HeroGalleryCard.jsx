import React from 'react'
import './hero-gallery-card.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const HeroGalleryCard = ({ image }) => {
  return (
    <div className="hero-gallery-card">
        <div className="hgc-inner">
            <LazyLoadImage src={image.image} alt="Slika u galeriji" />
        </div>
    </div>
  )
}

export default HeroGalleryCard