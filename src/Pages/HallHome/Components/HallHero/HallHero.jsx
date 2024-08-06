import React, { useEffect, useRef, useState } from 'react'
import './hall-hero.css'
import {Link} from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";
import bigHall from '../../../../Assets/Hall/grande60.jpg'
import mediumHall from '../../../../Assets/Hall/svecana2.jpg'
import smallHall from '../../../../Assets/Hall/kamin13.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from 'react-i18next';

const hallImages = [
  {
    image: bigHall
  },
  {
    image: mediumHall
  },
  {
    image: smallHall
  },
]

const HallHero = () => {

      /*----- Intersection Observer -----*/
      useEffect(() => {
        const faders = document.querySelectorAll(".fade-in");
        const sliders = document.querySelectorAll(".slide-in");
    
        const appearOptions = {
          threshold: 0,
          rootMargin: "0px 0px -200px 0px",
        };
    
        const appearOnScroll = new IntersectionObserver(function (
          entries,
          appearOnScroll
        ) {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            } else {
              entry.target.classList.add("appear");
              appearOnScroll.unobserve(entry.target);
            }
          });
        },
        appearOptions);
    
        faders.forEach((fader) => {
          appearOnScroll.observe(fader);
        });
    
        sliders.forEach((slider) => {
          appearOnScroll.observe(slider);
        });
      }, []);

  const { t } = useTranslation('hallHome')
  const [ current, setCurrent ] = useState(0)
  const length = hallImages.length
  const timeout = useRef(null)

  useEffect(() => {
      const nextSlide = () => {
          setTimeout(() => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
          })
          timeout.current = setTimeout(nextSlide, 6000)
      }

      timeout.current = setTimeout(nextSlide, 6000)

      return function() {
          if(timeout.current) {
              clearTimeout(timeout.current)
          }
      }
  },[current, length])

  if(!Array.isArray(hallImages) || hallImages.length <= 0) {
      return null
  }

  return (
    <div className='hall-hero'>
      <div className="hh-image-slider">
        {
          hallImages.map((image, index) => (
            <div className='hh-slider' key={index}>
              {
                index === current && (
                  <div className="hh-slider-card">
                   <img src={image.image} className="hh-slider-blocks" />
                  </div>
                )
              }
            </div>
          ))
        }
      </div>
      <div className="hh-overlay"></div>
      <div className="hh-content">
        <div className="hh-content-text">
          <h1 className='hh-title'><span>{t('hhTitle1')}</span><span>{t('hhTitle2')}</span></h1>
          <h3 className='hh-desc'>{t('hhDesc')}</h3>
          <Link to='/sale'><h3>{t('hhBtn')}</h3><FaAngleRight /></Link>
        </div>
      </div>
    </div>
  )
}

export default HallHero