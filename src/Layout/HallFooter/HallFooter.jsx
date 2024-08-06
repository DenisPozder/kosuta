import React from 'react'
import './hall-footer.css'
import Logo from '../../Assets/logoDark.svg'
import { Link } from 'react-router-dom'
import { AiFillCopyrightCircle } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'

const getCurrentTime = () => {
  const now = new Date()
  const currentHour = now.getHours()
  const currentMinute = now.getMinutes()
  return currentHour + currentMinute / 60
}

const getCurrentDay = () => {
  const now = new Date()
  return now.getDay()
}

const HallFooter = () => {
  const { t, i18n } = useTranslation('restaurantFooter')
  const openingHour = 10.0
  const closingHour = 22.0
  const days = [
    "Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvratak", "Petak", "Subota"
  ]
  const engDays = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ]
  const currentDay = getCurrentDay()
  const currentTime = getCurrentTime()

  const status = {}

  for(let i = 0; i < 7; i++){
    const isOpen = currentTime >= openingHour && currentTime < closingHour
    status[i] = isOpen ? t('rfOpen') : t('rfClosed')
  }

  return (
    <div className="hall-footer">
      <div className="hf-content">
        <div className="hf-column">
          <Link className="hfc-logo">
            <img src={Logo} alt="Logo restorana" />
          </Link>
          <h3>{t('rfDesc')}</h3>
        </div>
        <div className="hf-column">
          <h1>{t('rfTime')}</h1>
          <div className="hfc-days">
          {
              i18n.language === 'sr' ? (
              days.map((day, index) => (
                <p key={index} className={currentDay === index ? "current-day" : ""}>
                  {day}
                  {currentDay === index && <span>{status[index]}</span>}
                </p>
              ))
              ) : (
                engDays.map((engDay, engIndex) => (
                  <p key={engIndex} className={currentDay === engIndex ? "current-day" : ""}>
                  {engDay}
                  {currentDay === engIndex && <span>{status[engIndex]}</span>}
                </p>
                ))
              )
            }
          </div>
        </div>
        <div className="hf-column">
          <h1>{t('rfRes')}</h1>
          <h3>{t('rfDesc2')}</h3>
          <Link to="tel:+3810665255525">066 5255525</Link>
        </div>
      </div>
      <div className="hf-copyright">
        <h3><AiFillCopyrightCircle /><span>2023</span>
        </h3><h3>Košuta</h3>
      </div>
    </div>
  )
}

export default HallFooter