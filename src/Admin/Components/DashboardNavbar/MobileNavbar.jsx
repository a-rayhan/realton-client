import { CgProfile } from "react-icons/cg";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
    return (
        <div>
            <div className="bg-[#eb675312] px-10 py-6 shadow mb-10">
                <p className="text-xl font-semibold">
                    Welcome to Realton
                </p>
            </div>

            <ul>
                <li className="px-8 py-3 hover:bg-[#f7f7f7] cursor-pointer">
                    <NavLink to='/' className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-[#eb6753]" : ""}>
                        Home
                    </NavLink>
                </li>

                <li className="px-8 py-3 hover:bg-[#f7f7f7] cursor-pointer">
                    <NavLink to='/brand' className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-[#eb6753]" : ""}>
                        Properties
                    </NavLink>
                </li>

                <li className="px-8 py-3 hover:bg-[#f7f7f7] cursor-pointer">
                    <NavLink to='/shop' className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-[#eb6753]" : ""}>
                        Dashboard
                    </NavLink>
                </li>
            </ul>

            <div className="px-8 py-3 text-lg font-medium cursor-pointer bg-[#eb675312]">
                <div className="flex items-center gap-x-2">
                    <CgProfile className='text-2xl' />
                    <NavLink>
                        Login/Register
                    </NavLink>
                </div>
            </div>

            <hr className="my-8" />

            <div className="px-8">
                <div>
                    <p className="text-sm mb-2">
                        Total Free Customer Care
                    </p>

                    <p className="mb-5">
                        +(0) 123 050 945 02
                    </p>
                </div>

                <div>
                    <p className="text-sm mb-2">
                        Need Live Support?
                    </p>

                    <p>
                        hi@homez.com
                    </p>
                </div>
            </div>

            <hr className="my-8" />

            <div className="flex items-center gap-x-5 px-8">
                <p className="font-semibold">
                    Follow us
                </p>

                <div className="flex gap-4 text-lg">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaLinkedinIn />
                </div>
            </div>
        </div>
    );
};

export default MobileNavbar;