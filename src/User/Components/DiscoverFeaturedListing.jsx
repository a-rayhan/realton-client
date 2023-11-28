import { NavLink } from "react-router-dom";
import DiscoverFeaturedListingCard from "./DiscoverFeaturedListingCard";
import SectionTitle from "./SectionTitle";
import { MdArrowOutward } from "react-icons/md";

const DiscoverFeaturedListing = () => {
    return (
        <div className="bg-[#f7f7f7]">
            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="flex justify-between items-center">
                    <SectionTitle
                        title='Discover Our Advertisement Listings'
                        description='Aliquam lacinia diam quis lacus euismod'
                    />

                    <NavLink className="hidden lg:flex items-center gap-x-2 border border-black px-6 py-3 rounded-xl hover:bg-black hover:text-white font-semibold">
                        See All Properties
                        <MdArrowOutward className='text-xl' />
                    </NavLink>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <DiscoverFeaturedListingCard />
                    <DiscoverFeaturedListingCard />
                    <DiscoverFeaturedListingCard />
                </div>
            </div>
        </div>
    );
};

export default DiscoverFeaturedListing;