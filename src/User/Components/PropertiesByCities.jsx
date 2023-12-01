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
                <PropertiesByCitiesCard
                    img='https://homez.ibthemespro.com/images/listings/city-listing-2.png'
                    name='Los Angeles'
                />
                <PropertiesByCitiesCard
                    img='https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?q=80&w=1680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    name='Miami'
                />
                <PropertiesByCitiesCard
                    img='https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    name='New York'
                />
                <PropertiesByCitiesCard
                    img='https://images.unsplash.com/photo-1581373449483-37449f962b6c?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    name='Chicago'
                />
            </div>
        </div>
    );
};

export default PropertiesByCities;