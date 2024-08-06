import React, { useEffect, useState } from 'react'
import './all-halls-tabs.css'
import AllHallsSlider from '../AllHallsSlider/AllHallsSlider'
import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'
import kamin1Img from '../../../../Assets/Hall/kamin4.jpg'
import kamin2Img from '../../../../Assets/Hall/kamin17.jpg'
import kamin3Img from '../../../../Assets/Hall/kamin26.jpg'
import kamin4Img from '../../../../Assets/Hall/kamin30.jpg'
import kamin5Img from '../../../../Assets/Hall/kamin35.jpg'
import kamin6Img from '../../../../Assets/Hall/kamin39.jpg'
import kamin7Img from '../../../../Assets/Hall/kamin47.jpg'
import kamin8Img from '../../../../Assets/Hall/kamin48.jpg'
import kamin9Img from '../../../../Assets/Hall/kamin50.jpg'
import svecana1Img from '../../../../Assets/Hall/svecana2.jpg'
import svecana2Img from '../../../../Assets/Hall/svecana10.jpg'
import svecana3Img from '../../../../Assets/Hall/svecana12.jpg'
import svecana4Img from '../../../../Assets/Hall/svecana20.jpg'
import svecana5Img from '../../../../Assets/Hall/svecana29.jpg'
import svecana6Img from '../../../../Assets/Hall/svecana35.jpg'
import svecana7Img from '../../../../Assets/Hall/svecana42.jpg'
import svecana8Img from '../../../../Assets/Hall/svecana46.jpg'
import svecana9Img from '../../../../Assets/Hall/svecana61.jpg'
import gardenImg1 from '../../../../Assets/Restaurant/restaurantGarden1.jpg'
import gardenImg2 from '../../../../Assets/Restaurant/restaurantGarden2.jpg'
import gardenImg3 from '../../../../Assets/Restaurant/restaurantGarden3.jpg'
import gardenImg4 from '../../../../Assets/Restaurant/restaurantGarden4.jpg'
import gardenImg5 from '../../../../Assets/Restaurant/restaurantGarden5.jpg'
import gardenImg6 from '../../../../Assets/Restaurant/restaurantGarden6.jpg'
import gardenImg7 from '../../../../Assets/Restaurant/restaurantImg7.jpg'
import gardenImg8 from '../../../../Assets/Restaurant/restaurantImg14.jpg'
import gardenImg9 from '../../../../Assets/Restaurant/restaurantImg8.jpg'
import { useTranslation } from 'react-i18next'
import grande1 from '../../../../Assets/Hall/grande3.jpg'
import grande2 from '../../../../Assets/Hall/grande35.jpg'
import grande3 from '../../../../Assets/Hall/grande50.jpg'
import grande4 from '../../../../Assets/Hall/grande53.jpg'
import grande5 from '../../../../Assets/Hall/grande55.jpg'
import grande6 from '../../../../Assets/Hall/grande59.jpg'
import grande7 from '../../../../Assets/Hall/grande66.jpg'
import grande8 from '../../../../Assets/Hall/grande94.jpg'
import grande9 from '../../../../Assets/Hall/grande111.jpg'

