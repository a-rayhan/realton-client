import { IoCompassOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const UserDashboardNav = () => {
    return (
        <div>
            <div className="mt-12">
                <div className="px-5">
                    <h4 className="uppercase text-lg font-medium">Main</h4>

                    <ul className="mt-3 flex flex-col gap-2">
                        <li>
                            <NavLink to='/dashboard/home' className='flex items-center gap-2 font-medium px-2 py-3 rounded-lg hover:bg-black hover:text-white'>
                                <IoCompassOutline className='text-xl' />
                                My Profile
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="px-5 mt-10">
                    <h4 className="uppercase text-lg font-medium">MANAGE LISTINGS</h4>

                    <ul className="mt-3 flex flex-col gap-2">
                        <li>
                            <NavLink to='/dashboard/favourites' className='flex items-center gap-2 font-medium px-2 py-3 rounded-lg hover:bg-black hover:text-white'>
                                <IoCompassOutline className='text-xl' />
                                Wishlist
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/bought' className='flex items-center gap-2 font-medium px-2 py-3 rounded-lg hover:bg-black hover:text-white'>
                                <IoCompassOutline className='text-xl' />
                                Property bought.
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/userreview' className='flex items-center gap-2 font-medium px-2 py-3 rounded-lg hover:bg-black hover:text-white'>
                                <IoCompassOutline className='text-xl' />
                                My reviews
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="px-5 mt-10">
                    <h4 className="uppercase text-lg font-medium">MANAGE ACCOUNT</h4>

                    <ul className="mt-3 flex flex-col gap-2">
                        <li>
                            <NavLink className='flex items-center gap-2 font-medium px-2 py-3 rounded-lg hover:bg-black hover:text-white'>
                                <IoCompassOutline className='text-xl' />
                                Logout
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserDashboardNav;