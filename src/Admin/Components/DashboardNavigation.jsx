import { useState } from "react";
import { MdMenu } from "react-icons/md";
import DeshboardSiderNav from "./DeshboardSiderNav/AdminDeshboardNav";

const DashboardNavigation = () => {
    const [toggleMenu, setToggleMenu] = useState(!false);

    return (
        <div className="">
            {/* <MdMenu className="text-3xl" />
            <p className="text-lg">
                Dashboard Navigation
            </p> */}


            <div onClick={() => setToggleMenu(!toggleMenu)} className="bg-white p-3 mb-5 rounded-lg flex items-center gap-5">

                {
                    toggleMenu === true ?
                        <>
                            <MdMenu className="xl:hidden text-3xl cursor-pointer" />
                            <p>
                                Dashboard Navigation
                            </p>
                        </> :
                        <>
                            <MdMenu className="xl:hidden text-3xl cursor-pointer" />
                            <p>
                                Dashboard Navigation
                            </p>
                        </>
                }

                <div className={`absolute w-[80vw] h-full top-0 right-0 bg-white shadow-xl z-50 flex flex-col text-lg font-medium xl:hidden ${toggleMenu ? 'hidden' : ''}`}>

                    <DeshboardSiderNav />
                </div>
            </div>
        </div>
    );
};

export default DashboardNavigation;