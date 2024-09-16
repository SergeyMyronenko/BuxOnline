import React from "react";
import banner from "../../images/banner-header.png";
import "./header.scss";

export default function Header() {
  return (
    <header>
      <img className="banner-header" src={banner} alt="banner-header" />
    </header>
  );
}
