import React from 'react';
import useCarts from '../../hooks/useCarts';
import { MdDeleteOutline } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, refetch] = useCarts();
    const totalprice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            axiosSecure.delete(`/carts/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your order has been deleted.",
                        icon: "success"
                    });
                }
            })
            }
          });
    }
    return (
        <div className='p-5 bg-white'>
            <div className='flex justify-between  items-center'>
                <h2 className='text-[#151515] text-3xl font-bold'>Total orders: {cart.length}</h2>
                <h2 className='text-[#151515] text-3xl font-bold'>total price: ${totalprice}</h2>
                {cart.length ?
                    <Link to='/dashboard/payment'>
                        <button className='btn bg-[#D1A054] text-white'>Pay</button>
                    </Link> :
                    <button disabled className='btn bg-[#D1A054] text-white'>Pay</button>
                }
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
                                <td><MdDeleteOutline onClick={()=> handleDelete(item._id)} className='text-white bg-red-700 p-1 cursor-pointer rounded-md text-4xl' /></td>
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