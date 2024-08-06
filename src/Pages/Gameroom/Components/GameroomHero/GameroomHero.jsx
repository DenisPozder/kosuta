import React, { useEffect } from 'react'
import './gameroom-hero.css'
import gamerommImg from '../../../../Assets/gameroomImg.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from 'react-i18next'
import playroomImg from '../../../../Assets/Restaurant/restaurantPlayroom12.jpg'

const GameroomHero = () => {

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

  const { t } = useTranslation('gameroom')

  return (
    <div className="gameroom-hero">
      <LazyLoadImage src={gamerommImg} alt="Dekorativna slika" className='gh-img parallax' />
      <div className="gh-main-overlay"></div>
        <LazyLoadImage src={playroomImg} alt='Slika igrališta' className='gh-main-img' />
        <div className="gh-content">
            <div className="ghc-text">
                <h1>{t('gTitle')}</h1>
                <h3>{t('gDesc')}</h3>
            </div>
        </div>
    </div>
  )
}

export default GameroomHero