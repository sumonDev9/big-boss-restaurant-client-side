import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { MdDeleteOutline } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const Allusers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data
        }
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
          console.log(res.data)
          if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title:  `${user.name} is an Admin Now`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
    }

    const handleDeleteUser = (user) => {
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
                    
                    axiosSecure.delete(`/users/${user._id}`)
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
        <div>
            <div className="flex justify-between items-center">
                <h2>All Users</h2>
                <h2>Total Users: {users.length}</h2>
            </div>
            <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead  className='bg-[#D1A054] text-white'>
      <tr>
        <th>SL No</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, index) => <tr key={user._id}>
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
           {user.role === 'admin' ? 'Admin' : <button  onClick={()=> handleMakeAdmin(user)}>
            <FaUsers className='bg-[#D1A054] text-white p-1 cursor-pointer rounded-md text-4xl' />
            </button>}
            </td>
            <td>
                <MdDeleteOutline onClick={()=> handleDeleteUser(user)} className='text-white bg-red-700 p-1 cursor-pointer rounded-md text-4xl' />
            </td>
        </tr>)
      }
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default Allusers;