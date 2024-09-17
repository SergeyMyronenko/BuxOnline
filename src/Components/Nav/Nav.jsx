import React from "react";
import flag from "../../assets/indexFlagNav.png";
import frame from "../../assets/indexFrameNav.png";
import "../Nav/Nav.scss";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <div className="nav-block-left">
        <img className="img-logo" src={frame} alt="img-logo" />
        <Link to="/BuxOnline/"> <h2 className="name-logo">Buxonline</h2></Link>
      </div>
      <div className="nav-block-right">
        <Link to='/BuxOnline/vacancy'>
          <h3>ВАКАНЦІЇ</h3>
        </Link>
        <h3>ДЛЯ БІЗНЕСУ</h3>
        <a className="nav-entrance" href="#">
          Вхід / Реєстрація
        </a>
        <img className="flag-nav" src={flag} alt="flag-nav" />
        <h4>UK</h4>
      </div>
    </nav>
  );
}
