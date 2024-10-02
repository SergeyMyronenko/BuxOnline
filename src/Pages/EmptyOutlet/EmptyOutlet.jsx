import React from "react";
import Header from "../../Components/Header/Header";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "./EmptyOutlet.scss";

const EmptyOutlet = () => {
  return (
    <>
      <Header />
      <div className="main-wrapper">
        <Nav />
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default EmptyOutlet;
