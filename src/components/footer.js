import React from 'react';
import { Link } from 'gatsby';
import './footer.css';
import Share from './share';

const Footer = () => (
    <div className="footer-container">
        <p>© 2018 SAHAR BALA</p>
        <div className="social-links-container">
            <Share />
        </div>
    </div>
);

export default Footer;
