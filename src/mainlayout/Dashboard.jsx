import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex gap-2">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu space-y-3"> 
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
                            <FaShoppingCart></FaShoppingCart> My cart
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

                    <div className="divider"></div>

                     {/*  home */}
                     <li>
                        <NavLink to='/'>
                            <FaHome></FaHome> Home
                        </NavLink>
                    </li>

                     {/*  home */}
                     <li>
                        <NavLink to='/order/salad'>
                        <MdOutlineMenuBook /> Menu
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;