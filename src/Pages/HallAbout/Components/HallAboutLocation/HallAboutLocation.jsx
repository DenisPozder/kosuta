import React from 'react'
import './hall-about-location.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const HallAboutLocation = () => {

  const { t } = useTranslation('about')

  return (
    <div className="hall-about-location">
        <div className="hal-content">
            <div className="hal-column slide-in from-left">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11330.202590860483!2d20.4376827!3d44.7695782!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a71cd217d1331%3A0x9866e4e49f98eaa!2zS2_FoXV0YQ!5e0!3m2!1sen!2srs!4v1702501548230!5m2!1sen!2srs" width="600" height="450" style={{border: '0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="hal-column slide-in from-right hc-animation">
              <div className='hal-column-content'>
              <h1><span>{t('alTitle1')}</span><span>{t('alTitle2')}</span></h1>
                <p>{t('alDesc')}</p>
                <Link target='_blank' to={"https://www.google.com/maps/place/Ko%C5%A1uta/@44.7695782,20.4376827,15z/data=!4m2!3m1!1s0x0:0x9866e4e49f98eaa?sa=X&ved=2ahUKEwi4kfyQqo2DAxX1FRAIHfJPAO8Q_BJ6BAgMEAA"}><h3>{t('alBtn')}</h3></Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default HallAboutLocation