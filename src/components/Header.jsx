import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Header.scss";
import aerotravel from "../assets/images/aerotravel.png";

const Header = props => (
  <header>
    <Link to="/">
      <img src={aerotravel} alt="aerotravel" />
    </Link>
    <div className="burguerMenu">
      <ul>
        <li>
          <a href="#">Comprar</a>
        </li>
        <li>
          <a href="#">Vender</a>
        </li>
        <li>
          <a href="#">Promociones</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
