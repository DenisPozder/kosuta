import React from 'react'
import './hall-gallery-slider.css'
import HGSlider from './HGSlider/HGSlider'
import { Link } from 'react-router-dom'
import tree1 from '../../Assets/Hall/tree1.png'
import tree2 from '../../Assets/Hall/forestTree2.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const HallGallerySlider = ({ data }) => {

  return (
    <div className="hall-gallery-slider">
      <LazyLoadImage src={tree1} alt="Dekorativna slika" className='hgs-tree1-img parallax' data-speedx="0.01" data-speedy="0.015" data-speedz="0.01" data-rotation="0.01" />
      <div className="hgs-tree1-overlay"></div>
      <LazyLoadImage src={tree2} alt="Dekorativna slika" className='hgs-tree2-img parallax' data-speedx="0.034" data-speedy="0.026" data-speedz="0.067" data-rotation="0.049" />
      <div className="hgs-tree2-overlay"></div>
      <div className="hgs-main-overlay"></div>
      <div className="hgs-content">
        <h1>Galerija</h1>
        <HGSlider data={data} />
        <Link to={`/proslave/galerija`} className='hgs-btn'>Vidite još</Link>
      </div>
    </div>
  )
}

export default HallGallerySlider