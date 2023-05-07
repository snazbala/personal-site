import React, { useState } from 'react';
import { Link } from 'gatsby';
import MenuIcon from '../../assets/menuIcon.png';
import styled from '@emotion/styled';

import CloseIcon from '../../assets/closeIcon.png';

const links = [
  {
    display: 'home',
    url: '/',
  },
  {
    display: 'story',
    url: '/story/',
  },
  {
    display: 'resume',
    url: '/resume/',
  },
  {
    display: 'projects',
    url: '/projects/',
  },
  {
    display: 'publications',
    url: '/publications/',
  },
  {
    display: 'contact',
    url: '/contact/',
  },
];

const TitleLink = styled(Link)`
  text-transform: uppercase;
  margin: 0;
  font-weight: 200;
  text-decoration: none;
  color: black;
  font-size: 0.8em;
`;

const MenuLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const LinksContainer = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 50%;
  }

  @media only screen and (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    width: 40%;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    border-bottom: 2px solid #efefef;
    box-shadow: 0px 5px rgba(255, 255, 255, 0.5);
    background-color: white;
    width: 100%;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 25px;
    margin-bottom: 10px;
    line-height: 2;
  }
`;

const DesktopHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileHeader = styled.div`
  position: relative;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
    align-items: center;
  }
`;

const TitleHeaderLink = () => (
  <h1>
    <TitleLink to="/">Sahar Bala</TitleLink>
  </h1>
);

const Links = () => (
  <LinksContainer>
    {links.map(({ display, url }, index) => (
      <div key={index}>
        <MenuLink to={url}>{display}</MenuLink>
      </div>
    ))}
  </LinksContainer>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };

  let mobileLinks;

  let headerIcon = (
    <img src={MenuIcon} onClick={() => toggleMenu()} alt="Menu Icon" />
  );

  if (isMenuOpen) {
    mobileLinks = <Links />;
    headerIcon = (
      <img src={CloseIcon} onClick={() => toggleMenu()} alt="Close Menu Icon" />
    );
  }

  return (
    <div>
      <DesktopHeader>
        <TitleHeaderLink />
        <Links />
      </DesktopHeader>
      <MobileHeader>
        <div>
          <TitleHeaderLink />
        </div>
        <div>{headerIcon}</div>
      </MobileHeader>
      {mobileLinks}
    </div>
  );
};

export default Header;
