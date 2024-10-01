import React from "react";
import Header from "../../Components/Header/Header";
import Nav from "../../Components/Nav/Nav";
import { Outlet } from "react-router-dom";
import "./EmptyOutlet.scss";

const EmptyOutletNoFooter = () => {
  return (
    <>
      <Header />
      <div className="main-wrapper">
        <Nav />
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default EmptyOutletNoFooter;
