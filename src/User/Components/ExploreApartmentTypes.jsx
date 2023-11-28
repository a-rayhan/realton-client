import ExploreApartmentTypesCard from "./ExploreApartmentTypesCard";
import SectionTitle from "./SectionTitle";

const ExploreApartmentTypes = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 pt-24">
            <SectionTitle
                title='Explore Apartment Types'
                description='Get some Inspirations from 1800+ skills'
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7">
                <ExploreApartmentTypesCard />
                <ExploreApartmentTypesCard />
                <ExploreApartmentTypesCard />
                <ExploreApartmentTypesCard />
                <ExploreApartmentTypesCard />
            </div>
        </div>
    );
};

export default ExploreApartmentTypes;