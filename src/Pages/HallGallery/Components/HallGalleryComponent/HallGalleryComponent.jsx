import React, { useEffect, useState } from 'react'
import './hall-gallery-component.css'
import { HallGalleryData } from '../../../../HallData/HallGalleryData'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from 'react-i18next'

const HGCButton = ({ title, engTitle, isActive, handleGalleryButton, category }) => {
  const { i18n } = useTranslation('')
    return (
        <button className={`hgc-btn ${isActive ? "active" : ""}`} onClick={() => handleGalleryButton(category)}>{i18n.language === 'sr' ? title : engTitle}</button>
    )
}

const HallGalleryComponent = () => {
    const { i18n } = useTranslation('')
    const [ category, setCategory ] = useState('sve')
    const [ gallery, setGallery ] = useState([])

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
        }, [])

    useEffect(() => {
        const options = {
          root: null,
          rootMargin: "0px",
          threshold: 0.5
        }
    
        const handleIntersection = (entries, observer) => {
          entries.forEach((entry) => {
            if(entry.isIntersecting) {
              entry.target.classList.add('in-viewport')
              observer.unobserve(entry.target);
            }else {
              entry.target.classList.remove('in-viewport')
            }
          })
        }
    
        const observer = new IntersectionObserver(handleIntersection, options)
        const images = document.querySelectorAll('.hgc-gallery-image')
    
        images.forEach((image) => {
          observer.observe(image)
        })
    
        return () => {
          observer.disconnect()
        }
      },[gallery])

    useEffect(() => {
        category === 'sve' ? setGallery(HallGalleryData) : setGallery(HallGalleryData.filter(image => image.category === category))
      },[category])

  return (
    <div className="hall-gallery-component">
        <h1 className='hgc-title'>{i18n.language === 'sr' ? 'Dobrodošli u našu galeriju' : 'Welcome to our gallery'}</h1>
        <div className="hall-gallery-header">
            <HGCButton title={"sve"} engTitle={'all'} category={"sve"} handleGalleryButton={setCategory} isActive={category === "sve"} />
            <HGCButton title={"velika sala"} engTitle={'big hall'} category={"grande"} handleGalleryButton={setCategory} isActive={category === "grande"} />
            <HGCButton title={"svečana"} engTitle={'ceremonial'} category={"svečana"} handleGalleryButton={setCategory} isActive={category === "svečana"} />
            <HGCButton title={"kamin"} engTitle={'fireplace'} category={"kamin"} handleGalleryButton={setCategory} isActive={category === "kamin"} />
        </div>
        <div className="hgc-content">
            {
                gallery.map((image, index) => (
                    <div className='hgc-gallery-image in-viewport' key={`${category}-${index}`}>
                        <LazyLoadImage src={image.image} alt={`Slika ${index + 1}`} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default HallGalleryComponent