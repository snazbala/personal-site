import React from 'react';

const IconButton = ({ link, image, alt }) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} width="40" height="40" alt={alt} />
    </a>
);

export default IconButton;
