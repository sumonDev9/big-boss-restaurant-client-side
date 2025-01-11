import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AdminHome = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: stats}  = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async() => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })
    return (
        <div>
            <h2 className='text-3xl'>
                <span>Hi, Welcome</span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
        </div>
    );
};

export default AdminHome;