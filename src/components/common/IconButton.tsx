import React from 'react';

interface Props {
  link: string;
  image: string;
  alt: string;
}

const IconButton = ({ link, image, alt }: Props) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <img src={image} width="40" height="40" alt={alt} />
  </a>
);

export default IconButton;
