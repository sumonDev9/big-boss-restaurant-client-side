import React, { useEffect, useState } from 'react';
import SectionHeading from './sectionHeading';
import MenuCard from '../shares/MenuCard';

const Popular = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItem = data.filter(item => item.category === 'popular');
            setMenu(popularItem)
        })
    },[]);

    return (
        <div className='w-11/12 mx-auto mb-10'>
            <SectionHeading
                subHeading={"From Our Menu"}
                heading={"Popular Items"}
            >
           </SectionHeading>
           <div className='grid grid-cols-1 mt-10 md:grid-cols-2 gap-8'>
            {
                menu.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
            }
           </div>
        </div>
    );
};

export default Popular;