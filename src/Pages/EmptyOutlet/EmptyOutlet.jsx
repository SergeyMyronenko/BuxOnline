import React from 'react';
import Header from '../../Components/Header/Header'
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const EmptyOutlet = () => {
    return (
      <>
          <Header />
          <Nav />
          <Outlet></Outlet>
          <Footer></Footer>
      </>
  );
};

export default EmptyOutlet