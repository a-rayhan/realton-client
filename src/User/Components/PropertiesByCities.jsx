import { NavLink } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import { MdArrowOutward } from "react-icons/md";
import PropertiesByCitiesCard from "./PropertiesByCitiesCard";

const PropertiesByCities = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 pt-24">
            <div className="flex justify-between items-center">
                <SectionTitle
                    title='Properties by Cities'
                    description='Aliquam lacinia diam quis lacus euismod'
                />

                <NavLink className="hidden lg:flex items-center gap-x-2 border border-black px-6 py-3 rounded-xl hover:bg-black hover:text-white font-semibold">
                    See All Cities
                    <MdArrowOutward className='text-xl' />
                </NavLink>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <PropertiesByCitiesCard />
                <PropertiesByCitiesCard />
                <PropertiesByCitiesCard />
                <PropertiesByCitiesCard />
            </div>
        </div>
    );
};

export default PropertiesByCities;