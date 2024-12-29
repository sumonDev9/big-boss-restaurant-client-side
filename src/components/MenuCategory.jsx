import React from 'react';
import MenuCard from '../shares/MenuCard';
import Cover from '../shares/Cover';

const MenuCategory = ({items, title, img}) => {
    return (
        <div className=' pb-8'>
            {title &&  <Cover img={img} title={title}></Cover>}
             <div className='grid w-11/12 mx-auto grid-cols-1 mt-16 md:grid-cols-2 gap-8'>
            {
                items.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
            }
           </div>
        </div>
    );
};

export default MenuCategory;