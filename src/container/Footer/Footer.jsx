import React from 'react'


import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { FooterOverlay, Newsletter } from '../../components'
import { images } from '../../constants'

import './Footer.css'

const Footer = () => (
    <div className="app__footer section__padding app__bg">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
            <h1 className='app__footer-headtext'>Contact Us</h1>
            <p className="p__opensans">West Bengal 96, 45 Street , India</p>
            <p className="p__opensans">+91 6589247565</p>
            <p className="p__opensans">+91 6589247565</p>
        </div>
        <div className="app__footer-links_logo">
            <img src={images.gericht} alt="footer-logo" />
            <p className="p__opensans">Lorem Ipsum grand grdeu striug behalding Pongale grdeu striug behalding Pongale</p>
            <img src={images.spoon} alt="spoon" />
            <div className='app__footer-links_icons'>
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
            </div>
        </div>
        <div className='app__footer-links_work'>
            <h1 className='app__footer-headtext'>Working Hours</h1>
            <p className="p__opensans">Monday , Saturday</p>
            <p className="p__opensans">+91 6589247565</p>
            <p className="p__opensans">+91 6589247565</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans">
          2023 Gericht. All Rights Reserved.
        </p>
      </div>
    </div>
  )

export default Footer
