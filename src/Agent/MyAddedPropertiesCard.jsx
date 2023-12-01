import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { CiSquareMore } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";

const MyAddedPropertiesCard = ({ property, handleDeleteItem }) => {
    const { _id, title, price, location, username, photo, userphoto, status } = property;
    return (
        <div className="bg-white rounded-xl cursor-pointer">
            <div className="rounded-t-xl h-52 w-full relative">
                <img src="https://homez.ibthemespro.com/images/listings/g1-1.jpg" alt="" className="rounded-t-xl w-full h-full object-cover" />

                <div className="absolute bottom-6 left-6">
                    <p className="bg-white px-3 py-1 rounded-lg text-sm font-semibold">
                        ${price}
                    </p>
                </div>

                <div className="absolute bottom-6 right-6">
                    {
                        status === 'accepted' ?
                            <>
                                <p className="bg-green-800 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                                    Verified
                                </p>
                            </> :
                            <>
                                <p className="bg-red-200 text-red-800 px-3 py-1 rounded-lg text-sm font-semibold">
                                    Pending
                                </p>
                            </>
                    }
                </div>

                <div className="absolute top-6 right-6 cursor-pointer">
                    <p onClick={() => handleDeleteItem(_id)} className="bg-white px-3 py-2 rounded-lg text-lg font-medium uppercase flex items-center gap-x-1">
                        <FaRegTrashAlt />
                    </p>
                </div>

                <NavLink to={`/dashboard/updateproperty/${_id}`} className="absolute top-6 left-6">
                    <p className="bg-white px-3 py-2 rounded-lg text-sm font-medium uppercase flex items-center gap-x-1">
                        Update
                    </p>
                </NavLink>
            </div>

            <div className="p-6">
                <p className="text-lg font-semibold mb-1 hover:underline">
                    {title}
                </p>

                <p className="text-sm">
                    {location}
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

                <div className="mt-4">
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-400">
                            <img src={userphoto} alt="" className="w-full h-full rounded-full object-cover" />
                        </div>

                        <div>
                            <p className="text-sm">
                                Posted by
                            </p>

                            <p className="font-semibold mb-1">
                                {username}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAddedPropertiesCard;