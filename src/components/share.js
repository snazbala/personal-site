import React from 'react';
import IconButton from './iconButton';
import Facebook from '../images/facebook.png';
import Twitter from '../images/twitter.png';
import LinkedIn from '../images/linkedin.png';
import Instagram from '../images/instagram.png';

const shareIconData = [
    {
        image: Facebook,
        link: 'https://www.facebook.com/sahar.bala',
    },
    {
        image: Twitter,
        link: 'https://twitter.com/snazbala',
    },
    {
        image: LinkedIn,
        link: 'https://www.linkedin.com/in/saharbala/',
    },
    {
        image: Instagram,
        link: 'https://www.instagram.com/snazbala',
    },
];

const Share = () =>
    shareIconData.map(site => (
        <IconButton image={site.image} link={site.link} />
    ));

export default Share;
