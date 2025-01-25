import React from 'react'
import './Herosection.css'
import { MdWavingHand } from 'react-icons/md'
import profilePicture from  '../../assets/image.jpg'

const Herosection = () => {
    return (
        <div className='hero-section' id='home'>          
            <div className='hero-section-top'>
                <div className='hero-section-top-image'>
                    <img src={profilePicture} className='profile-image'/>
                </div>
                <span className='hero-section-top-text'>Hi! I'm Manzar Abbas  <MdWavingHand size={38} color='#E5D0AC' className='waving-hand'/></span>

            </div>


            <div className='hero-section-middle'>
                <h1 className='hero-section-middle-heading'>frontend web developer based in Karachi.</h1>

                <p className='hero-section-middle-desc'>I am a frontend developer from Karachi, Pakistan with 1 year of experiece in multiple projects.</p>
            </div>


            <div className='hero-section-bottom'>
                <button className='hero-section-bottom-buttons'>Contact Me</button>
                <button className='hero-section-bottom-buttons'>My Resume</button>
            </div>
        </div>
    )
}

export default Herosection