import React from 'react';
import FoodCard from './FoodCard';

const OrderTab = ({itmes}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
           itmes.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
        }
        </div>
    );
};

export default OrderTab;