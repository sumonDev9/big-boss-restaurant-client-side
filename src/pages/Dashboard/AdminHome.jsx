import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { MdLocalShipping, MdMenuBook } from 'react-icons/md';
import { GiCash } from 'react-icons/gi';
import { HiOutlineUserGroup } from 'react-icons/hi';

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })

    // chartData
    const {data: chartData } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
          const res = await axiosSecure.get('/order-stats');
          return res.data
        }
    })

    return (
        <div>
            <h2 className='text-3xl'>
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
            <div>
                <div className="stats mr-5 shadow">
                    {/* Revenue */}
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                        <GiCash className='w-8 h-8' />
                        </div>
                        <div className="stat-title">Revenue</div>
                        <div className="stat-value">${stats?.revenue}</div>
                    </div>
                    {/* user */}
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                        <HiOutlineUserGroup className='w-8 h-8' />
                        </div>
                        <div className="stat-title">Users</div>
                        <div className="stat-value">{stats?.users}</div>
                    </div>
                    {/* Products */}
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                        <MdMenuBook className='w-8 h-8' />
                        </div>
                        <div className="stat-title">Menu</div>
                        <div className="stat-value">{stats?.menuItems}</div>
                    </div>
                    {/* Orders */}
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                        <MdLocalShipping className='h-8 w-8 '/>
                        </div>
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{stats?.orders}</div>
                     
                    </div>

                </div>
            </div>

        </div>
    );
};

export default AdminHome;