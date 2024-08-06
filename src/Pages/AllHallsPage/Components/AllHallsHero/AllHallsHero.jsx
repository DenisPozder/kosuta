import React, { useEffect } from 'react'
import HallImg from '../../../../Assets/Hall/kamin4.jpg'
import { Link } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";
import './all-halls-hero.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from 'react-i18next';

const AllHallsHero = () => {

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

  const { t } = useTranslation('allHalls')

  return (
    <div className="all-halls-hero">
        <LazyLoadImage src={HallImg} alt="Slika sale" />
        <div className="ahh-wrap">
            <div className="ahh-content">
                <h1 className='ahh-title'><span className='ahh-span1'>{t('ahhTitle1')}</span><span className='ahh-span2'>{t('ahhTitle2')}</span></h1>
                <p className='ahh-desc'>{t('ahhDesc')}</p>
                <Link className='ahh-btn' to={'/rezervacije'}><h3>{t('ahhBtn')}</h3><FaChevronRight /></Link>
            </div>
        </div>
    </div>
  )
}

export default AllHallsHero