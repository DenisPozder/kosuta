import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import './all-halls-slider.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const AllHallsSlider = ({images}) => {

    const [ currentSlide, setCurrentSlide ] = useState(0)
    const slideInterval = useRef()

    const prevSlide = () => {
        startSlideTimer()
        const index = currentSlide > 0 ? currentSlide - 1 : images.length - 1
        setCurrentSlide(index)
    }

    const nextSlide = () => {
        startSlideTimer()
        const index = currentSlide < images.length - 1 ? currentSlide + 1 : 0
        setCurrentSlide(index)
    }

    const startSlideTimer = () => {
        stopSlideTimer()
        slideInterval.current = setInterval(() => {
            setCurrentSlide(currentSlide => currentSlide < images.length - 1 ? currentSlide + 1 : 0)
        }, 6000)
    }

    const stopSlideTimer = () => {
        if(slideInterval.current) {
            clearInterval(slideInterval.current)
        }
    }

    const switchIndex = (index) => {
        startSlideTimer()
        setCurrentSlide(index)
    }

    useEffect(() => {
        startSlideTimer()

        return () => stopSlideTimer
    },[])

  return (
    <>
    <div className="all-halls-slider fade-in">
        <div className="all-halls-slider-wrap">
            <button className='ahsw-btn ahsw-prev' onClick={prevSlide}><AiOutlineLeft /></button>
            <div className={`all-halls-slider-inner`} style={{ transform: `translateX(${-currentSlide * 100}%)`}}>
                <div className="all-halls-slider-item" onMouseEnter={stopSlideTimer} onMouseLeave={startSlideTimer}>
                    {
                        images.map((image, index) => (
                            <LazyLoadImage src={image.image.img} key={index} alt={`Slajder slika ${index + 1}`} />
                        ))
                    }
                </div>
            </div>
            <button className='ahsw-btn ahsw-next' onClick={nextSlide}><AiOutlineRight /></button>
        </div>
    </div>
    <div className="all-halls-indicators">
        {
            images.map((_, index) => (
                <button key={index} className={`ahi-item ${currentSlide === index ? "active" : ""}`} onClick={() => switchIndex(index)}></button>
            ))
        }
    </div>
    </>
  )
}

export default AllHallsSlider