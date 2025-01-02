import React from 'react';
import useCarts from '../../hooks/useCarts';
import { MdDeleteOutline } from 'react-icons/md';

const Cart = () => {
    const [cart] = useCarts();
    const totalprice = cart.reduce((total, item) => total + item.price, 0)

   
    return (
        <div className='p-5 bg-white'>
            <div className='flex justify-between  items-center'>
                <h2 className='text-[#151515] text-3xl font-bold'>Total orders: {cart.length}</h2>
                <h2 className='text-[#151515] text-3xl font-bold'>total price: ${totalprice}</h2>
                <button className='btn bg-[#D1A054] text-white'>Pay</button>
            </div>
            <div>
               <div className="overflow-x-auto  mt-5">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#D1A054] text-white'>
                            <tr>
                                <th>Sl No</th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                          {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={item.image}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td><MdDeleteOutline onClick={()=> handleDelete(item._id)} className='text-white bg-red-700 p-1 rounded-md text-4xl' /></td>
                            </tr>)
                          }
                            
                      </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;