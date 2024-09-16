import React from "react";
import banner from "../../assets/indexBannerHeader.png";
import "./header.scss";

export default function Header() {
  return (
    <header>
      <img className="banner-header" src={banner} alt="banner-header" />
    </header>
  );
}
