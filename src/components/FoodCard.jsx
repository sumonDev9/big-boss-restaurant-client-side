import React from 'react';

const FoodCard = ({item}) => {
    const {image, name, recipe, price} = item;
    return (
<div className="card bg-base-100 w-96 shadow-xl">
  <figure className=''>
    <img
      src={image}
      alt={name}/>
      <p className='absolute mr-5 mt-5 top-0 right-0 bg-slate-900 text-white px-5 py-2'>${price}</p>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add to cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;