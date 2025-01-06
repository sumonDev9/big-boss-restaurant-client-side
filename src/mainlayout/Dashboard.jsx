import { FaAd, FaCalendar, FaFileContract, FaHome, FaList, FaShoppingCart, FaThList, FaUsers, FaUtensils } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../hooks/useCarts";
import { TbBrandBooking } from "react-icons/tb";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCarts();

    // TODO:get isAdmin value form the database
    const [isAdmin] = useAdmin();



    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu space-y-3"> 
                    {
                        isAdmin ? <>
                                         {/* user home */}
                    <li>
                        <NavLink to='/dashboard/adminHome'>
                            <FaHome></FaHome> Admin Home
                        </NavLink>
                    </li>
                    {/* reservation */}
                    <li>
                        <NavLink to='/dashboard/addItems'>
                        <FaUtensils /> Add items
                        </NavLink>
                    </li>
                    {/* my cart */}
                    <li>
                        <NavLink to='/dashboard/manageItems'>
                        <FaThList /> Manage items
                        </NavLink>
                    </li>
                    {/* add review */}
                    <li>
                        <NavLink to='/dashboard/bookings'>
                        <TbBrandBooking /> Manage bookings
                        </NavLink>
                    </li>
                    {/* my booking*/}
                    <li>
                        <NavLink to='/dashboard/users'>
                        <FaUsers /> All users
                        </NavLink>
                    </li>
                        </>
                        
                        : 
                        
                            <>

                                {/* user home */}
                                <li>
                                    <NavLink to='/dashboard/userHome'>
                                        <FaHome></FaHome> User Home
                                    </NavLink>
                                </li>
                                {/* reservation */}
                                <li>
                                    <NavLink to='/dashboard/reservation'>
                                        <FaCalendar></FaCalendar> Reservation
                                    </NavLink>
                                </li>
                                {/* my cart */}
                                <li>
                                    <NavLink to='/dashboard/cart'>
                                        <FaShoppingCart></FaShoppingCart> My cart ({cart.length})
                                    </NavLink>
                                </li>
                                {/* add review */}
                                <li>
                                    <NavLink to='/dashboard/review'>
                                        <FaAd></FaAd> Add review
                                    </NavLink>
                                </li>
                                {/* my booking*/}
                                <li>
                                    <NavLink to='/dashboard/bookings'>
                                        <FaList></FaList> My booking
                                    </NavLink>
                                </li>
                            </>
                    }
                        {/* shares common */}
                    <div className="divider"></div>

                     {/*  home */}
                     <li>
                        <NavLink to='/'>
                            <FaHome></FaHome> Home
                        </NavLink>
                    </li>

                     {/*  menu */}
                     <li>
                        <NavLink to='/order/salad'>
                        <MdOutlineMenuBook /> Menu
                        </NavLink>
                    </li>
                     {/*  contact */}
                     <li>
                        <NavLink to='/order/contact'>
                        <FaFileContract></FaFileContract> Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 bg-gray-200 px-10 pt-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;