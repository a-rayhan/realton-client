import { FaRegHeart } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { SlEnergy } from "react-icons/sl";
import { LuBath } from "react-icons/lu";
import { CiSquareMore } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const PopulerPropertiesCard = () => {
    return (
        <div className="bg-white rounded-xl cursor-pointer">
            <div className="rounded-t-xl h-52 w-full relative">
                <img src="https://homez.ibthemespro.com/images/listings/g1-1.jpg" alt="" className="rounded-t-xl w-full h-full object-cover" />

                <div className="absolute bottom-6 left-6">
                    <p className="bg-white px-3 py-1 rounded-lg text-sm font-semibold">
                        Net worth: $200k
                    </p>
                </div>

                <div className="absolute top-6 left-6">
                    <p className="bg-[#eb6753] text-white px-3 py-1 rounded-lg text-sm font-medium uppercase flex items-center gap-x-1">
                        <SlEnergy />
                        Advertise
                    </p>
                </div>
            </div>

            <div className="p-6">
                <p className="text-lg font-semibold mb-1 hover:underline">
                    Equestrian  Family Home
                </p>

                <p className="text-sm">
                    New York City, CA, USA
                </p>

                <div className="flex justify-between items-center gap-8 my-4">
                    <div>
                        <div className="flex items-center gap-x-2">
                            <IoBedOutline />
                            <p className="text-sm">
                                1
                            </p>
                        </div>
                        <p className="text-sm">
                            bed
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center gap-x-2">
                            <LuBath />
                            <p className="text-sm">
                                1
                            </p>
                        </div>
                        <p className="text-sm">
                            bath
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center gap-x-2">
                            <CiSquareMore />
                            <p className="text-sm">
                                1200
                            </p>
                        </div>
                        <p className="text-sm">
                            sqft
                        </p>
                    </div>
                </div>

                <hr />

                <div className="flex justify-between mt-4">
                    <p className="text-sm">
                        For Sale
                    </p>

                    <div className="flex justify-between gap-6 cursor-pointer">
                        <NavLink><FiExternalLink /></NavLink>
                        <NavLink><MdOutlineLibraryAdd /></NavLink>
                        <NavLink><FaRegHeart /></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopulerPropertiesCard;