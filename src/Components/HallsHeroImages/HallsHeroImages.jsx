import React, { useEffect, useRef, useState } from 'react'
import HallsHeroCard from './HallsHeroCard/HallsHeroCard'
import './halls-hero-images.css'
import topLeaves from '../../Assets/Hall/topLeaves.png'
import leftTree from '../../Assets/Hall/rightLeftTree.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const HallsHeroImages = ({slides}) => {

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

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

  return (
    <div className="halls-hero-images">
        <LazyLoadImage className='hhi-top-leaves parallax' data-speedx="0.03" data-speedy="0.03" data-speedz="0.06" data-rotation="0.06" src={topLeaves} alt="Dekorativna slika" />
        <div className="hhi-top-leaves-overlay"></div>
        <LazyLoadImage src={leftTree} className='hhi-left-tree parallax' data-speedx="0.01" data-speedy="0.01" data-speedz="0.04" data-rotation="0.04" alt="Dekorativna slika" />
        <div className="hhi-left-tree-overlay"></div>
        <div className="hhi-bottom-overlay"></div>
        <div className="hhi-content">
            <div className="hhi-wrap">
                {
                    slides.map((slide, index) => (
                        <HallsHeroCard key={index} slide={slide} index={index} current={current} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default HallsHeroImages