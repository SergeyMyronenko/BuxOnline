import React from 'react';
import Nav from '../../Components/Nav/Nav';
import Header from '../../Components/Header/Header';
import { Outlet } from 'react-router';
const BaseRegisterPage = () => {
    return (
        <>
           <Header></Header>
           <Nav></Nav>
           <Outlet></Outlet>
        </>
    );
};

export default BaseRegisterPage;