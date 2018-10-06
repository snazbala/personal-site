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
      <Link to="/experience/" className="menu-link">
        experience
      </Link>
    </div>
    <div>
      <Link to="/blog/" className="menu-link">
        blog
      </Link>
    </div>
    <div>
      <Link to="/art/" className="menu-link">
        art
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
