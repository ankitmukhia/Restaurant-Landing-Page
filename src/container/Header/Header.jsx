import React from 'react'
import { images } from '../../constants'
import { SubHeading } from '../../components'
import './Header.css'

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
        <div className="app__wrapper_info">
            <SubHeading title="Chase the new flavour"/>
            <h1 className="app__header-h1">The Key to Find Dining</h1>
            <p className="p__opensans" style={{margin: "2rem 0"}}>
            Lorem ipsum is placeholder text commonly used in the graphic, 
            print, and publishing industries for previewing layouts and visual mockups.
            </p>
            <button type='button' className="custom__button">Explore Menu</button>
        </div>
        <div className="app__wrapper_img">
            <img src={images.welcome} alt="header img" />
        </div>
    </div>
  )
}

export default Header
