import React, { useEffect, useRef, useState } from 'react'
import './hst-slider.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const HSTSlider = ({data, autoplayDuration}) => {

    const [ current, setCurrent ] = useState(0)
    const length = data.length
    const timeout = useRef(null)
  
    useEffect(() => {
        const nextSlide = () => {
            setTimeout(() => {
              setCurrent(current => (current === length - 1 ? 0 : current + 1))
            })
            timeout.current = setTimeout(nextSlide, autoplayDuration)
        }
  
        timeout.current = setTimeout(nextSlide, autoplayDuration)
  
        return function() {
            if(timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    },[current, length, autoplayDuration])
  
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

    const handleIndicatorClick = (index) => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }

        setCurrent(index)
    }
  
    if(!Array.isArray(data) || data.length <= 0) {
        return null
    }

  return (
    <>
    <div className="hst-slider-wrap">
        <div className="hst-slider">
            <button className='hst-btn hst-prev' onClick={prevSlide}><AiOutlineLeft /></button>
            {
                data.slice(0, 7).map((slide, index) => (
                    <div className="hst-slider-content" key={index}>
                        {
                            index === current && (
                                <div className="hst-slide-img">
                                    <LazyLoadImage src={slide.image} alt="" />
                                </div>
                            )
                        }
                    </div>
                ))
            }
            <button className='hst-btn hst-next' onClick={nextSlide}><AiOutlineRight /></button>
        </div>
    </div>
    <div className='hst-indicators'>
        {
            data.map((_, index) => (
                <button className={`hst-indicator ${index === current ? 'active' : ''}`} key={index} onClick={() => handleIndicatorClick(index)}></button>
            ))
        }
    </div>
    </>
  )
}

export default HSTSlider