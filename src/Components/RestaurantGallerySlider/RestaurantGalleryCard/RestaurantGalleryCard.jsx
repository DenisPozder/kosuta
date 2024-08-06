import React from 'react'
import './restaurant-gallery-card.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const RestaurantGalleryCard = ({ image }) => {
  return (
    <div className="restaurant-gallery-card">
        <div className="rgc-inner">
            <LazyLoadImage src={image.image} alt="Slika u galeriji" />
        </div>
    </div>
  )
}

export default RestaurantGalleryCard