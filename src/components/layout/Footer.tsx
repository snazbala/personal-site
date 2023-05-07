import styled from '@emotion/styled';
import React from 'react';
import Share from './Share';

const dateObj = new Date();
const currentYear = dateObj.getFullYear();

const FooterContainer = styled.div`
  font-size: 0.85em;
  border-top: 1px solid grey;
  margin-bottom: 1.45rem;
  font-family: Raleway, sans-serif;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-transform: none;
  padding-top: 20px;
`;

const SocialLinksContainer = styled.div`
  width: 160px;
  display: flex;
  justify-content: space-between;
`;

const Footer = () => (
  <FooterContainer>
    <p>built by Sahar Bala © {currentYear}</p>
    <SocialLinksContainer>
      <Share />
    </SocialLinksContainer>
  </FooterContainer>
);

export default Footer;
