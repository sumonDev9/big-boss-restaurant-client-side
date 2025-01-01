import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../shares/Navbar';

const MainLayout = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login')
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;