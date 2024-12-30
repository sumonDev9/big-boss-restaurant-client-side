import React from 'react';
import MenuCard from '../shares/MenuCard';
import Cover from '../shares/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, title, img}) => {
    return (
        <div className=' pb-8'>
            {title &&  <Cover img={img} title={title}></Cover>}
             <div className='grid w-11/12 mx-auto grid-cols-1 mt-16 md:grid-cols-2 gap-8'>
            {
                items.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
            }
           </div>
            <div className='flex justify-center mt-5'>
                <Link to='/order'>
                <button className='btn btn-outline  border-0 mt-4 border-b-4'>ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;