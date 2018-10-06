import React from 'react';
import image from '../images/hero-image.jpg';
import './hero.css';

const Hero = () => (
    <div>
        <img src={image} className="hero-image" />
        <div className="hero-text">
            <h2>Sahar Bala</h2>
        </div>
    </div>
);

export default Hero;
