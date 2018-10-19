import React from 'react';
import { Link } from 'gatsby';
import './footer.css';
import Share from './share';

const dateObj = new Date();
const currentYear = dateObj.getFullYear();

const Footer = () => (
    <div className="footer-container">
        <p>© {currentYear} SAHAR BALA</p>
        <div className="social-links-container">
            <Share />
        </div>
    </div>
);

export default Footer;
