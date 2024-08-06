import React from 'react'
import './loader.css'
import loadingLeaves from '../../Assets/loadingLeaves.png'
import loadingLogo from '../../Assets/loadingLogo.png'

const Loader = () => {
  return (
    <div className="loader-section">
        <img className="ls-leaves" src={loadingLeaves} alt="Lišće za učitavanje" />
        <img className="ls-logo" src={loadingLogo} alt="Logo za učitavanje" />
    </div>
  )
}

export default Loader