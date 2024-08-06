import React, { useEffect } from 'react'
import './hall-about-hero.css'
import aboutUsImg from '../../../../Assets/Restaurant/restaurantGarden2.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from 'react-i18next'

const HallAboutHero = () => {

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

  const { t } = useTranslation('about')

  return (
    <div className="hall-about-hero">
        <LazyLoadImage src={aboutUsImg} alt="O nama pozadina" />
        <div className="hah-wrap">
            <div className="hah-content">
                <h1 className='hah-title'><span className='hah-span1'>{t('ahTitle1')}</span><span className='hah-span2'>{t('ahTitle2')}</span></h1>
                <p className='hah-desc1'>{t('ahDesc1')}</p>
                <p className='hah-desc2'>{t('ahDesc2')}</p>
                <div className='hah-btn'>{t('ahBtn')}</div>
            </div>
        </div>
    </div>
  )
}

export default HallAboutHero