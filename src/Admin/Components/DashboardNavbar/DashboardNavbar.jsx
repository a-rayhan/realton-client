import { HiHomeModern } from "react-icons/hi2";
import DesktopNavbar from "./DesktopNavbar";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import MobileNavbar from "./MobileNavbar";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const DashboardNavbar = () => {
    const [toggleMenu, setToggleMenu] = useState(!false);

    return (
        <div className="flex justify-between items-center h-24">
            <div className="flex justify-between items-center gap-x-2">
                <div className="h-12 w-12 rounded-full bg-[#eb6753] flex justify-center items-center">
                    <HiHomeModern className='text-2xl font-bold text-white' />
                </div>
                <p className="text-2xl font-bold">
                    Realton
                </p>
            </div>

            <DesktopNavbar />

            <div className="hidden xl:flex items-center gap-x-8 text-lg font-medium">
                <div className="flex items-center gap-x-2">
                    <CgProfile className='text-2xl' />
                    <NavLink>
                        Login/Register
                    </NavLink>
                </div>

                <NavLink className="flex items-center gap-x-2 border border-black px-6 py-2 rounded-3xl hover:border-[#eb6753] hover:bg-[#eb6753] hover:text-white">
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

export default DashboardNavbar;