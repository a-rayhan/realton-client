import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { CiSquareMore } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const PropertyBoughtCard = () => {
    return (
        <div className="bg-white rounded-xl cursor-pointer">
            <div className="rounded-t-xl h-52 w-full relative">
                <img src="https://homez.ibthemespro.com/images/listings/g1-1.jpg" alt="" className="rounded-t-xl w-full h-full object-cover" />

                <div className="absolute bottom-6 left-6">
                    <p className="bg-white px-3 py-1 rounded-lg text-sm font-semibold">
                        Offered: $200k
                    </p>
                </div>

                <div className="absolute bottom-6 right-6">
                    <p className="bg-green-800 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                        accepted
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

                <div className="flex items-center gap-12 my-4">
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

                <div className="flex justify-between items-center mt-4">
                    <div>
                        <p className="text-sm">
                            Posted by
                        </p>

                        <p className="font-semibold mb-1">
                            Leslie Alexander
                        </p>
                    </div>

                    <div className="inline-flex">
                        <NavLink to='/dashboard/addnew' className="flex items-center px-6 py-2 rounded-xl bg-black text-white text-sm font-medium">
                            Pay

                        </NavLink>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default PropertyBoughtCard;