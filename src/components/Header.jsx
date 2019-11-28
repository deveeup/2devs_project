import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import "../assets/styles/components/Header.scss";
import aerotravel from "../assets/images/aerotravel.png";

const Header = ({ user }) => {

  return (
    <header>
      <Link to="/">
        <img src={aerotravel} alt="aerotravel" />
      </Link>
      <div className="burguerMenu">
        <ul>
          <li>
            <Link to="/">Comprar</Link>
          </li>
          <li>
            <Link to="#">Vender</Link>
          </li>
          <li>
            <Link to="#">Promociones</Link>
          </li>
        </ul>
      </div>
    </header>
  )
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Header);
