import React, { useEffect } from 'react'
import './hall-menu-hero.css'
import menuImg from '../../../../Assets/Restaurant/restaurantMenu.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from 'react-i18next'

const HallMenuHero = () => {

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

  const { t } = useTranslation('hallMenu')
  return (
    <div className="hall-menu-hero">
        <LazyLoadImage src={menuImg} alt="Slika šume" />
        <div className="hmh-overlay"></div>
        <div className="hmh-wrap">
            <div className="hmh-content">
                <h1 className='hmh-title'><span className='hmh-span1'>{t("hmhTitle1")}</span><span className='hmh-span2'>{t("hmhTitle2")}</span></h1>
                <p className='hmh-desc'>{t("hmhDesc")}</p>
                <div className='hmh-btn'><h3>{t("hmhBtn")}</h3></div>
            </div>
        </div>
    </div>
  )
}

export default HallMenuHero