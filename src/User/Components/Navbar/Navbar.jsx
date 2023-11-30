import { HiHomeModern } from "react-icons/hi2";
import DesktopNavbar from "./DesktopNavbar";
import { useContext, useState } from "react";
import { FiMenu } from "react-icons/fi";
import MobileNavbar from "./MobileNavbar";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { IoCompassOutline } from "react-icons/io5";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(!false);

    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error.message));
    }

    return (
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-24">
            <NavLink to='/' className="flex justify-between items-center gap-x-2 cursor-pointer">
                <div className="h-12 w-12 rounded-full bg-[#eb6753] flex justify-center items-center">
                    <HiHomeModern className='text-2xl font-bold text-white' />
                </div>
                <p className="text-2xl font-bold">
                    Realton
                </p>
            </NavLink>

            <DesktopNavbar />

            <div className="hidden xl:flex items-center gap-x-8 text-lg font-medium">

                {
                    user ?
                        <>
                            <div className="flex justify-center items-center gap-x-4 cursor-pointer">
                                <div className="dropdown dropdown-end">
                                    <div className="avatar online m-2" tabIndex={0}>
                                        <div className="w-11 rounded-full">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </div>
                                    <ul className="w-72 pt-4 pb-10 px-8 shadow-2xl menu dropdown-content z-[1] bg-base-100 rounded-box">
                                        <li className="py-2 text-center text-xl">{user?.displayName}</li>
                                        <li className="text-center mb-5">{user?.email}</li>
                                        <div className="flex flex-col">
                                            <li>
                                                <NavLink to='/dashboard/home' className='py-4 px-3 hover:bg-black hover:text-white font-medium text-base'>
                                                    <IoCompassOutline className='text-xl' />
                                                    Dashboard
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink onClick={handleLogout} className='py-4 px-8 bg-black text-white hover:bg-black hover:text-white font-medium text-base'>
                                                    Logout
                                                </NavLink>
                                            </li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </> :
                        <>
                            <NavLink to='/login' className="flex items-center gap-x-2">
                                <CgProfile className='text-2xl' />
                                Login/Register
                            </NavLink>
                        </>
                }

                <NavLink to='/dashboard/addnew' className="flex items-center gap-x-2 border border-black px-6 py-2 rounded-3xl hover:border-[#eb6753] hover:bg-[#eb6753] hover:text-white">
                    Add Property
                    <MdArrowOutward className='text-xl' />
                </NavLink>
            </div>

            <div onClick={() => setToggleMenu(!toggleMenu)} className="xl:hidden">

                {
                    toggleMenu === true ? <FiMenu className="xl:hidden text-3xl cursor-pointer" /> : <FiMenu className="xl:hidden text-3xl cursor-pointer" />
                }

                <div className={`absolute w-[80vw] h-full top-0 left-0 bg-white shadow-xl z-50 flex flex-col text-lg font-medium xl:hidden ${toggleMenu ? 'hidden' : ''}`}>

                    <MobileNavbar />
                </div>
            </div>
        </div>
    );
};

export default Navbar;