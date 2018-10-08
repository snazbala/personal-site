import React from 'react';
import { Link } from 'gatsby';
import './header.css';

const Menu = () => (
  <div className="menu-container">
    <div>
      <Link to="//" className="menu-link">
        home
      </Link>
    </div>
    <div>
      <Link to="/story/" className="menu-link">
        story
      </Link>
    </div>
    <div>
      <Link to="/resume/" className="menu-link">
        resume
      </Link>
    </div>
    <div>
      <Link to="/contact/" className="menu-link">
        contact
      </Link>
    </div>
  </div>
);

const Header = () => (
  <div className="header-container">
    <h1>
      <Link to="/" className="title-link">
        Sahar Bala
      </Link>
    </h1>
    <Menu />
  </div>
);

export default Header;
