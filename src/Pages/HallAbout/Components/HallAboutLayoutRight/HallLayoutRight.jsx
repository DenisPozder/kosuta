import React from 'react'
import './hall-layout-right.css'
import parking from '../../../../Assets/Hall/parking.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from 'react-i18next'

const HallLayoutRight = () => {

  const { t } = useTranslation('about')

  return (
    <div className="hall-layout-right">
        <div className="hlr-content">
            <div className="hlr-column slide-in from-left hlr-animation">
              <div className="hlr-column-content">
              <h1><span>{t('alrTitle1')}</span><span>{t('alrTitle2')}</span></h1>
                <p>{t('alrDesc')}</p>
              </div>
            </div>
            <div className="hlr-column slide-in from-right">
                <LazyLoadImage src={parking} alt="Slika našeg parkinga" />
            </div>
        </div>
    </div>
  )
}

export default HallLayoutRight