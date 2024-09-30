import React from 'react';
import Header from '../../Components/Header/Header';
import Nav from '../../Components/Nav/Nav';

import { Outlet } from 'react-router-dom';

const EmptyOutletNoFooter = () => {
    return (
      <>
          <Header />
          <Nav />
          <Outlet></Outlet>
      </>
  );
};

export default EmptyOutletNoFooter