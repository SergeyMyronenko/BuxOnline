import React, { useState } from "react";
import flag from "../../assets/indexFlagNav.png";
import frame from "../../assets/indexFrameNav.png";
import { TiArrowSortedDown } from "react-icons/ti";


import "../Nav/Nav.scss";

export default function Nav() {
   const [language, setLanguage] = useState("UK");

  const changeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "UK" ? "US" : "UK"));
  };

  return (
    <nav>
      <div className="nav-block-left">
        <img className="img-logo" src={frame} alt="img-logo" />
        <h2 className="name-logo">Buxonline</h2>
      </div>
      <div className="nav-block-right">
        <h3>ВАКАНЦІЇ</h3>
        <h3>ДЛЯ БІЗНЕСУ</h3>
        <a className="nav-entrance" href="#">
          Вхід / Реєстрація
        </a>
        <button className="button-language-change" onClick={changeLanguage}>
          <img className="flag-nav" src={flag} alt="flag-nav" />
          <h4>{language}</h4>
          <TiArrowSortedDown />
          {/* <img className="language-arrow" src={arrowDown} alt = "language-arrow"/> */}
        </button>
      </div>
    </nav>
  );
}
