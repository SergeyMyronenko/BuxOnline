 import React from "react";
 import flag from "../../images/flag-nav.png";
 import frame from '../../images/frame-nav.png';
 import './nav.scss';

export default function Nav(){
return (
  <nav>
    <div classNameName="nav-block-left">
      <img
        classNameName="img-logo"
        src={frame}
        alt="img-logo"
      />
      <h2 classNameName="name-logo">Buxonline</h2>
    </div>
    <div className="nav-block-right">
      <h3>ВАКАНЦІЇ</h3>
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
 

       
        
   