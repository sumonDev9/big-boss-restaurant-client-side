import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shares/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;