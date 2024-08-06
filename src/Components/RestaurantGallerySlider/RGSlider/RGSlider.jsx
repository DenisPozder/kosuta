import React, { useEffect } from 'react'
import './rg-slider.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import RestaurantGalleryCard from '../RestaurantGalleryCard/RestaurantGalleryCard'

const RGSlider = ({ data }) => {

    useEffect (() => {
        const carousel = document.querySelector('.rg-slider-component')
        const arrowBtns = document.querySelectorAll('.rg-slider-btn')
        const firstCardWidth = carousel.querySelector('.restaurant-gallery-card').offsetWidth
        const carouselChildrens = [...carousel.children] 
    
        arrowBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                carousel.scrollLeft += btn.id === 'left' ? -firstCardWidth : firstCardWidth
        
                if(carousel.scrollLeft === 0) {
                    carousel.scrollLeft += btn.id === 'left' ? carousel.scrollWidth - carousel.offsetWidth : firstCardWidth
                }else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
                    carousel.scrollLeft += btn.id === 'right' ? carousel.scrollLeft = -carouselChildrens : -firstCardWidth
                }
            })
        })
    },[])

  return (
    <div className="rg-slider-section slide-in from-left">
        <button id='left' className='rg-slider-btn rg-slider-prev'><AiOutlineLeft /></button>
        <div className="rg-slider-component">
            {
                data.map((image, index) => (
                    <RestaurantGalleryCard image={image} key={index} />
                ))
            }
        </div>
        <button id='right' className='rg-slider-btn rg-slider-next'><AiOutlineRight /></button>
    </div>
  )
}

export default RGSlider