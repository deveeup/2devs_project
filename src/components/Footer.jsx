import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Footer.scss';

const Footer = () => (
  <footer>
    <div className="item">
      <Link to='/'>Explora</Link>
    </div>
    <div className="item">
      <Link to='/'>Contáctanos</Link>
    </div>
    <div className="item">
      <Link to='/'>Preguntas frecuentes</Link>
    </div>
    <div className="item">
      <Link to='/'>Términos y condiciones</Link>
    </div>
  </footer>
);

export default Footer;