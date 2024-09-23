import React from 'react';
import Nav from '../../Components/Nav/Nav';
import Header from '../../Components/Header/Header';
import { Outlet } from 'react-router';
/**
 * BaseRegisterPage component serves as a layout for the registration page.
 * It includes a Header, a Nav, and an Outlet for nested routes.
 *
 * @component
 * @example
 * return (
 *   <BaseRegisterPage />
 * )
 */
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