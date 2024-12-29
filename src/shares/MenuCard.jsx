import React from 'react';

const MenuCard = ({item}) => {
    const {image, name, recipe, price} = item;
    return (
        <div className='flex space-x-4'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[100px]' src={image} alt="" />
            <div>
                <h3 className='text-[#151515] text-xl'>{name}</h3>
                <p className='text-[#737373]'>{recipe}</p>
            </div>
            <p className='text-[#BB8506] text-xl'>${price}</p>
        </div>
    );
};

export default MenuCard;