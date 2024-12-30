import { useState } from 'react';
import orderCover from '../../src/assets/shop/banner2.jpg'
import Cover from '../shares/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../hooks/useMenu';
import FoodCard from '../components/FoodCard';
import OrderTab from '../components/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (

        <div>
            <Helmet>
             <title>Big Boss | order</title>
            </Helmet>
            <Cover img={orderCover} title={'Order Food'}></Cover>
            <div className='w-11/12 mx-auto mt-10'>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                  
                </TabList>
                <TabPanel>
                 <OrderTab itmes={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab itmes={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab itmes={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab itmes={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab itmes={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
            </div>
        </div>
    );
};

export default Order;