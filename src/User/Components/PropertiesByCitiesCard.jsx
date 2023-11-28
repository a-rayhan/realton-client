import { MdArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";

const PropertiesByCitiesCard = () => {
    return (
        <div>
            <div className="w-full h-[362px] rounded-xl relative">
                <img src="https://homez.ibthemespro.com/images/listings/city-listing-2.png" alt="" className="w-full h-[362px] rounded-xl object-cover" />

                <div className="absolute top-0 left-0 bg-black w-full h-full rounded-xl opacity-25"></div>

                <div className="absolute top-6 left-6">
                    <p className="text-white font-semibold mb-2">
                        Los Angeles
                    </p>

                    <p className="text-white text-sm">
                        12 Properties
                    </p>
                </div>

                <div className="absolute bottom-6 left-6">
                    <NavLink className="flex items-center gap-x-1 px-4 py-3 rounded-xl bg-black text-white text-sm font-medium">
                        See All Cities
                        <MdArrowOutward className='text-lg' />
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default PropertiesByCitiesCard;