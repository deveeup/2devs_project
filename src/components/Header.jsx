import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

const Header = (props) => (
  <header>
    <Link to='/'>LogoImage</Link>
    <div className="burguerMenu">
      <div className="burguerMenu-line"/>
      <div className="burguerMenu-line"/>
    </div>
  </header>
);

export default Header;