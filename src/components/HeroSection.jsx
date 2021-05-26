import React from 'react'
import { Button } from './Button.jsx'
import './Button.css'
import './HeroSection.css';
import '../App.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video src="/videos/video-1.mp4" autoplay loop muted /> */}
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
            <Button 
            className='btns' 
            buttonstyle='btn--outline'
            buttonSize='btn--large'
            >
            GET STARTED
            </Button>
            <Button 
            className='btns' 
            buttonstyle='btn--primary'
            buttonSize='btn--large'
            >
            WATCH TRAILER <i className='far fa-play-circle'/>
            </Button>
            </div>
        </div>
    )
}

export default HeroSection
