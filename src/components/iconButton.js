import React from 'react';

const IconButton = ({ link, image }) => (
    <a href={link} target="_blank">
        <img src={image} width="40" height="40" />
    </a>
);

export default IconButton;
