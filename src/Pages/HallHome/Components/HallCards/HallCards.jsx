import React, { useEffect, useRef, useState } from 'react';
import gardenImg from '../../../../Assets/Restaurant/restaurantGarden1.jpg';
import gameroomImg from '../../../../Assets/Hall/gameroom.jpg'
import parkingImg from '../../../../Assets/Hall/parking.jpg'
import './hall-cards.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from 'react-i18next';

const CardsData = [
    {
        id: 1,
        firstTitle: "Košuta",
        firstEngTitle: "KOŠUTA",
        secondTitle: "Garden",
        secondEngTitle: "GARDEN",
        firstDesc: "MAJ - SEPTEMBAR",
        firstEngDesc: "MAY - SEPTEMBER",
        secondDesc: "KAPACITET: 200",
        secondEngDesc: "CAPACITY: 200",
        title: "Košuta Garden",
        engTitle: "KOŠUTA GARDEN",
        image: gardenImg
    },
    {
        id: 2,
        firstTitle: "Igralište",
        firstEngTitle: "CHILDREN'S",
        secondEngTitle: "PLAYGROUND",
        secondTitle: "za decu",
        // firstDesc: "MAJ - SEPTEMBAR",
        // firstEngDesc: "",
        // secondDesc: "KAPACITET: 200",
        // secondEngDesc: "",
        title: "Igralište za decu",
        engTitle: "CHILDREN'S PLAYGROUND",
        image: gameroomImg
    },
    {
        id: 3,
        firstTitle: "50+ parking",
        firstEngTitle: "50+ PARKING",
        secondTitle: "mesta",
        secondEngTitle: "SLOTS",
        // firstDesc: "MAJ - SEPTEMBAR",
        // firstEngDesc: "",
        secondDesc: "KAPACITET: 50+",
        secondEngDesc: "CAPACITY: 50+",
        title: "50+ parking mesta",
        engTitle: "50+ PARKING SLOTS",
        image: parkingImg
    },
]

const HallCards = () => {
  const { i18n } = useTranslation('')
  const [activeCard, setActiveCard] = useState(0);
  const hallCardsRef = useRef([]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const cardOffsets = hallCardsRef.current.map((card) => card.offsetTop);
    const middleOfViewport = window.innerHeight / 2 + scrollPosition;

    let activeCardIndex = 0;
    for (let i = cardOffsets.length - 1; i >= 0; i--) {
      if (middleOfViewport >= cardOffsets[i]) {
        activeCardIndex = i;
        break;
      }
    }

    setActiveCard(activeCardIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="hall-cards">
      {CardsData.map((_, index) => (
        <div
          key={index}
          ref={(el) => (hallCardsRef.current[index] = el)}
          className={`hall-card ${activeCard === index ? 'active' : 'inactive'}`}
        >
          <LazyLoadImage src={_.image} alt="Slika bašte" />
          <div className="hall-card-text">
            <h1>
              <span>{i18n.language === 'sr' ? _.firstTitle : _.firstEngTitle}</span> <span>{i18n.language === 'sr' ? _.secondTitle : _.secondEngTitle}</span>
            </h1>
            {
              i18n.language === 'sr' ? (
                _.firstDesc && (
                  <p className="hct-may">{_.firstDesc}</p>
              )
              ) : (
                _.firstEngDesc && (
                  <p className='hct-may'>{_.firstEngDesc}</p>
                )
              )
            }
            <p className="hct-cap">{i18n.language === 'sr' ? _.secondDesc : _.secondEngDesc}</p>
          </div>
          <div className="hct-main"><h1>{i18n.language === 'sr' ? _.title : _.engTitle}</h1></div>
          <div className="hct-overlay"></div>
        </div>
      ))}
    </div>
  );
};

export default HallCards;