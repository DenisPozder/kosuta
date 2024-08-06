import React, { useEffect, useRef, useState } from 'react'
import './restaurant-about-hero.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import restaurantImg from '../../../../Assets/Restaurant/restaurantImg32.jpg'
import restaurantMenuImg from '../../../../Assets/Restaurant/restaurantMenu.jpg'
import gameroomImg from '../../../../Assets/Hall/gameroom.jpg'
import restaurantGallery from '../../../../Assets/Restaurant/restaurantGallery.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const RestaurantAboutSlider = [
  {
    title: "Restoran Košuta",
    desc: "Srce Prirode - to je ono što naš restoranski doživljaj čini posebnim. Prostire se u idiličnom okruženju, sa prozračnim interijerom obloženim prirodnim drvetom koje stvara toplu i rustičnu atmosferu. Svetlosne instalacije dodaju notu elegancije, stvarajući idealno okruženje za razne prigode - od romantičnih večera do porodičnih okupljanja ili poslovnih sastanaka.",
    image: restaurantImg,
  },
  {
    title: "Igraonica",
    desc: "Roditelji mogu uživati u opuštenom obroku u restoranu, znajući da su njihovi mališani srećni i zauzeti u susedstvu veselih igara. Naša igraonica postaje omiljeno odredište za porodice koje žele spojiti ukusan obrok sa obezbeđenim prostorom za igru, stvarajući tako savršen spoj gastronomske i dečije radosti.",
    image: gameroomImg,
  },
  {
    title: "Jelovnik",
    desc: "Naši kuvari strastveno kombinuju klasične recepte sa inovativnim pristupom, pružajući vam jedinstveno kulinarsko iskustvo. Ponosni smo na to što svaki sastojak nosi pečat kvaliteta i autentičnosti, stvarajući tako jelovnik koji zadovoljava sva čula. Bilo da ste ljubitelj mesa, ribe ili preferirate biljne delikatese, naš jelovnik je kreiran kako bismo zadovoljili različite ukuse i gastronomske preferencije.",
    image: restaurantMenuImg,
  },
  {
    title: "Galerija našeg restorana",
    desc: "Dobrodošli u virtuelnu galeriju slika restorana Košuta, prostor gde se vizuelna estetika susreće sa gastronomskim čarolijama. Ova galerija pruža uvid u šarm našeg restorana kroz objektiv umetničkih fotografija. Pregledajte kolikciju slika koje beleže toplinu našeg elegantnog interijera, bogatstvo boja na tanjirima, osoblje koje sa osmehom dočekuje goste i jedinstvenu atmosferu koja krasi našu destinaciju.",
    image: restaurantGallery,
  },
]

const RestaurantAboutHero = () => {

  const [ current, setCurrent ] = useState(0)
  const length = RestaurantAboutSlider.length
  const timeout = useRef(null)

  useEffect(() => {
      const nextSlide = () => {
          setTimeout(() => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
          })
          timeout.current = setTimeout(nextSlide, 8000)
      }

      timeout.current = setTimeout(nextSlide, 8000)

      return function() {
          if(timeout.current) {
              clearTimeout(timeout.current)
          }
      }
  },[current, length])

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

  if(!Array.isArray(RestaurantAboutSlider) || RestaurantAboutSlider.length <= 0) {
      return null
  }

  return (
    <div className="restaurant-about-hero">
      <div className="rah-slider">
        <button className='rahs-btn rahs-prev' onClick={prevSlide}><AiOutlineLeft /></button>
        {
          RestaurantAboutSlider.map((slide, index) => (
            <div className="rah-content" key={index}>
              {
                index === current && (
                  <div className="rah-card-wrap">
                    <LazyLoadImage src={slide.image} alt={slide.title} />
                    <div className="rah-card-overlay"></div>
                    <div className="rah-card-content">
                      <div className="rah-card-text">
                        <h1 className='rahc-title'>{slide.title}</h1>
                        <h3 className='rahc-desc'>{slide.desc}</h3>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          ))
        }
        <button className='rahs-btn rahs-next' onClick={nextSlide}><AiOutlineRight /></button>
      </div>
    </div>
  )
}

export default RestaurantAboutHero