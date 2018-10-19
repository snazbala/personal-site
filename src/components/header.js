import React, { PureComponent } from 'react';
import { Link } from 'gatsby';
import MenuIcon from '../images/menuIcon.png';
import CloseIcon from '../images/closeIcon.png';
import './header.css';

const links = [
  {
    display: 'home',
    url: '//',
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
    display: 'blog',
    url: 'https://www.saharbala.com/saharlearnseverything/',
  },
  {
    display: 'contact',
    url: '/contact/',
  },
];

const Links = ({ containerClassName, mobileMenuLinks }) => (
  <div className={containerClassName || 'menu-container'}>
    {links.map(({ display, url }, index) => {
      if (display === 'blog') {
        return (
          <div key={index}>
            <a href={url} className={mobileMenuLinks || 'menu-link'}>
              {display}
            </a>
          </div>
        );
      }
      return (
        <div key={index}>
          <Link to={url} className={mobileMenuLinks || 'menu-link'}>
            {display}
          </Link>
        </div>
      );
    })}
  </div>
);

export default class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  render() {
    const isOpen = this.state.isMenuOpen;
    const toggleMenu = () => {
      if (isOpen) {
        this.setState({ isMenuOpen: false });
      } else {
        this.setState({ isMenuOpen: true });
      }
    };

    let mobileLinks;

    let headerIcon = <img src={MenuIcon} onClick={() => toggleMenu()} />;

    if (isOpen) {
      mobileLinks = (
        <Links
          containerClassName="header__links--mobile"
          mobileMenuLinks="menu-link__mobile"
        />
      );
      headerIcon = <img src={CloseIcon} onClick={() => toggleMenu()} />;
    }

    return (
      <div>
        <div className="header__desktop">
          <h1>
            <Link to="/" className="title-link">
              Sahar Bala
            </Link>
          </h1>
          <Links />
        </div>
        <div className="header__mobile">
          <div>
            <h1>
              <Link to="/" className="title-link">
                Sahar Bala
              </Link>
            </h1>
          </div>
          <div>{headerIcon}</div>
        </div>
        {mobileLinks}
      </div>
    );
  }
}
