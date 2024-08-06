import React, { useEffect } from 'react'
import './hg-slider.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import HeroGalleryCard from '../HeroGalleryCard/HeroGalleryCard'

const HGSlider = ({ data }) => {

    useEffect (() => {
        const carousel = document.querySelector('.hg-slider-component')
        const arrowBtns = document.querySelectorAll('.hg-slider-btn')
        const firstCardWidth = carousel.querySelector('.hero-gallery-card').offsetWidth
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
    <div className="hg-slider-section">
        <button id='left' className='hg-slider-btn hg-slider-prev'><AiOutlineLeft /></button>
        <div className="hg-slider-component">
            {
                data.map((image, index) => (
                    <HeroGalleryCard image={image} key={index} />
                ))
            }
        </div>
        <button id='right' className='hg-slider-btn hg-slider-next'><AiOutlineRight /></button>
    </div>
  )
}

export default HGSlider