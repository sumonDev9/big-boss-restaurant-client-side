import React from 'react';
import SectionHeading from '../../components/sectionHeading';
import useMenu from '../../hooks/useMenu';
import { MdEdit } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [menu, ,refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    // delete
    const handleDeleteItem =  (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }


            }
        });
    }
    return (
        <div>
            <SectionHeading heading={"MANAGE ALL ITEMS"} subHeading={'---Hurry Up!---'}></SectionHeading>
            <div>
            <h1>Total items: {menu.length}</h1>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>SL No.</th>
        <th>ITEM IMAGE</th>
        <th>ITEM NAME</th>
        <th>PRICE</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    {
        menu.map((item, index) =>  <tr key={item._id}>
            <td>{index + 1}</td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={item?.image}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>
              <h3>{item.name}</h3>
            </td>
            <td>$ {item?.price}</td>
            <td>
                <Link to={`/dashboard/updateItem/${item._id}`}>
                <button className='text-white btn bg-[#D1A054] p-1 cursor-pointer rounded-md text-4xl'><MdEdit />
                </button>
                </Link>
            </td>
            <td>
              <button onClick={()=> handleDeleteItem(item)} className='text-white btn bg-[#B91C1C] p-1 cursor-pointer rounded-md text-3xl'><RiDeleteBin6Line /></button>
            </td>
          </tr>)
    }
     
    </tbody>

  </table>
</div>
            </div>
            </div>
        </div>
    );
};

export default ManageItems;