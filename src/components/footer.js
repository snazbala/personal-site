import React from 'react';
import './footer.css';
import Share from './share';

const dateObj = new Date();
const currentYear = dateObj.getFullYear();

const Footer = () => (
    <div className="footer-container">
        <p>built by Sahar Bala © {currentYear}</p>
        <div className="social-links-container">
            <Share />
        </div>
    </div>
);

export default Footer;
