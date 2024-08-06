import React, { useEffect } from 'react'
import './hrp-component.css'
import kosutnjakSuma from '../../../../Assets/Hall/kosutnjakSuma.jpg'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from 'react-i18next'

const HRPComponent = () => {

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

  const { t } = useTranslation('hallReservations')

  return (
    <div className="hrp-component">
        <LazyLoadImage src={kosutnjakSuma} alt="Slika šume" />
        <div className="hrp-wrap">
            <div className="hrp-content">
                <h1 className='hrp-title'><span className='hrp-span1'>{t('hrpTitle1')}</span><span className='hrp-span2'>{t('hrpTitle2')}</span></h1>
                <p className='hrp-desc'>{t('hrpDesc')}</p>
                <Link className='hrp-btn' to={'tel:+381 64 012 345'}><h3>{t('hrpBtn')} <span>+381 64 012 345</span></h3></Link>
            </div>
        </div>
    </div>
  )
}

export default HRPComponent