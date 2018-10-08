import React from 'react';
import image from '../images/hero-image.jpg';
import './hero.css';

const Hero = () => (
    <div>
        <div className="hero-text-container">
            <div className="hero-title">
                <h2>Sahar Bala</h2>
            </div>
            <div className="hero-subtitle">
                <h3 className="top-item">software engineer, artist,</h3>
                <h3 className="bottom-item">athlete, lifelong learner</h3>
            </div>
        </div>
    </div>
);

export default Hero;
