import React from 'react'
import './hall-layout-left.css'
import gameroomImg from '../../../../Assets/Hall/gameroom.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from 'react-i18next'

const HallLayoutLeft = () => {

  const { t } = useTranslation('about')

  return (
    <div className="hall-layout-left">
        <div className="hall-layout-left-content">
            <div className="hall-layout-left-column slide-in from-left">
            <LazyLoadImage src={gameroomImg} alt="Igraonica" />
            </div>
            <div className="hall-layout-left-column slide-in from-right hc-animation">
              <div className="hllc-content">
              <h1><span>{t('allTitle1')}</span><span>{t('allTitle2')}</span></h1>
                <p>{t('allDesc')}</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default HallLayoutLeft