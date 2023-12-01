import { IoBedOutline } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";
import { LuBath } from "react-icons/lu";
import { CiSquareMore } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const DiscoverFeaturedListingCard = ({ property }) => {

    const { title, price, location, username, photo, userphoto } = property;

    return (
        <div className="bg-white rounded-xl cursor-pointer">
            <div className="rounded-t-xl h-64 w-full relative">
                <img src={photo} alt="" className="rounded-t-xl w-full h-full object-cover" />

                <div className="absolute bottom-6 left-6">
                    <p className="bg-white px-3 py-1 rounded-lg text-sm font-semibold">
                        ${price}
                    </p>
                </div>

                <div className="absolute bottom-6 right-6">
                    <p className="bg-green-800 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                        verified
                    </p>
                </div>

                <div className="absolute top-6 left-6">
                    <p className="bg-[#eb6753] text-white px-3 py-1 rounded-lg text-sm font-medium uppercase flex items-center gap-x-1">
                        <SlEnergy />
                        Advertised
                    </p>
                </div>
            </div>

            <div className="p-6">
                <p className="text-lg font-semibold mb-1 hover:underline">
                    {title}
                </p>

                <p className="text-sm">
                    {location}
                </p>

                <div className="flex items-center gap-6 my-4">
                    <div className="flex items-center gap-x-2">
                        <IoBedOutline />
                        <p className="text-sm">
                            1 bed
                        </p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <LuBath />
                        <p className="text-sm">
                            2 bath
                        </p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <CiSquareMore />
                        <p className="text-sm">
                            1200 sqft
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

export default DiscoverFeaturedListingCard;