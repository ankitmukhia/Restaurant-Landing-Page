import React, { useRef } from 'react'
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Gallery.css'




const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04 ];





const Gallery = () => {
  const scrollref = useRef(null)

  const scroll = (direction) => {
    // const { current } = scrollref;
    if(direction === 'left') {
      scrollref.current.scrollLeft -= 300;
    }else {
      scrollref.current.scrollLeft += 300;
    }
  }
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
         <SubHeading title="Instagram"/>
         <h1 className="headtext__cormorant">Photo Gallery</h1>
         <p className="p__opensans" style={{color: '#AAA', marginTop: '2rem'}}>
         Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
         </p>
         <button type='button' className="custom__button">View More</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollref}>
            {galleryImages.map((image, index)=> (
                <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                    <img src={image} alt="gallery" />
                    <BsInstagram className="gallery__image-icon" />
                </div>
            ))}
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icons" onClick={()=>scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icons" onClick={()=>scroll('right')} />
        </div>
      </div>
    </div>
  )
}

export default Gallery