const AllHallsData = [
    {
        title: "velika sala",
        engTitle: "big hall",
        desc: "Sala 'Grande' pruža elegantan prostor koji sa svojim raskošnim enterijerom ukrašenim toplim tonovima i prirodnim dekoracijama, dvorana stvara gostoljubivu atmosferu za različita prilike, od venčanja do korporativnik okupljanja.",
        engDesc: "The 'Grande' Hall provides an elegant space. With its luxurious interior decorated with warm tones and natural decorations, the hall creates a hospitable atmosphere for different occasions, from weddings to corporate gatherings.",
        category: "grande",
        images: [
            {
                image: {
                    img: grande1
                }
            },
            {
                image: {
                    img: grande2
                }
            },
            {
                image: {
                    img: grande3
                }
            },
            {
                image: {
                    img: grande4
                }
            },
            {
                image: {
                    img: grande5
                }
            },
            {
                image: {
                    img: grande6
                }
            },
            {
                image: {
                    img: grande7
                }
            },
            {
                image: {
                    img: grande8
                }
            },
            {
                image: {
                    img: grande9
                }
            },
        ]
    },
    {
        title: "svečana sala",
        engTitle: "the ceremonial hall",
        desc: "Svečana sala pruža ugodan prostor koji sa svojim raskošnim enterijerom i prirodnim dekoracijama pruža prikladno okruženje za sve vrste okupljanja sa ograničenim brojem gostiju.",
        engDesc: "The ceremonial hall provides a pleasant space. With its luxurious interior and floor decorations provides a suitable environment for all types of gatherings with a limited number of guests.",
        category: "svecana",
        images: [
            {
                image: {
                    img: svecana1Img
                }
            },
            {
                image: {
                    img: svecana2Img
                }
            },
            {
                image: {
                    img: svecana3Img
                }
            },
            {
                image: {
                    img: svecana4Img
                }
            },
            {
                image: {
                    img: svecana5Img
                }
            },
            {
                image: {
                    img: svecana6Img
                }
            },
            {
                image: {
                    img: svecana7Img
                }
            },
            {
                image: {
                    img: svecana8Img
                }
            },
            {
                image: {
                    img: svecana9Img
                }
            },
        ]
    },
    {
        title: "kamin sala",
        engTitle: "fireplace hall",
        desc: "Kamin sala, naš dragulj za proslave, pruža jedinstveno iskustvo u srcu naše destinacije. Sa toplinom kamina, modernom opremom i udobnim nameštajem, stvaramo nezaboravne trenutke za različite događaje. Vaši specijalni momenti su kod nas u sigurnim rukama.",
        engDesc: "Fireplace Hall, our celebratory gem, provides a unique experience in the heart of our haven. With the warmth of the fireplace, modern equipment and comfortable furniture, we create unforgettable moments for all events. Your special moments are in safe hands with us.",
        category: "kamin",
        images: [
            {
                image: {
                    img: kamin1Img
                }
            },
            {
                image: {
                    img: kamin2Img
                }
            },
            {
                image: {
                    img: kamin3Img
                }
            },
            {
                image: {
                    img: kamin4Img
                }
            },
            {
                image: {
                    img: kamin5Img
                }
            },
            {
                image: {
                    img: kamin6Img
                }
            },
            {
                image: {
                    img: kamin7Img
                }
            },
            {
                image: {
                    img: kamin8Img
                }
            },
            {
                image: {
                    img: kamin9Img
                }
            },
        ]
    },
    {
        title: "bašta",
        engTitle: "garden",
        desc: "Naša prelepa bašta je dragulj među destinacijama za proslave, smeštena u sklopu restorana s kapacitetom od 200 mesta. Ova očaravajuća oaza je otvorena od maja do septembra, pružajući gostima jedinstvenu priliku da svoje posebne trenutke dele pod vedrim nebom. Uz zelenilo drveća i miris cveća, ova prostrana bašta stvara idiličan ambijent za svadbe, rođendane ili korporativne događaje. Uživajte u svežem vazduhu i prijatnom ambijentu dok obeležavate važne trenutke u životu.",
        engDesc: "Our beautiful garden is a jewel among celebration destinations, located within the restaurant with a capacity of 200 seats. This enchanting oasis is open from May to September, offering guests a unique opportunity to share their special moments under the clear sky. With the greenery of trees and the fragrance of flowers, this spacious garden creates an ideal setting for weddings, birthdays or corporate events. Enjoy the fresh air and pleasant ambience while creating memories for life.",
        category: "basta",
        images: [
            {
                image: {
                    img: gardenImg1
                }
            },
            {
                image: {
                    img: gardenImg2
                }
            },
            {
                image: {
                    img: gardenImg3
                }
            },
            {
                image: {
                    img: gardenImg4
                }
            },
            {
                image: {
                    img: gardenImg5
                }
            },
            {
                image: {
                    img: gardenImg6
                }
            },
            {
                image: {
                    img: gardenImg7
                }
            },
            {
                image: {
                    img: gardenImg8
                }
            },
            {
                image: {
                    img: gardenImg9
                }
            },
        ]
    }
]

const TabButton = ({title, engTitle, isActive, handleSetButton, category}) => {
    const { i18n } = useTranslation('')
    return (
        <button className={`tab-button ${isActive ? "active" : ""}`} onClick={() => handleSetButton(category)}>
            <h3>{i18n.language === 'sr' ? title : engTitle}</h3>
        </button>
    )
}

const AllHallsTabs = () => {

    const { t, i18n } = useTranslation('allHalls')
    const [ category, setCategory ] = useState('grande')
    const [ content, setContent ] = useState([])

    useEffect(() => {
        setContent(AllHallsData.filter(data => data.category === category))
    },[category])

        /*----- Intersection Observer -----*/
useEffect(() => {

    const faders = document.querySelectorAll('.fade-in')
    const sliders = document.querySelectorAll('.slide-in')
  
    const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -200px 0px"
    }
  
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
      entries.forEach(entry => {
        if(!entry.isIntersecting) {
          return;
        }else {
          entry.target.classList.add('appear')
          appearOnScroll.unobserve(entry.target)
        }
      })
    }, appearOptions)
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader)
    })
  
    sliders.forEach(slider => {
      appearOnScroll.observe(slider)
    })
  
  },[content])

  return (
    <div className="all-halls-tabs">
        <div className="aht-tabs fade-in">
            <TabButton category={'grande'} engTitle={'200 - 400 guests'} title={'200 - 400 gostiju'} handleSetButton={setCategory} isActive={category === 'grande'} />
            <TabButton category={'svecana'} engTitle={'100 - 170 guests'} title={'100 - 170 gostiju'} handleSetButton={setCategory} isActive={category === 'svecana'} />
            <TabButton category={'kamin'} engTitle={'up to 80 guests'} title={'do 80 gostiju'} handleSetButton={setCategory} isActive={category === 'kamin'} />
            <TabButton category={'basta'} engTitle={'200 guests (garden)'} title={'200 gostiju (bašta)'} handleSetButton={setCategory} isActive={category === 'basta'} />
        </div>
        <div className="aht-wrap">
            <div className="aht-content">
            {
                content.map((item, index) => (
                    <div key={`${category}-${index}`}>
                        <div className="aht-text">
                            <h1 className='slide-in from-top'>{i18n.language === 'sr' ? item.title : item.engTitle}</h1>
                            <p className='slide-in from-bottom'>{i18n.language === 'sr' ? item.desc : item.engDesc}</p>
                        </div>
                        <AllHallsSlider images={item.images} />
                        <div className="aht-button-wrap slide-in from-bottom">
                            <Link className='aht-button' to={'/rezervacije'}><h3>{t('ahtBtn')}</h3><FaChevronRight /></Link>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default AllHallsTabs