import { NavLink } from "react-router-dom";
import PopulerPropertiesCard from "./PopulerPropertiesCard";
import SectionTitle from "./SectionTitle";
import { MdArrowOutward } from "react-icons/md";

const PopulerProperties = () => {
    return (
        <div className="bg-black">
            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="text-white">
                    <SectionTitle
                        title='Discover Popular Properties'
                        description='Aliquam lacinia diam quis lacus euismod'
                    />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <PopulerPropertiesCard />
                    <PopulerPropertiesCard />
                    <PopulerPropertiesCard />
                    <PopulerPropertiesCard />
                </div>

                <div className="flex justify-center pt-24">
                    <NavLink className="flex items-center gap-x-2 px-6 py-4 rounded-xl text-white font-semibold bg-[#eb6753]">
                        See All Propertise
                        <MdArrowOutward className='text-xl' />
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default PopulerProperties;