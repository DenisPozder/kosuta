import React, { useEffect, useState } from 'react'
import './language-switcher.css'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = ({ isLandingPage }) => {

    const { i18n } = useTranslation()
    const [ showSwitcher, setShowSwitcher ] = useState(false)

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
        setShowSwitcher(false)
    }

    useEffect(() => {
        if(isLandingPage) {
            const timer = setTimeout(() => {
                setShowSwitcher(true)
            }, 1000)

            return () => clearTimeout(timer)
        }else {
            setShowSwitcher(true)
        }
    },[isLandingPage])

  return (
    <div className={`language-switcher ${showSwitcher ? "show" : "hide"}`}>
        <div className="ls-content">
        <button className='ls-btn' onClick={() => changeLanguage('sr')}>{i18n.language === 'sr' ? 'Srpski' : 'Serbian'}</button>
        <button className='ls-btn' onClick={() => changeLanguage('en')}>{i18n.language === 'sr' ? 'English' : 'English'}</button>
        </div>
    </div>
  )
}

export default LanguageSwitcher