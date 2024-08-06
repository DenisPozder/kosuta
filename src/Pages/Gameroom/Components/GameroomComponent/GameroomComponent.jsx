import React from 'react'
import './gameroom-component.css'
import GameroomImg from '../../../../Assets/Hall/gameroom.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from 'react-i18next'

const GameroomComponent = () => {

  const { t } = useTranslation('gameroom')

  return (
    <div className="gameroom-component">
        <div className="grc-content">
            <div className="grc-column slide-in from-left">
                <h3>{t('gcDesc')}</h3>
            </div>
            <div className="grc-column slide-in from-right">
                <LazyLoadImage src={GameroomImg} alt="Slika igraonice" />
            </div>
        </div>
    </div>
  )
}

export default GameroomComponent