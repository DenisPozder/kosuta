import React from 'react'
import './hall-layout-left.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const HallLayoutLeft = ({ text, image, imageDecoration }) => {
  return (
    <div className='hall-layout-left'>
        <div className="hll-content">
            <div className="hll-column">
                <LazyLoadImage src={image} alt="Slika" />
            </div>
            <LazyLoadImage className='hll-decoration' src={imageDecoration} alt="Dekorativna slika" />
            <div className="hll-column">
                <h3>{text}</h3>
            </div>
        </div>
    </div>
  )
}

export default HallLayoutLeft