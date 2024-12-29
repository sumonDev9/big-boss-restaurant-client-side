import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../shares/Cover';
import menuImg from '../../src/assets/menu/banner3.jpg'
import Popular from '../components/Popular';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Big Boss | Menu</title>
            </Helmet>
            <Cover 
            img={menuImg}
            title={"our menu"}
            ></Cover>
            <Popular></Popular>
            <Cover 
            img={menuImg}
            title={"our menu"}
            ></Cover>
            <Popular></Popular>
            <Cover 
            img={menuImg}
            title={"our menu"}
            ></Cover>
            <Popular></Popular>
            <Cover 
            img={menuImg}
            title={"our menu"}
            ></Cover>
            <Popular></Popular>
        </div>
    );
};

export default Menu;