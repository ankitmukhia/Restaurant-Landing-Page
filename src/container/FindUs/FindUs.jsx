import React from 'react'

import { SubHeading } from '../../components'
import { images, data } from '../../constants';

const FindUs = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
          <SubHeading title="Contact"/>
          <h1 className="headtext__cormorant" style={{marginBottm: '3rem'}}>Find Us </h1>
          <div className="app__wrapper-content">
            <p className="p__opensans">Lane Ends And Go To the Name</p>
            <p className="p__cormorant" style={{color: "#DCCA87", margin: "2rem 0"}}>Opening Houres</p>
            <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
            <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
          </div>
          <button type='button' className="custom__button" style={{marginTop: '2rem'}}>Visit Us</button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.findus} alt="findus-image" />
      </div>
    </div>
  )
}

export default FindUs