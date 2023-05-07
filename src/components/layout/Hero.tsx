import React from 'react';
import styled from '@emotion/styled';

const HeroContainer = styled.div`
  background-color: #002627;
  background-image: url('https://amjqeassen.cloudimg.io/cdn/n/n/https://i.imgur.com/IfulIUb.jpg');
  background-size: cover;
  display: flex;
  height: 550px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const HeroTitle = styled.h2`
  color: white;
  text-transform: uppercase;
  font-size: 4.3em;
`;

const HeroSubtitle = styled.div`
  color: white;
  font-family: Raleway, sans-serif;
  font-weight: 200;
  text-align: center;
`;

const Line1 = styled.h3`
  margin-top: -55px;
`;

const Line2 = styled.h3`
  margin-top: -10px;
`;

const Hero = () => (
  <div>
    <HeroContainer>
      <HeroTitle>Sahar Bala</HeroTitle>
      <HeroSubtitle>
        <Line1>software engineer, artist,</Line1>
        <Line2>athlete, lifelong learner</Line2>
      </HeroSubtitle>
    </HeroContainer>
  </div>
);

export default Hero;
