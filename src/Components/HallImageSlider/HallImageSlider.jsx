import React, { useEffect, useRef, useState } from 'react'
import './hall-image-slider.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import HallImageSliderCard from './HallImageSliderCard/HallImageSliderCard'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const HallImageSlider = ({ decoration1, decoration2, slides }) => {

    const [ current, setCurrent ] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(nextSlide, 8000)

        return function() {
            if(timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    },[current, length])

    const nextSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

  return (
    <div className="hall-image-slider">
        <div className="his-overlay"></div>
        <div className="his-decoration1">
            <LazyLoadImage src={decoration1} alt="Dekorativna slika" />
        </div>
        <div className="his-decoration2">
            <LazyLoadImage src={decoration2} alt="Dekorativna slika" />
        </div>
        <div className="his-wrap">
            <button className='his-btn his-prev' onClick={prevSlide}><AiOutlineLeft /></button>
            {
                slides.map((slide, index) => (
                    <HallImageSliderCard slide={slide} key={index} index={index} current={current} />
                ))
            }
            <button className='his-btn his-next' onClick={nextSlide}><AiOutlineRight /></button>
        </div>
    </div>
  )
}

export default HallImageSlider