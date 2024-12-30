import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../shares/Cover';
import menuImg from '../../src/assets/menu/banner3.jpg'
import dessertImg from '../../src/assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../src/assets/menu/pizza-bg.jpg'
import saladImg from '../../src/assets/menu/salad-bg.jpg'
import soupImg from '../../src/assets/menu/soup-bg.jpg'
import useMenu from '../hooks/useMenu';
import SectionHeading from '../components/sectionHeading';
import MenuCategory from '../components/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Big Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"our menu"}></Cover>
            {/* menu cover */}
             <SectionHeading subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionHeading>
             {/* offer menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert */}
            <MenuCategory img={dessertImg} items={desserts} title={"dessert"}></MenuCategory>
            {/* pizza */}
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
            {/* salad */}
            <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
            {/* soup */}
            <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;