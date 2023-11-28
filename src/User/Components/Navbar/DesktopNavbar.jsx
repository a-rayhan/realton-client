import { NavLink } from "react-router-dom";

const DesktopNavbar = () => {
    return (
        <div className="hidden xl:block">
            <ul className="text-lg font-medium flex gap-x-7">
                <li>
                    <NavLink to='/' className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-[#eb6753]" : ""}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/properties' className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-[#eb6753]" : ""}>
                        Properties
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard/home' className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-[#eb6753]" : ""}>
                        Dashboard
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default DesktopNavbar;