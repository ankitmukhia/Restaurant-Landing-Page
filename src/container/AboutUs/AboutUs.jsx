import React from 'react'
import {images } from '../../constants'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
        <div className="app__aboutus-overlay flex__center">
              <img src={images.G} alt="g letter" />
        </div>
        <div className="app__aboutus-content flex__center">
              <div className="app__aboutus-content_about">
                <h1 className="headtext__cormorant">About Us</h1>
                <img src={images.spoon} alt="about-spoon" className="spoon__img" />
                <p className="p__opensans">It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                  with the release of software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <button type='button' className="custom__button">Know More</button>
              </div>
              <div className="app__aboutus-content_knife flex__center">
                <img src={images.knife} alt="about_knife" />
              </div>
              <div className="app__aboutus-content_history">
                <h1 className="headtext__cormorant">Our History</h1>
                <img src={images.spoon} alt="about-spoon" className="spoon__img" />
                <p className="p__opensans">It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                  with the release of software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <button type='button' className="custom__button">Know More</button>
              </div>
        </div>
    </div>
  )
}

export default AboutUs
