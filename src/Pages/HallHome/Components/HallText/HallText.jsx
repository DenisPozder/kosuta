import React from 'react'
import './hall-text.css'
import { useTranslation } from 'react-i18next'

const HallText = () => {

  const { t } = useTranslation('hallHome')

  return (
    <div className="hall-text fade-in">
        <p>{t('hhText1')} <br/>
        {t('hhText2')} <br/>
        {t('hhText3')} <br/>
        {t('hhText4')}</p>
    </div>
  )
}

export default HallText