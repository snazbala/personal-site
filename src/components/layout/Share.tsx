import React from 'react';
import IconButton from '../common/IconButton';
import Facebook from '../../assets/facebook.png';
import Twitter from '../../assets/twitter.png';
import LinkedIn from '../../assets/linkedin.png';
import Instagram from '../../assets/instagram.png';

const shareIconData = [
  {
    name: 'facebook',
    image: Facebook,
    link: 'https://www.facebook.com/sahar.bala',
  },
  {
    name: 'twitter',
    image: Twitter,
    link: 'https://twitter.com/snazbala',
  },
  {
    name: 'linkedin',
    image: LinkedIn,
    link: 'https://www.linkedin.com/in/saharbala/',
  },
  {
    name: 'instagram',
    image: Instagram,
    link: 'https://www.instagram.com/snazbala',
  },
];

const Share = () => (
  <>
    {shareIconData.map((site) => (
      <IconButton
        image={site.image}
        link={site.link}
        key={site.name}
        alt={site.name}
      />
    ))}
  </>
);

export default Share;
